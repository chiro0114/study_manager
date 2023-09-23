import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={twMerge(`block font-bold cursor-pointer`, className)}>
      {children}
    </button>
  );
};

export default Button;
