import React from 'react';
import List from './List';
import WithAuthProvider from '@/provider/WithAuthProvider';

const ListPage = () => {
  return (
    <WithAuthProvider>
      <List />
    </WithAuthProvider>
  );
};

export default ListPage;
