import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "~/services";
import { EXTERNAL_ENDPOINTS } from "~/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "Token does not exists" });

  const response = await fetcher.get(EXTERNAL_ENDPOINTS.FARMER.ANALYTICS, {
    headers: {
      Authorization: token,
    },
  });

  if (response.status !== 200) {
    return res.status(response.status).json({ error: response.statusText });
  }

  return res.json(response.data);
}
