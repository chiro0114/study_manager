import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputType = {
  className: string;
} & ComponentProps<"input">;

const Input: React.FC<InputType> = ({ className }) => {
  return (
    <input
      type="text"
      className={twMerge(
        `block text-base bg-transparent  border-transparent  file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[#B7C5D4] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
        className
      )}
    />
  );
};

export default Input;
