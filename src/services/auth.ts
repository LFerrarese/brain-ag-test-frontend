import { User } from "@interfaces";
import { fetcher } from ".";
import { COOKIES, INTERNAL_ENDPOINTS } from "~/utils/constants";
import { setCookie, destroyCookie } from "~/utils/cookies";

type SignIn = (data: {
  email: string;
  password: string;
}) => Promise<User | undefined>;

type SignUp = (data: {
  email: string;
  password: string;
  name: string;
  phone: string;
}) => Promise<true | undefined>;

export const getUserInfoByToken = async (): Promise<User | undefined> => {
  const response = await fetcher.get(INTERNAL_ENDPOINTS.AUTH.VERIFY);

  if (response.status !== 200) {
    destroyCookie(COOKIES.TOKEN);
  }

  if (!response.data?.error) {
    return response.data;
  }
};

export const signIn: SignIn = async (data) => {
  const response = await fetcher.post(INTERNAL_ENDPOINTS.AUTH.LOGIN, data);

  if (!response.data?.error) {
    setCookie(COOKIES.TOKEN, response.data.token);
    return response.data;
  }
};

export const signUp: SignUp = async (data) => {
  const response = await fetcher.post(INTERNAL_ENDPOINTS.AUTH.REGISTER, data);

  if (!response.data?.error) {
    return true;
  }
};
