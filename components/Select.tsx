import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';
import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

type SelectProps = {
  options?: string[];
  dispatchOpstion?: () => void;
  className?: string;
};

const Select: React.FC<SelectProps> = ({ className }) => {
  return (
    <div
      className={cx(
        css({ display: 'flex', alignItems: 'center', px: '12px', py: '8px', borderRadius: '50%' }),
        neumorphism()
      )}
    >
      <VscTriangleDown className={css({ color: 'primary', w: '20px', h: '20px' })} />
      <select
        name="displayMember"
        className={css({
          backgroundColor: 'transparent',
          fontSize: '16px',
          color: 'main',
          fontWeight: 'bold',
          appearance: 'none',
        })}
      >
        <option value="">表示メンバー</option>
      </select>
    </div>
  );
};

export default Select;
