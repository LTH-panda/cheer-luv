import { Logotypo } from "components/@base";
import { LoginButton } from "components/Auth";
import { UserMenu } from "components/User";
import { useSession } from "next-auth/react";
import React from "react";

function Header() {
  const { status } = useSession();
  return (
    <header className="flex p-4 items-center justify-between">
      <Logotypo />
      {status === "authenticated" ? <UserMenu /> : <LoginButton />}
    </header>
  );
}

export default Header;
