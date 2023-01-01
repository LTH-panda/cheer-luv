import useProfileQuery from "hooks/queries/useProfileQuery";
import { useSession } from "next-auth/react";
import React from "react";
import UserProfileActions from "../UserProfileActions";

function UserProfile() {
  const { data: user } = useSession();
  const { data } = useProfileQuery({
    userId: user?.user.id!,
    options: { enabled: !!user?.user.id },
  });

  if (!data) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col p-4 gap-2 rounded-xl bg-white border border-gray-300">
        <h1>닉네임</h1>
        <div className="text-2xl">{data.profile.nickname}</div>
      </div>
      <UserProfileActions />
    </div>
  );
}

export default UserProfile;
