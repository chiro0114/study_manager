import { css, cx } from '@/styled-system/css';
import { ComponentProps } from 'react';

type ButtonProps = {
  css?: any;
  children: React.ReactNode;
} & ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({ css: cssProp, children }) => {
  return (
    <div className={cx(cssProp)}>
      <button className={css({ display: 'block' })}>{children}</button>
    </div>
  );
};

export default Button;
