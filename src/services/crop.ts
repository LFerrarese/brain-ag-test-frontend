import { Crop } from "@interfaces";
import { fetcher } from ".";
import { INTERNAL_ENDPOINTS } from "~/utils/constants";

type GetCropList = () => Promise<Crop[] | undefined>;

export const getCropList: GetCropList = async () => {
  const response = await fetcher.get(INTERNAL_ENDPOINTS.CROP.GET_LIST);

  if (response.status === 200) {
    return response.data;
  }
};
