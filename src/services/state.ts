import { State } from "@interfaces";
import { fetcher } from ".";
import { INTERNAL_ENDPOINTS } from "~/utils/constants";

type GetStateList = () => Promise<State[]>;

export const getStateList: GetStateList = async () => {
  const response = await fetcher(INTERNAL_ENDPOINTS.STATE.GET_LIST);

  if (response.status !== 200) {
    return undefined;
  }

  return response.data;
};
