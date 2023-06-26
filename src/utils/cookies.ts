import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

type SetCookie = (
  key: string,
  value: string,
  context?: GetServerSidePropsContext
) => void;

type DestroyCookie = (key: string, context?: GetServerSidePropsContext) => void;

export const getCookie = (
  key: string,
  context?: GetServerSidePropsContext
): string | undefined => {
  const cookies = nookies.get(context);
  if (cookies) return cookies[key];
};

export const setCookie: SetCookie = (key, value, context) => {
  nookies.set(context, key, value, {
    path: "/",
  });
};

export const destroyCookie: DestroyCookie = (key, context) => {
  nookies.destroy(context, key);
};
