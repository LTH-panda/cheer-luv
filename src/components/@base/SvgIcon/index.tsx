import React from "react";
import * as Icons from "./icons";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
};

function SvgIcon({ name, color = "#444", size = 20 }: Props) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
