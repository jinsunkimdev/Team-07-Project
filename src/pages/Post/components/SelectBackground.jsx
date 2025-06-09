import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getImages } from "../../../api";
import { IconCheckButton } from "../../../components/Button/IconButtons";

// 백그라운드 컬러
const BackgroundColor = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  blue: "#B1E4FF",
  green: "#D0F5C3",
};
const AVAILABLE_COLORS = Object.keys(BackgroundColor);

// 컴포넌트 본문
const SelectBackground = ({ onChange }) => {
  const [images, setImages] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [mode, setMode] = useState("color");

  useEffect(() => {
    const fetchData = async () => {
      const imagesData = await getImages();
      if (Array.isArray(imagesData)) setImages(imagesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedColor && mode === "color") {
      const firstColor = AVAILABLE_COLORS[0];
      setSelectedColor(firstColor);
      onChange?.({
        backgroundColor: firstColor,
        backgroundImageURL: undefined,
      });
    } else if (!selectedImage && mode === "image" && images.length > 0) {
      const firstImage = images[0];
      if (selectedImage !== firstImage) {
        setSelectedImage(firstImage);
        onChange?.({
          backgroundColor: undefined,
          backgroundImageURL: firstImage,
        });
      }
    }
  }, [selectedColor, selectedImage, mode, images, onChange]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedImage("");
    onChange?.({ backgroundColor: color, backgroundImageURL: undefined });
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setSelectedColor("");
    onChange?.({ backgroundColor: undefined, backgroundImageURL: url });
  };

  const handleChangeMode = (mode) => {
    setMode(mode);
    if (mode === "color") {
      setSelectedImage("");
    }
    if (mode === "image") {
      setSelectedColor("");
    }
  };

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
                color={BackgroundColor[color]}
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

        {mode === "image" && (
          <ImageList>
            {images.map((url, idx) => (
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
  transition: filter 0.3s ease;
  filter: ${({ selected }) => (selected ? "brightness(100%)" : "none")};
  position: relative;
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
`;

const CheckIconWrapper = styled.div`
  position: absolute;
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
