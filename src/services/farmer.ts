import { GetServerSidePropsContext } from "next";
import { Farmer, Address, DashboardAnalytics } from "@interfaces";
import { fetcher } from ".";
import { COOKIES, INTERNAL_ENDPOINTS } from "~/utils/constants";
import { getCookie } from "~/utils/cookies";

type CreateFarmer = (data: {
  farmer: Partial<Farmer>;
  address: Partial<Address>;
  crops: string[];
}) => Promise<boolean>;

export const createFarmer: CreateFarmer = async (data) => {
  const response = await fetcher.post(INTERNAL_ENDPOINTS.FARMER.CREATE, data);

  if (response.status !== 201) {
    return false;
  }

  return true;
};

export const getAnalytics = async (
  context?: GetServerSidePropsContext
): Promise<DashboardAnalytics | undefined> => {
  const response = await fetcher.get(
    INTERNAL_ENDPOINTS.FARMER.ANALYTICS,
    context
      ? {
          headers: {
            Authorization: `Bearer ${getCookie(COOKIES.TOKEN, context)}`,
          },
        }
      : {}
  );

  if (response.status === 200) {
    return response.data;
  }
};
