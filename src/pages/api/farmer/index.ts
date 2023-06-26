import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "~/services";
import { Farmer, RequestError } from "@interfaces";
import { EXTERNAL_ENDPOINTS } from "~/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Farmer | RequestError>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = req.headers.authorization;
  const { id } = req.query;

  if (!token) return res.status(401).json({ error: "Token does not exists" });

  try {
    const response = await fetcher.get(
      id
        ? EXTERNAL_ENDPOINTS.FARMER.GET.replace("::id", id as string)
        : EXTERNAL_ENDPOINTS.FARMER.GET_LIST,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status !== 200) {
      return res.status(response.status).json({ error: response.statusText });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
