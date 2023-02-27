// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
  role: "admin" | "user";
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      username: "user name here 1",
      role: "admin",
    },
    {
      username: "user name here 2",
      role: "user",
    },
    {
      username: "user name here 3",
      role: "admin",
    },
  ]);
}
