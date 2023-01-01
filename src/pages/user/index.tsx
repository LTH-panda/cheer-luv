import { Header, Layout } from "components/@module";
import { UserProfile } from "components/User";
import React from "react";

function UserPage() {
  return (
    <Layout>
      <Header />
      <div className="p-4 flex flex-col gap-8">
        <UserProfile />
      </div>
    </Layout>
  );
}

export default UserPage;
