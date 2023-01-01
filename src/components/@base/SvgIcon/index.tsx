import React from "react";
import * as Icons from "./icons";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
};

function SvgIcon({ name, size = 20, color = "#444" }: Props) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
