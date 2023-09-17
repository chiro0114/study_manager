import Input from '@/components/Input';

import { css, cx } from '@/styled-system/css';
import { neumorphism } from '@/styled-system/recipes';

export default function Signup() {
  return (
    <div className={cx(neumorphism(), css({ pt: '28px' }))}>
      <h2
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
          color: 'redr',
        })}
      >
        アカウント作成
      </h2>
      <div className="mt-4">
        <label htmlFor="mail" className="block">
          メールアドレス
        </label>
        <Input id="mail" type="text" className="border border-cMain rounded-2" />
      </div>
    </div>
  );
}
