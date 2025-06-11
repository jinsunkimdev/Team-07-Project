import styled from "@emotion/styled";
import { Suspense } from "react";
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { getImages } from "../../../api/get/getImages";
import { IconCheckButton } from "../../../components/Button/IconButtons";
import {
  BACKGROUND_COLORS,
  BACKGROUND_MODES_MAP,
} from "../../../constants/constants";
import useFetch from "./../../../api/useFetch";
import Skeleton from "../../../components/Skeleton/Skeleton";
import SkeletonImage from "../../../components/Skeleton/SkeletonImage";
import TabButtons from "./../../../components/TabButtons/TabButtons";
import Button from "../../../components/Button";
import { uploadToUploadcare } from "../../../api/get/getNewImageUrl";

// 백그라운드 컬러
const AVAILABLE_COLORS = Object.keys(BACKGROUND_COLORS);
const FIRST_COLOR = AVAILABLE_COLORS[0];

const SelectBackground = ({ onChange }) => {
  const [images, setImages] = useState([]);
  const [firstImage, setFirstImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(FIRST_COLOR);
  const [selectedImage, setSelectedImage] = useState("");
  const [mode, setMode] = useState("color");

  const { fetchError, fetchAsync } = useFetch(getImages);
  const isImageFetchError = mode === "image" && fetchError;
  const isImageFetched = mode === "image" && !fetchError;

  const fileInputRef = useRef();
  const [isImgUploading, setIsImgUploading] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onChange?.({
      backgroundColor: color,
      backgroundImageURL: mode === "color" ? null : selectedImage, // 색상 모드일 때 이미지 제거
    });
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    onChange?.({
      backgroundColor: selectedColor,
      backgroundImageURL: mode === "image" ? url : null, // 이미지 모드일 때만 설정
    });
  };

  const handleChangeMode = (newMode) => {
    setMode(newMode);

    if (newMode === "color") {
      setSelectedColor(FIRST_COLOR);
      setSelectedImage(null);
    } else if (newMode === "image" && images.length > 0) {
      setSelectedImage(firstImage);
    }

    onChange?.({
      backgroundColor: newMode === "color" ? FIRST_COLOR : selectedColor,
      backgroundImageURL: newMode === "image" ? firstImage : null,
    });
  };

  const handleTabButtonClick = (btnValue) => {
    handleChangeMode(BACKGROUND_MODES_MAP[btnValue]);
  };

  const addNewImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImgUploading(true);

    try {
      const uploadedURL = await uploadToUploadcare(file);
      setImages((prev) => [...prev, uploadedURL]);
      setSelectedImage(uploadedURL);
      onChange?.({
        backgroundColor: selectedColor,
        backgroundImageURL: uploadedURL,
      });
      setIsImgUploading(false);
    } catch (error) {
      console.log("이미지 업로드 실패: ", error);
    } finally {
      setIsImgUploading(false);
    }

    fileInputRef.current.value = null;
  };

  // 배경 이미지 api 호출
  useEffect(() => {
    const fetchImages = async () => {
      const result = await fetchAsync();
      setImages(result);
    };
    fetchImages();
  }, [fetchAsync]);

  // 배경/컬러 미설정시 기본값으로 첫번째 값 전송 (api 유효값 설정용)
  useEffect(() => {
    setSelectedColor(FIRST_COLOR);
    const firstImage = images[0];
    setFirstImage(firstImage);
    setSelectedImage(firstImage);

    onChange?.({
      backgroundColor: FIRST_COLOR,
      backgroundImageURL: firstImage,
    });
  }, [onChange, images]);

  return (
    <>
      <BackgroundLabel>배경화면을 선택해 주세요.</BackgroundLabel>
      <SubText>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</SubText>

      <TabButtons btns={["컬러", "이미지"]} onClick={handleTabButtonClick} />

      <TabsContentWrapper>
        {mode === "color" && (
          <div className="color-list-area">
            <ColorList>
              {AVAILABLE_COLORS.map((color) => (
                <ColorOption
                  key={color}
                  color={BACKGROUND_COLORS[color]}
                  newColor={color}
                  selected={selectedColor === color}
                  onClick={() => handleColorClick(color)}
                >
                  {selectedColor === color && (
                    <CheckIconWrapper>
                      <IconCheckButton />
                    </CheckIconWrapper>
                  )}
                </ColorOption>
              ))}
            </ColorList>
          </div>
        )}

        {isImageFetchError && (
          <div css={imageFetchErrorStyle}>
            배경 이미지 불러오기에 실패했습니다. 😥
          </div>
        )}
        {isImageFetched && (
          <div className="image-list-area">
            <ImageList>
              {images.map((url, idx) => (
                <ImageOption
                  key={idx}
                  onClick={() => handleImageClick(url)}
                  selected={selectedImage === url}
                >
                  <Suspense
                    fallback={<Skeleton borderRadius="var(--radius-lg)" />}
                  >
                    <SkeletonImage src={url} borderRadius="var(--radius-lg)" />
                  </Suspense>
                  {selectedImage === url && (
                    <CheckIconWrapper>
                      <IconCheckButton />
                    </CheckIconWrapper>
                  )}
                </ImageOption>
              ))}
            </ImageList>
            {/* 배경 이미지 추가 */}
            <Button
              variant="secondary"
              size="sm"
              onClick={addNewImage}
              disabled={isImgUploading}
            >
              {isImgUploading ? "업로드 중..." : "이미지 추가"}
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        )}
      </TabsContentWrapper>
    </>
  );
};

export default SelectBackground;

const imageFetchErrorStyle = css`
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabsContentWrapper = styled.div`
  min-height: 220px;
`;

const ColorList = styled.ul`
  padding: 40px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColorOption = styled.li`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  border: transparent;
  background-color: ${({ color }) => color};
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    border-radius: var(--radius-lg);
    transition: background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.1); // hover 시 어두운 오버레이
  }

  > * {
    z-index: 1;
  }
`;

const ImageList = styled.div`
  padding: 40px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// ImageOption: 이미지 + 클릭 영역통합
const ImageOption = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    transition: opacity 0.3s ease;
    opacity: ${({ selected }) => (selected ? "0.3" : "1")};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius-lg);
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  }

  > * {
    z-index: 1;
  }
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  color: white;
`;

const BackgroundLabel = styled.span`
  color: var(--gray-900);
  font-size: var(--font-size-24);
  font-weight: var(--font-weight-bold);
`;

const SubText = styled.p`
  line-height: 26px;
  color: var(--gray-500);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  margin: 0px 0px 24px;
`;
