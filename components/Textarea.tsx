import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextareaType = {
  className?: string;
} & ComponentProps<"textarea">;

const Textarea: React.FC<TextareaType> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={twMerge(
        `block text-base bg-transparent  border-transparent  file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[#B7C5D4] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-transparent`,
        className
      )}
    />
  );
};

export default Textarea;
