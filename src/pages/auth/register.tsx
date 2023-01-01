import { Layout } from "components/@module";
import { UserProfileUpdateForm } from "components/User";
import React from "react";

function RegisterPage() {
  return (
    <Layout>
      <div className="p-4 flex flex-col gap-4 pt-12">
        <h1 className="font-primary text-2xl">
          닉네임을 설정하고 <br />
          회원가입을 완료하세요
        </h1>
        <UserProfileUpdateForm callback="/" />
      </div>
    </Layout>
  );
}

export default RegisterPage;
