import client from "./@client";
import { GetTodosResult } from "./types";

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

export async function getTodos(lastId?: number) {
  const res = await client.get<GetTodosResult>("/todos", {
    params: {
      lastId: lastId ?? undefined,
    },
  });

  return res.data;
}
