const BASE_URL = "https://rolling-api.vercel.app";

// 백그라운드 이미지 GET 요청 함수
export const getImages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/background-images/`);
    if (!response.ok) {
      console.error("이미지 데이터를 불러오지 못했습니다");
      return [];
    }
    const data = await response.json();
    return data.imageUrls || [];
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
    return [];
  }
};
