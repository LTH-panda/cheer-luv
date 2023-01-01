import React from "react";
import SocialProvider from "./SocialProvider";

function AuthSocialActions() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SocialProvider provider="naver" />
    </div>
  );
}

export default AuthSocialActions;
