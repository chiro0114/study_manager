'use client';

type Props = {
  children: React.ReactNode;
  isWithAuth?: boolean;
};

const WithAuthProvider: React.FC<Props> = ({ children, isWithAuth }) => {
  return <>{children}</>;
};

export default WithAuthProvider;
