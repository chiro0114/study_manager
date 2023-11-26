import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TodoItem = () => {
  return (
    <div className="block nueumorphism py-2 px-4 mt-6">
      <p className="text-lg font-bold mt-1">Todoのタイトル</p>
      <div className="flex items-center mt-2">
        <MdCalendarToday className="w-5 h-5" />
        <p className="ml-1 text-sm font-bold">6/6</p>
      </div>
    </div>
  );
};

export default TodoItem;
