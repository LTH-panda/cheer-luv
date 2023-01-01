import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/prisma";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, nickname } = req.body;
  try {
    const user = await db.profile.findUnique({ where: { userId } });
    if (!user) throw new Error("NotAuthorized");

    if (user.userId !== userId) throw new Error("Forbidden");

    await db.profile.update({
      where: {
        userId,
      },
      data: {
        nickname,
      },
    });

    res.status(204).send(null);
  } catch (err) {
    console.error(err);
  }
}
