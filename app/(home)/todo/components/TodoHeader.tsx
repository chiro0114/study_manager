import Button from "@/components/Button";
import Select from "@/components/Select";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TodoHeader = () => {
  const addNewTodoHandler = () => {};

  return (
    <div className="flex justify-between items-center mt-10">
      <Select />
      <Button className="nueumorphism flex items-center justify-center w-14 h-14 rounded-full">
        <AiOutlinePlus className="text-acc h-9 w-9" />
      </Button>
    </div>
  );
};

export default TodoHeader;
