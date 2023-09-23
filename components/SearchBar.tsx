import React from "react";
import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="basis-7/12 max-w-lg">
      <div className="nueumorphism flex items-center gap-4 pl-8 py-3 rounded-full">
        <AiOutlineSearch className="text-cMain h-6 w-6" />
        <Input className="text-lg w-full mr-6" />
      </div>
    </div>
  );
};

export default SearchBar;
