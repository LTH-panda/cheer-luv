import { SvgIcon } from "components/@base";
import { signIn } from "next-auth/react";
import React from "react";

export type Provider = "naver" | "kakao";

type Props = {
  provider: Provider;
};

const providerMap = {
  naver: {
    bgColor: "#03C75A",
    accentColor: "#fff",
    icon: "naver" as const,
    descrption: "네이버 로그인",
  },
  kakao: {
    bgColor: "#FEE500",
    accentColor: "#000000",
    icon: "kakao" as const,
    descrption: "카카오 로그인",
  },
};

function SocialProvider({ provider }: Props) {
  const { bgColor, accentColor, descrption, icon } = providerMap[provider];

  return (
    <button
      type="button"
      onClick={() => signIn(provider)}
      className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl"
      style={{ backgroundColor: bgColor, color: accentColor }}
    >
      <SvgIcon name={icon} color={accentColor} />
      {descrption}
    </button>
  );
}

export default SocialProvider;
