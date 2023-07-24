import Header from "./header";
import Sidebar from "./sidebar";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-16 mr-9">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
