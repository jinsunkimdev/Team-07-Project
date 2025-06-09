import { CARDINAL_NUMBER, TEAM } from "../../constants/constants";
import { apiClient } from "../../utils/apiClient";

/**
 * 특정 recipient ID에 해당하는 recipient 정보를 가져옵니다.
 * @param {Object} params
 * @param {string} params.id - recipient의 ID
 * @param {string} [params.team=CARDINAL_NUMBER-TEAM] - 팀 파라미터 (기본값: 16-7)
 *
 * @returns {Promise<Object>}
 *   - recipient 객체 반환 (name, backgroundColor, backgroundImageURL 등 포함)
 *
 * @throws {Error} - 요청 실패 시 에러 메시지를 포함한 예외 발생
 */
export const getRecipient = async ({ id }) => {
  const url = `https://rolling-api.vercel.app/${CARDINAL_NUMBER}-${TEAM}/recipients/${id}/`;
  console.log(url);
  return await apiClient(url)
};
