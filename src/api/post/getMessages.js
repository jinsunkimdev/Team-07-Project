import { BASE_URL } from "../../constants/env";

export const getMessages = async ({
  id,
  team = "1",
  limit = 10,
  offset = 0,
}) => {
  const res = await fetch(
    `${BASE_URL}/${team}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
  );

  const data = await res.json();
  // 최신순 (createdAt 내림차순)
  const sortedResults = data.results.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return sortedResults;
};
