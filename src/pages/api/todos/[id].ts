import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE": {
      const { id, userId } = req.query;
      const todo = await db.todo.findUnique({
        where: {
          id: parseInt(id as string, 10),
        },
      });
      if (!todo) throw new Error("NotFound");
      if (todo.userId !== userId) throw new Error("Forbidden");

      await db.todo.delete({
        where: { id: parseInt(id as string, 10) },
      });

      res.status(204).send(null);
      break;
    }
    default:
      res.status(405).send("Method Error");
      break;
  }
}
