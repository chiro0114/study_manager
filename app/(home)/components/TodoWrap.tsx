import React from "react";
import Heading from "./Heading";
import TodoItem from "./TodoItem";

type TodoWrapType = {
  heading: string;
};

const TodoWrap: React.FC<TodoWrapType> = ({ heading }) => {
  return (
    <div className="basis-1/3">
      <Heading text={heading} />
      <TodoItem />
    </div>
  );
};

export default TodoWrap;
