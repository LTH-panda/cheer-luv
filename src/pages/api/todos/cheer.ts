import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const { userId, todoId } = req.body;
      const exists = await db.todoLike.findUnique({
        where: { todoId_userId: { todoId, userId } },
      });
      if (exists) return res.status(400).send(exists);

      await db.todoLike.create({
        data: {
          userId,
          todoId,
        },
      });

      await db.todo.update({
        where: {
          id: todoId,
        },
        data: { liked: { increment: 1 } },
      });

      res.status(204).send(null);
      break;
    }

    default:
      break;
  }
}
