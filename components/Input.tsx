import { css, cx } from '@/styled-system/css';
import React, { ComponentProps } from 'react';

type InputType = {
  css?: any;
} & ComponentProps<'input'>;

const Input: React.FC<InputType> = ({ css: cssProp, ...props }) => {
  return (
    <input
      type="text"
      className={cx(
        css({
          display: 'block',
          fontSize: '16px',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          touchAction: 'manipulation',
          outline: 'none',
          _file: {
            border: '0',
            fontSize: '16px',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          },
          _placeholder: {
            color: '#B7C5D4',
          },
          _disabled: {
            cursor: 'not-allowed',
            opacity: '0.5',
          },
          _focus: {
            outline: 'none',
          },
        }),
        cssProp
      )}
      {...props}
    />
  );
};

export default Input;
