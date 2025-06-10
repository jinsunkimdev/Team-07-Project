import { css } from "@emotion/react";
import { avatarSizeMap } from "./avatarStylesMap";
import avatarDefaultImg from "../../assets/images/img-avatar-default.png";
import Skeleton from "../Skeleton/Skeleton";
import { useState } from "react";

const Avatar = ({
  imgSrc = avatarDefaultImg,
  size = "md",
  onClick,
  className,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
  const dimension = avatarSizeMap[size];

  return (
    <div css={AvatarStyle({ size })} className={className} onClick={onClick}>
      {/* 1. 이미지 로딩 전에는 Skeleton 노출 */}
      {!isLoaded && (
        <Skeleton
          width={dimension}
          height={dimension}
          borderRadius="50%"
          variant="circle"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
          `}
          aria-busy={true}
          role="img"
        />
      )}
         {/* 2. 실제 img: onLoad 시에만 보이도록 */}
      <img
        src={imgSrc}
        alt="프로필 사진"
        width={dimension}
        height={dimension}
        style={{ display: isLoaded ? "block" : "none" }}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = avatarDefaultImg;
          setIsLoaded(true);   // ← 실패했어도 로딩 완료 처리
        }}
        loading="lazy"
      />
    </div>
  );
};

export default Avatar;

const AvatarStyle = ({ size }) => css`
  display: inline-block;
  width: ${avatarSizeMap[size]};
  height: ${avatarSizeMap[size]};
  aspect-ratio: 1/1;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
