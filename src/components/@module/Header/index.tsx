import { Logotypo } from "components/@base";
import { LoginButton } from "components/Auth";
import React from "react";

function Header() {
  return (
    <header className="flex p-4 items-center justify-between">
      <Logotypo />
      <LoginButton />
    </header>
  );
}

export default Header;
