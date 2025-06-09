import { CARDINAL_NUMBER, TEAM } from "../../constants/constants";
import { apiClient } from "../../utils/apiClient";
import { buildQuery } from "../../utils/buildQuery";

export const getCardListItem = async ({
  limit = 10,
  offset,
  ordering = "-createdAt",
}) => {
  const query = buildQuery({ limit, offset, ordering });
  const url = `https://rolling-api.vercel.app/${CARDINAL_NUMBER}-${TEAM}/recipients/?${query}`;
  return await apiClient(url);
};
