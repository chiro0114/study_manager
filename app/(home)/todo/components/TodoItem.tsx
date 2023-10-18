import CategoryTag from "@/components/CategoryTag";
import Link from "next/link";
import React from "react";
import { MdCalendarToday } from "react-icons/md";

const TodoItem = () => {
  return (
    <div className="block nueumorphism py-4 px-4 mt-6">
      <div className="flex gap-2">
        <CategoryTag text="プログラミング" />
      </div>
      <p className="text-lg font-bold mt-2">Todoのタイトル</p>
      <p className="font-bold mt-1">
        ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
      </p>
      <div>
        <div className="flex items-center mt-2">
          <MdCalendarToday className="w-5 h-5" />
          <p className="ml-1 text-sm font-bold">6/6</p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
