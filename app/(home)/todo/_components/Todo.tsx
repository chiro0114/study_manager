'use clinet';

import TodoWrap from './TodoWrap';

export default function Todo() {
  const todoKinds = [
    { id: 'todo', heading: 'Todo' },
    { id: 'doing', heading: 'Doing' },
    { id: 'done', heading: 'Done' },
  ];
  return (
    <div className="mr-16">
      <div className="mt-7">
        <div className="flex gap-6 ">
          {todoKinds.map((todos) => (
            <TodoWrap key={todos.id} id={todos.id} heading={todos.heading} />
          ))}
        </div>
      </div>
    </div>
  );
}
