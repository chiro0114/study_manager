import Button from "@/components/Button";
import Select from "@/components/Select";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";

const TodoHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <Select />
      <div className="nueumorphism flex items-center justify-center w-14 h-14 rounded-full">
        <Button>
          <AiOutlinePlus className="text-acc h-9 w-9" />
        </Button>
      </div>
    </div>
  );
};

export default TodoHeader;
