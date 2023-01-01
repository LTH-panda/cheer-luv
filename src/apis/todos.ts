import client from "./@client";

export async function writeTodo({
  userId,
  content,
}: {
  userId: string;
  content: string;
}) {
  const res = await client.post("/todos", { userId, content });

  return res.data;
}
