import React from "react";
import TodoItem from "./TodoItem";

type TodoWrapType = {
  heading: string;
};

const TodoWrap: React.FC<TodoWrapType> = ({ heading }) => {
  return (
    <div className="basis-1/3">
      <div className="nueumorphism w-full py-3">
        <h3 className="text-2xl font-bold text-center tracking-wide">{heading}</h3>
      </div>
      <TodoItem />
    </div>
  );
};

export default TodoWrap;
