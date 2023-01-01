import client from "./@client";

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
