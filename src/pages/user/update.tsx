import { ActionsHeader, Layout } from "components/@module";
import { UserProfileUpdateForm } from "components/User";
import React from "react";

function ProfileUpdatePage() {
  return (
    <Layout>
      <ActionsHeader />
      <main className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl">프로필 수정</h1>
        <UserProfileUpdateForm callback="/user" />
      </main>
    </Layout>
  );
}

export default ProfileUpdatePage;
