import Button from "../Button";

type SidebarItemProps = {
  items: {
    title: string;
    href: string;
  };
};

const SidebarItem: React.FC<SidebarItemProps> = ({ items }) => {
  const { title, href } = items;
  return (
    <div>
      <Button className="text-3xl py-4  mb-5 w-52 tracking-wide">{title}</Button>
    </div>
  );
};

export default SidebarItem;
