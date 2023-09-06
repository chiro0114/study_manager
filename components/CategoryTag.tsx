import React from "react";

type CategoryTagProps = {
  text: string;
};
const CategoryTag: React.FC<CategoryTagProps> = ({ text }) => {
  return (
    <div className="acc-nueumorphism w-fit px-3 rounded-full">
      <p className="text-main text-xs">{text}</p>
    </div>
  );
};

export default CategoryTag;
