import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "~/services";
import { User, RequestError } from "@interfaces";
import { EXTERNAL_ENDPOINTS } from "~/utils/constants";

type Response = {
  token: string;
  user: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | RequestError>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetcher.post(
      EXTERNAL_ENDPOINTS.AUTH.LOGIN,
      req.body
    );

    if (response.status !== 200) {
      return res.status(response.status).json({ error: response.statusText });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
