import React from 'react';
import TodoListItem from './TodoListItem';
import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';

type TodoListProps = {
  id: string;
  header: string;
};

const TodoList: React.FC<TodoListProps> = ({ id, header }) => {
  return (
    <div className={css({ flexBasis: '33.3%' })}>
      <div className={cx(neumorphism())}>
        <h3
          className={css({
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '0.5px',
            py: '12px',
            mb: '24px',
          })}
        >
          {header}
        </h3>
      </div>
      <ul>
        <TodoListItem id={id} />
      </ul>
    </div>
  );
};

export default TodoList;
