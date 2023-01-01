import colors from "common/styles/colors";
import { SvgIcon } from "components/@base";
import React from "react";

function TodoCheerButton() {
  const onClick = () => {};

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary flex items-center text-white py-2 px-4 rounded-xl gap-1"
    >
      <SvgIcon name="heart" color={colors.white} />
      Cheer!
    </button>
  );
}

export default TodoCheerButton;
