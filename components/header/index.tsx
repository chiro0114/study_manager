import React from "react";
import HeaderItems from "./HeaderItems";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-5 pl-16">
      <SearchBar />
      <HeaderItems />
    </div>
  );
};

export default Header;
