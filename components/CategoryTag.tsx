import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';
import React from 'react';

type CategoryTagProps = {
  text: string;
};
const CategoryTag: React.FC<CategoryTagProps> = ({ text }) => {
  return (
    <div className={cx(css({ color: 'red' }), neumorphism({ visual: 'acc' }))}>
      <p className={css({ color: 'main', fontSize: '12px' })}>{text}</p>
    </div>
  );
};

export default CategoryTag;
