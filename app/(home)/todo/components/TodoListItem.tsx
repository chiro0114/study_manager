import CategoryTag from '@/components/CategoryTag';
import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';

import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

type TodoListItemProps = {
  id: string;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ id }) => {
  return (
    <li draggable={true} className={cx(css({ mb: '16px' }), neumorphism())}>
      <div className={css({ display: 'flex', gap: '8px' })}>
        <CategoryTag text="プログラミング" />
      </div>
      <p className={css({ fontSize: '18px', fontWeight: 'bold', mt: '2px' })}>Todoのタイトル</p>
      <p className={css({ fontWeight: 'bold', mt: '4px' })}>
        ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
      </p>
      <div>
        <div className={css({ display: 'flex', alignItems: 'center', mt: '8px' })}>
          <MdCalendarToday className={css({ w: '20px', h: '20px' })} />
          <p className={css({ fontSize: '14px', fontWeight: 'bold', ml: '4px' })}>6/6</p>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
