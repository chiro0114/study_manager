import { css } from '@/styled-system/css';
import TodoHeader from './components/TodoHeader';
import TodoWrap from './components/TodoWrap';

export default function Todo() {
  return (
    <div className={css({ ml: '64px', mr: '98px' })}>
      <TodoHeader />
      <div className={css({ mt: '28px' })}>
        <TodoWrap />
      </div>
    </div>
  );
}
