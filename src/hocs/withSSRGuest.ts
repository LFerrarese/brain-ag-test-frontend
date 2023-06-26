import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { getCookie } from "~/utils/cookies";
import { COOKIES } from "~/utils/constants";

export function withSSRGuest<T extends { [key: string]: string }>(
  fn: GetServerSideProps<T>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const token = getCookie(COOKIES.TOKEN, context);

    if (token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
}
