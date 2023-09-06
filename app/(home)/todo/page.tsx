import TodoWrap from "./components/TodoWrap";
import TodoHeader from "./components/TodoHeader";

export default function Todo() {
  return (
    <div className="mr-16">
      <TodoHeader />
      <div className="mt-7">
        <div className="flex gap-6 ">
          <TodoWrap heading="Todo" />
          <TodoWrap heading="Doing" />
          <TodoWrap heading="Done" />
        </div>
      </div>
    </div>
  );
}
