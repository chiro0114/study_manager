import React from "react";

type HeadingType = {
  text: string;
};
const Heading: React.FC<HeadingType> = ({ text }) => {
  return (
    <div className="nueumorphism w-full py-3">
      <h3 className="text-2xl font-bold text-center tracking-wide">{text}</h3>
    </div>
  );
};

export default Heading;
