import { css } from '@/styled-system/css';

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={css({ w: '33.3%', maxW: '512px', mt: '96px', mx: 'auto' })}>{children}</div>
  );
}
