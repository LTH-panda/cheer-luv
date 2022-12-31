import { SvgIcon } from "components/@base";
import React from "react";

export type Provider = "naver";

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
};

function SocialProvider({ provider }: Props) {
  const { bgColor, accentColor, descrption, icon } = providerMap[provider];

  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-xl py-4 px-8 justify-center"
      style={{ backgroundColor: bgColor, color: accentColor }}
    >
      <SvgIcon name={icon} color={accentColor} />
      {descrption}
    </button>
  );
}

export default SocialProvider;
