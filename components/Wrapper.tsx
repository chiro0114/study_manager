import { css } from '@/styled-system/css';
import Header from './header';
import Sidebar from './sidebar';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className={css({ display: 'flex' })}>
      <Sidebar />
      <div className={css({ flex: '1', ml: '64px', mr: '36px' })}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
