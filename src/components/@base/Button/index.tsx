import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ disabled, ...rest }: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      {...rest}
      className={`${
        disabled ? "opacity-30 bg-gray-400" : "bg-primary"
      }  text-white flex justify-center items-center rounded-xl py-4 px-8`}
    />
  );
}

export default Button;
