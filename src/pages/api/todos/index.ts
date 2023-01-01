import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { lastId } = req.query;

      const todos = await db.todo.findMany({
        select: {
          id: true,
          author: {
            select: {
              profile: {
                select: {
                  userId: true,
                  nickname: true,
                },
              },
            },
          },
          content: true,
          liked: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
        skip: lastId ? 1 : 0,
        take: 12,
        ...(lastId && { cursor: { id: parseInt(lastId as string, 10) } }),
      });

      const endCursor = todos.at(-1)?.id ?? null;
      const hasNextPage = endCursor
        ? (await db.todo.count({
            orderBy: { createdAt: "desc" },
            where: { id: { lt: endCursor } },
          })) > 0
        : false;

      res.send({
        data: todos.map((T) => ({ ...T, author: T.author.profile })),
        pageInfo: { endCursor, hasNextPage },
      });

      break;
    }
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
