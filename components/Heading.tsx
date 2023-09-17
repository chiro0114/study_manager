import { css } from '@/styled-system/css';
import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
};
const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h3 className={css({ fontSize: '24px', fontWeight: 'bold', color: 'main' })}>{children}</h3>
  );
};

export default Heading;
