import { css } from "@emotion/react";
import { avatarSizeMap } from "./avatarStylesMap";
import avatarDefaultImg from "../../assets/images/img-avatar-default.png";

const Avatar = ({
  imgSrc = avatarDefaultImg,
  size = "md",
  onClick,
  className,
}) => {
  return (
    <div css={AvatarStyle({ size })} className={className} onClick={onClick}>
      <img
        src={imgSrc}
        alt="프로필 사진"
        width={avatarSizeMap[size]}
        height={avatarSizeMap[size]}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = avatarDefaultImg;
        }}
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
