import React from 'react';
import Todo from './Todo';
import WithAuthProvider from '@/provider/WithAuthProvider';

const TodoPage = () => {
  return (
    <WithAuthProvider>
      <Todo />
    </WithAuthProvider>
  );
};

export default TodoPage;
