import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);
    return res.status(200).json(currentUser);
  } catch (error: any) {
    console.log("This is the error", error.message);
    return res.status(400).end();
  }
};

export default handler;
