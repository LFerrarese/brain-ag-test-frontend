import axios from "axios";
import { COOKIES } from "~/utils/constants";
import { getCookie } from "~/utils/cookies";

export const fetcher = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

fetcher.interceptors.request.use(
  (configs) => {
    const cookie = getCookie(COOKIES.TOKEN);
    if (cookie) configs.headers["Authorization"] = `Bearer ${cookie}`;
    return configs;
  },
  (error) => {
    if (error?.status !== 500) {
      return Promise.resolve();
    }

    return Promise.reject();
  }
);
