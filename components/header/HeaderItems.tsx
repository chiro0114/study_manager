import React from 'react';
import { AiFillBell, AiOutlineUser } from 'react-icons/ai';
import Button from '../Button';
import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';

const headerItems = [
  {
    id: 'notification',
    Icon: AiFillBell,
    href: '',
  },
  {
    id: 'profile',
    Icon: AiOutlineUser,
    href: '',
  },
];

const HeaderItems = () => {
  return (
    <div className={css({ display: 'flex', gap: '28px' })}>
      {headerItems.map((item) => {
        return (
          <Button key={item.id} className={cx(neumorphism())}>
            {<item.Icon className={css({ width: '24px', height: '24px' })} />}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderItems;
