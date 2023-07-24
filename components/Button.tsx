import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <div>
      <button className={twMerge(`font-bold cursor-pointer`, className)}>{children}</button>
    </div>
  );
};

export default Button;
