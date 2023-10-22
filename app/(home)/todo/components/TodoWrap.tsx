"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { RxCross2 } from "react-icons/rx";
import Button from "@/components/Button";

type TodoWrapType = {
  id: string;
  heading: string;
};

const TodoWrap: React.FC<TodoWrapType> = ({ id, heading }) => {
  const addTodoHandler = () => {};
  return (
    <div className="basis-1/3">
      <div className="relative nueumorphism w-full py-3">
        <h3 className="text-2xl font-bold text-center tracking-wide">{heading}</h3>
        <Button
          onClick={addTodoHandler}
          className="nueumorphism rounded-full absolute top-1/2 right-3 -translate-y-1/2 p-2"
        >
          <RxCross2 className="w-5 h-5 rotate-45" />
        </Button>
      </div>
      <TodoItem />
    </div>
  );
};

export default TodoWrap;
