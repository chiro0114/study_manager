import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};
const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h3 className="text-2xl font-bold text-cMain">{children}</h3>;
};

export default Heading;
