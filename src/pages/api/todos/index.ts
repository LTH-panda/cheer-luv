import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const { userId, content } = req.body;
      const todo = await db.todo.create({
        data: {
          userId,
          content,
        },
      });
      res.send(todo);
      break;
    }
    default: {
      res.status(405).send("Method Error");
      break;
    }
  }
}
