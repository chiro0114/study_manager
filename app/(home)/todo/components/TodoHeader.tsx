import Button from '@/components/Button';
import Select from '@/components/Select';
import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const TodoHeader = () => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '40px',
      })}
    >
      <Select />
      <Button
        css={cx(
          css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            w: '62px',
            h: '62px',
            borderRadius: '50%',
          }),
          neumorphism()
        )}
      >
        <AiOutlinePlus
          className={css({ display: 'block', h: '36px', w: '36px', color: 'secondary' })}
        />
      </Button>
    </div>
  );
};

export default TodoHeader;
