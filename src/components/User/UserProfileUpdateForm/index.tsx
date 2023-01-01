import { updateProfile } from "apis/user";
import { Button, Input } from "components/@base";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  callback?: string;
};

function UserProfileUpdateForm({ callback }: Props) {
  const { replace } = useRouter();
  const { data } = useSession();
  const [nickname, setNickname] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) return;

    await updateProfile({ userId: data.user.id, nickname });

    if (callback) replace(callback);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChange}
      />
      <Button type="submit" disabled={!nickname}>
        완료했어!
      </Button>
    </form>
  );
}

export default UserProfileUpdateForm;
