import { NextApiRequest, NextApiResponse } from "next";
import { RequestError } from "@interfaces";
import { fetcher } from "~/services";
import { EXTERNAL_ENDPOINTS } from "~/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{} | RequestError>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "Token does not exists" });

  const response = await fetcher.post(
    EXTERNAL_ENDPOINTS.FARMER.CREATE,
    req.body,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  if (response.status !== 201) {
    return res.status(response.status).json({ error: response.statusText });
  }

  return res.status(201).send({});
}
