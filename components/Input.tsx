import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      {...props}
      className={twMerge(
        `block text-base bg-transparent  border-transparent  file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[#B7C5D4] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-transparent`,
        className
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
