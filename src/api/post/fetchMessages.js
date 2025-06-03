import { TEAM } from "../../constants/constants";
import { BASE_URL } from "../../constants/env";

export const getMessages = async ({
  id,
  team = TEAM,
  limit = 12,
  offset = 0,
}) => {
  const res = await fetch(
    `${BASE_URL}/${team}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
  );

// 에러 처리
if (!res.ok) {
  const errMessage = await res.text();
  throw new Error(
    `Failed to fetch messages: ${res.status} ${res.statusText}\n${errMessage}`
  );
}

  const data = await res.json();

  // 정렬은 하지만, 원본 구조는 보존
  const sortedResults = [...data.results].sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

  return {
    ...data,
    // 정렬한 복사배열
    results: sortedResults,
  };
};
