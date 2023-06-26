import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { getCookie } from "~/utils/cookies";
import { COOKIES } from "~/utils/constants";

export function withSSRAuth<T extends { [key: string]: any }>(
  fn: GetServerSideProps<T>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const token = getCookie(COOKIES.TOKEN, context);

    if (!token) {
      return {
        redirect: {
          destination: "/auth/sign-in",
          permanent: false,
        },
      };
    }

    return await fn({ ...context });
  };
}
