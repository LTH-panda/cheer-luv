import { AuthPopover } from "components/Auth";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="mx-auto max-w-2xl">{children}</div>
      <AuthPopover />
    </>
  );
}

export default Layout;
