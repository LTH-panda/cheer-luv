import Link from "next/link";
import React from "react";

function LoginButton() {
  return (
    <Link href={{ query: { mode: "auth" } }} className="font-primary">
      로그인
    </Link>
  );
}

export default LoginButton;
