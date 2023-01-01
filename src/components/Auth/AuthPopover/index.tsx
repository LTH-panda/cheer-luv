import { Modal } from "components/@base";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthSocialActions from "../AuthSocialActions";

function AuthPopover() {
  const { query } = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (query.mode === "auth") setIsVisible(true);
    else setIsVisible(false);
  }, [query]);

  return (
    <Modal isVisible={isVisible} onBackDrop={() => {}}>
      <div className="flex flex-col justify-center items-center flex-1 gap-8 p-4">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-primary font-primary text-4xl">Cheer luv</h1>
          <h2>목표를 공유하고 응원해봐요!</h2>
        </div>
        <AuthSocialActions />
      </div>
    </Modal>
  );
}

export default AuthPopover;
