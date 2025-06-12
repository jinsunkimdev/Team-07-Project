import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Avatar from "../../../components/Avatar";
import getProfileImages from "../../../api/get/getProfileImages";
import useFetch from "../../../api/useFetch";
import avatarDefaultImg from "../../../assets/images/img-avatar-default.png";
import {
  BREAKPOINTS,
  PROFILE_IMAGE_LENGTH,
} from "../../../constants/constants";
import Skeleton from "../../../components/Skeleton/Skeleton";

const SelectProfileImage = ({ onChange, onResponsive }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState(avatarDefaultImg);
  const [isImageDefault, setIsImageDefault] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);

  const { fetchError, fetchAsync } = useFetch(getProfileImages);

  const isMobile = onResponsive === "mobile";
  const avatarSkeletonSize = isMobile ? "40px" : "56px";

  const changeProfileImageUrl = ({ target }) => {
    const { src } = target;
    setProfileImageUrl(src);
    setIsImageDefault(false);
    onChange(src);
  };

  const initializeImage = () => {
    setIsImageDefault(true);
    setProfileImageUrl(avatarDefaultImg);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { imageUrls } = await fetchAsync();
        if (!imageUrls) return;

        // 이미지 프리로드
        const urlsToLoad = imageUrls.slice(1); // 첫번째(기본) 이미지 제외
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
        setLoadedImages(successfullyLoaded);

        setIsImageReady(true);
      } catch (err) {
        console.error(err);
      }
    };

    loadImages();
  }, [fetchAsync]);

  return (
    <div css={SelectProfileImageStyle}>
      <div
        className={`profile-img-area ${isImageDefault ? "default" : ""}`}
        onClick={initializeImage}
      >
        <Avatar size="lg" imgSrc={profileImageUrl} />
      </div>
      <div className="select-profile-img-area">
        {fetchError && <p>이미지를 불러오는 데 실패했어요.. 😢</p>}
        <ul className="select-profile-img">
          {!isImageReady
            ? Array.from({ length: PROFILE_IMAGE_LENGTH }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  width={avatarSkeletonSize}
                  height={avatarSkeletonSize}
                  variant="circle"
                />
              ))
            : loadedImages.map((imageUrl) => (
                <Avatar
                  key={imageUrl}
                  imgSrc={imageUrl}
                  size={isMobile ? "sm" : "md"}
                  onClick={changeProfileImageUrl}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectProfileImage;

const SelectProfileImageStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    gap: 32px;
  }

  .profile-img-area {
    position: relative;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    flex-shrink: 0;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      background: url("/src/assets/images/ic-close-gray.svg") no-repeat center;
      background-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: 0.2s;
    }

    &:not(.default):hover:before {
      opacity: 1;
      visibility: visible;
    }
  }

  .select-profile-img-area p {
    font-size: var(--font-size-16);
    color: var(--gray-500);
    margin-bottom: 12px;
  }

  .select-profile-img {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    @media (min-width: ${BREAKPOINTS.md}px) {
      gap: 6px;
    }
  }
`;
