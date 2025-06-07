import { TEAM } from "../../constants/constants";
import { BASE_URL } from "../../constants/env";
import { apiClient } from "../../utils/apiClient";
import { buildQuery } from "../../utils/buildQuery";

/**
 * 특정 recipient ID에 해당하는 메시지들을 가져옵니다.
 * @param {Object} params
 * @param {string} params.id - 메시지를 가져올 recipient의 ID
 * @param {string} [params.team=TEAM] - 팀 이름 (기본값: TEAM 상수)
 * @param {number} [params.limit=6] - 가져올 메시지 수 (기본값: 6)
 * @param {number} [params.offset=0] - 페이징 시작점 (기본값: 0)
 * @param {string} [params.sort=""] - 정렬 기준 (e.g., "like"(총 리액션 내림차순) 또는 비워두면 최신순)
 *
 * @returns {Promise<{ count: number, results: array }>}
 *   - count: 전체 메시지 개수
 *   - results: 메시지 배열
 *
 * @throws {Error} - 요청 실패 시 에러 메시지를 포함한 예외 발생
 */
export const getMessages = async ({
  id,
  team = TEAM,
  limit = 6,
  offset = 0,
  sort,
}) => {
  const query = buildQuery({ limit, offset, sort });
  const url = `${BASE_URL}/${team}/recipients/${id}/messages/?${query}`;
  return await apiClient(url);
};


