import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Avatar from "../../../components/Avatar";
import getProfileImages from "../../../api/get/getProfileImages";
import useFetch from "../../../api/useFetch";
import avatarDefaultImg from "../../../assets/images/img-avatar-default.png";

const SelectProfileImage = ({ onChange }) => {
  const [images, setImages] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState(avatarDefaultImg);
  const { isLoading, fetchError, fetchAsync } = useFetch(getProfileImages);

  const changeProfileImageUrl = ({ target }) => {
    const { src } = target;
    setProfileImageUrl(src);
    onChange(src);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { imageUrls } = await fetchAsync();
        if (!imageUrls) return;
        setImages(imageUrls);
      } catch (err) {
        console.error(err);
      }
    };

    loadImages();
  }, [fetchAsync]);

  return (
    <div css={SelectProfileImageStyle}>
      <Avatar size="lg" imgSrc={profileImageUrl} />
      <div className="select-profile-img-area">
        {isLoading && <p>이미지 불러오는 중...</p>}
        {fetchError && <p>이미지를 불러오는 데 실패했어요.. 😢</p>}
        <ul className="select-profile-img">
          {images?.slice(1).map((imageUrl) => (
            <Avatar
              key={imageUrl}
              imgSrc={imageUrl}
              size="md"
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
  gap: 32px;

  .select-profile-img-area p {
    font-size: var(--font-size-16);
    color: var(--gray-500);
    margin-bottom: 12px;
  }

  .select-profile-img {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`;
