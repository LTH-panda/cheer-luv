import client from "./@client";
import { GetProfileResult } from "./types";

export async function getProfile({ userId }: { userId: string }) {
  const res = await client.get<GetProfileResult>(`/user/${userId}`);

  return res.data;
}

export async function updateProfile({
  userId,
  nickname,
}: {
  userId: string;
  nickname: string;
}) {
  const res = await client.post("/user/update", { userId, nickname });

  return res.data;
}
