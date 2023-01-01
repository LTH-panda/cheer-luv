import { SvgIcon } from "components/@base";
import Link from "next/link";
import React from "react";

function UserMenu() {
  return (
    <Link href="/">
      <SvgIcon name="user" size={28} />
    </Link>
  );
}

export default UserMenu;
