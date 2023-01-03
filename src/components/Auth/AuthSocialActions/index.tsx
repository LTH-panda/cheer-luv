import React from "react";
import SocialProvider from "./SocialProvider";

function AuthSocialActions() {
  return (
    <div className="flex flex-col w-full gap-3">
      <SocialProvider provider="kakao" />
    </div>
  );
}

export default AuthSocialActions;
