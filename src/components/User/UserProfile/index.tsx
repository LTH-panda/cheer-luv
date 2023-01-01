import useProfileQuery from "hooks/queries/useProfileQuery";
import useTriggerAuth from "hooks/useTriggerAuth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import UserProfileActions from "../UserProfileActions";

function UserProfile() {
  const { triggerAuth } = useTriggerAuth();
  const { data: user, status } = useSession();
  const { data } = useProfileQuery({
    userId: user?.user.id!,
    options: { enabled: status === "authenticated" },
  });

  useEffect(() => {
    if (status === "unauthenticated") triggerAuth();
  }, [status]);

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
