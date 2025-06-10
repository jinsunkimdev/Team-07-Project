import { CARDINAL_NUMBER, TEAM } from "../../constants/constants";
import { apiClient } from "../../utils/apiClient";
import { buildQuery } from "../../utils/buildQuery";

export const getCardListItem = async ({ limit = 10, offset, sort }) => {
  const query = buildQuery({ limit, offset, sort });
  const url = `https://rolling-api.vercel.app/${CARDINAL_NUMBER}-${TEAM}/recipients/?${query}`;
  return await apiClient(url);
};
