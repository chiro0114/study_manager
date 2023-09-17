import React from 'react';
import HeaderItems from './HeaderItems';
import SearchBar from '../SearchBar';
import { css } from '@/styled-system/css';
// "flex items-center justify-between pt-5 pl-16"
const Header = () => {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '20px',
        paddingLeft: '64px',
      })}
    >
      <SearchBar />
      <HeaderItems />
    </header>
  );
};

export default Header;
