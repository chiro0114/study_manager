import React from 'react';
import Input from './Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';

const SearchBar = () => {
  return (
    <div className={css({ flexBasis: '500px' })}>
      <div
        className={cx(
          css({
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            pl: '32px',
            py: '12px',
            borderRadius: '100%',
          }),
          neumorphism()
        )}
      >
        <AiOutlineSearch className={css({ w: '24px', h: '24px', color: 'main' })} />
        <Input className={css({ w: '100%', fontSize: '18px', mr: '24px' })} />
      </div>
    </div>
  );
};

export default SearchBar;
