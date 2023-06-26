import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "~/services";
import { EXTERNAL_ENDPOINTS } from "~/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetcher.post(
      EXTERNAL_ENDPOINTS.AUTH.REGISTER,
      req.body
    );

    if (response.status !== 201) {
      return res.status(response.status).json({ error: response.statusText });
    }

    return res.status(201).send({});
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
