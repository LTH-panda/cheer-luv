import { SvgIcon } from "components/@base";
import { useRouter } from "next/router";
import React from "react";

function ActionsHeader() {
  const { back } = useRouter();

  return (
    <header className="flex p-4 items-center ">
      <button type="button" onClick={back} className="p-4 m-[-1rem]">
        <SvgIcon name="chevronLeft" size={30} />
      </button>
    </header>
  );
}

export default ActionsHeader;
