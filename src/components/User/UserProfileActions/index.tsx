import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function UserProfileActions() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/user/update">프로필 수정</Link>
      <button type="button" onClick={() => signOut()}>
        로그아웃
      </button>
    </div>
  );
}

export default UserProfileActions;
