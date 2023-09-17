'use client';

import React from 'react';
import TodoList from './TodoList';
import { css } from '@/styled-system/css';

const TodoItems = [
  { id: 'todo', header: 'Todo' },
  { id: 'doing', header: 'doing' },
  { id: 'done', header: 'Done' },
];

const TodoWrap: React.FC = () => {
  return (
    <div className={css({ display: 'flex', gap: '24px' })} draggable={true}>
      {TodoItems.map((item) => (
        <TodoList key={item.id} id={item.id} header={item.header} />
      ))}
    </div>
  );
};

export default TodoWrap;
