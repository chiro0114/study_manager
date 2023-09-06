import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

type SelectProps = {
  options?: string[];
  dispatchOpstion?: () => void;
  className?: string;
};

const Select: React.FC<SelectProps> = ({ className }) => {
  return (
    <div className={twMerge("nueumorphism flex items-center px-3 py-2 rounded-full", className)}>
      <VscTriangleDown className="text-acc h-5 w-5" />
      <select
        name="displayMember"
        className="bg-transparent color-cMain font-bold appearance-none text-base"
      >
        <option value="">表示メンバー</option>
      </select>
    </div>
  );
};

export default Select;
