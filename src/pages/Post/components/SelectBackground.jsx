import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { getImages } from "../../../api/get/getImages";
import { IconCheckButton } from "../../../components/Button/IconButtons";
import { BACKGROUND_COLORS } from "../../../constants/constants";
import useFetch from "./../../../api/useFetch";
import Skeleton from "../../../components/Skeleton/Skeleton";

// 백그라운드 컬러
const AVAILABLE_COLORS = Object.keys(BACKGROUND_COLORS);
const FIRST_COLOR = AVAILABLE_COLORS[0];

// 컴포넌트 본문
const SelectBackground = ({ onChange }) => {
  const [images, setImages] = useState([]);
  const [firstImage, setFirstImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(FIRST_COLOR);
  const [selectedImage, setSelectedImage] = useState("");
  const [mode, setMode] = useState("color");

  const { fetchError, fetchAsync } = useFetch(getImages);
  const [isImageReady, setIsImageReady] = useState(false);

  const isImageFetchError = mode === "image" && fetchError;
  const isImageFetched = mode === "image" && !fetchError;

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onChange?.({ backgroundColor: color, backgroundImageURL: selectedImage });
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    onChange?.({ backgroundColor: selectedColor, backgroundImageURL: url });
  };

  const handleChangeMode = (newMode) => {
    setMode(newMode);

    if (newMode === "color") {
      setSelectedColor(FIRST_COLOR);
    } else if (newMode === "image" && images.length > 0) {
      setSelectedImage(firstImage);
    }

    onChange?.({
      backgroundColor: FIRST_COLOR,
      backgroundImageURL: firstImage,
    });
  };

  // 배경 이미지 로딩 상태 관리 (스켈레톤 적용 준비)
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagesData = await fetchAsync();
        if (!imagesData) return;

        // 이미지 프리로드
        const urlsToLoad = imagesData;
        const preloadPromises = urlsToLoad.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve(src);
              img.onerror = () => resolve(null);
            })
        );

        const results = await Promise.allSettled(preloadPromises);

        const successfullyLoaded = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        setImages(successfullyLoaded);

        setIsImageReady(true);
      } catch (err) {
        console.error(err);
      }
    };

    loadImages();
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
    <div>
      <BackgroundLabel>배경화면을 선택해 주세요.</BackgroundLabel>
      <SubText>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</SubText>

      <ToggleButtons>
        <button
          onClick={() => handleChangeMode("color")}
          className={mode === "color" ? "active" : ""}
        >
          컬러
        </button>
        <button
          onClick={() => handleChangeMode("image")}
          className={mode === "image" ? "active" : ""}
        >
          이미지
        </button>
      </ToggleButtons>

      <TabsContentWrapper>
        {mode === "color" && (
          <ColorList>
            {AVAILABLE_COLORS.map((color) => (
              <ColorOption
                key={color}
                color={BACKGROUND_COLORS[color]}
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
        )}

        {isImageFetchError && (
          <div css={imageFetchErrorStyle}>
            배경 이미지 불러오기에 실패했습니다. 😥
          </div>
        )}
        {isImageFetched && (
          <ImageList>
            {!isImageReady
              ? Array.from({ length: AVAILABLE_COLORS.length }).map(
                  (_, idx) => (
                    <ImageOption key={idx}>
                      <Skeleton borderRadius="var(--radius-lg)" />
                    </ImageOption>
                  )
                )
              : images.map((url, idx) => (
                  <ImageOption
                    key={idx}
                    onClick={() => handleImageClick(url)}
                    selected={selectedImage === url}
                  >
                    <img src={url} alt="" />
                    {selectedImage === url && (
                      <CheckIconWrapper>
                        <IconCheckButton />
                      </CheckIconWrapper>
                    )}
                  </ImageOption>
                ))}
          </ImageList>
        )}
      </TabsContentWrapper>
    </div>
  );
};

export default SelectBackground;

const imageFetchErrorStyle = css`
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 스타일 컴포넌트
const TabsContentWrapper = styled.div`
  min-height: 220px;
`;

const ToggleButtons = styled.div`
  display: flex;
  margin-top: 12px;

  button {
    width: 112px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 6px;
    border: var(--gray-100);
    background-color: var(--gray-100);
    cursor: pointer;

    &.active {
      border: 2px solid var(--purple-600);
      background-color: var(--white);
      color: var(--purple-600);
    }
  }
`;

const ColorList = styled.div`
  padding: 40px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColorOption = styled.div`
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
