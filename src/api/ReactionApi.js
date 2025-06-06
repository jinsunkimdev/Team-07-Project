import { BASE_URL } from "../constants/env";

export const ReactionsApi = {
  get: async ({ team, id }) => {
    try {
      const res = await fetch(
        `${BASE_URL}/${team}/recipients/${id}/reactions?limit=${limit}&offset=${offset}`
      );

      if (!res.ok) {
        throw new Error(
          `API불러오기 실패ㅋㅋ: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("getReactions 오류:", error);
      throw error;
    }
  },

  post: async ({ team, id, emoji, type }) => {
    try {
      const res = await fetch(
        `${BASE_URL}/${team}/recipients/${id}/reactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emoji, type }),
        }
      );

      if (!res.ok) {
        throw new Error(
          `API불러오기 실패ㅋㅋ: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("postReactions 오류:", error);
      throw error;
    }
  },
};
