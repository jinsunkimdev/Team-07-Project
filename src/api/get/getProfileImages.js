const getProfileImages = async () => {
  const res = await fetch(`https://rolling-api.vercel.app/profile-images/`);

  if (!res.ok) {
    throw new Error("프로필 이미지 불러오기에 실패했습니다.");
  }

  const data = await res.json();
  return data;
};

export default getProfileImages;
