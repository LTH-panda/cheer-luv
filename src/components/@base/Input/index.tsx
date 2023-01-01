import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ ...rest }: Props) {
  return (
    <input
      {...rest}
      className="p-4 border border-gray-300 rounded-xl flex outline-none items-center justify-center placeholder:text-gray-300 w-full"
    />
  );
}

export default Input;
