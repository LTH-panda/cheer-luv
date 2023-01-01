import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { id } = req.query;
      const user = await db.user.findUnique({
        where: {
          id: id as string,
        },
        select: {
          id: true,
          profile: {
            select: {
              nickname: true,
            },
          },
        },
      });
      if (!user) throw new Error("NotFound");

      res.send(user);
      break;
    }
    default:
      break;
  }
}
