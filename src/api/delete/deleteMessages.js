import { CARDINAL_NUMBER, TEAM } from "../../constants/constants";
import { apiClient } from "../../utils/apiClient";

/**
 * 메시지 ID로 메시지를 삭제합니다.
 * @param {Object} params
 * @param {string} params.id - 삭제할 메시지의 고유 ID
 * @param {string} [params.team=TEAM] - 팀 이름 (기본값: TEAM 상수)
 * @returns {Promise<void>} - 성공 시 아무것도 반환하지 않음
 * @throws {Error} 삭제 실패 시 에러 메시지를 포함한 예외를 발생시킴
 */
export const deleteMessages = async ({ id, team = TEAM }) => {
  return await apiClient(
    `https://rolling-api.vercel.app/${CARDINAL_NUMBER}-${TEAM}/messages/${id}/`,
    {
      method: "DELETE",
    }
  );
};
