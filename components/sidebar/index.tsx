import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    title: "Todo",
    href: "/todo",
  },
  {
    title: "Diary",
    href: "/diary",
  },
  {
    title: "List",
    href: "/list",
  },
  {
    title: "Logout",
    href: "/logout",
  },
];

const Sidebar = () => {
  return (
    <div className="nueumorphism rounded-md bg-main mt-28 ml-5">
      <ul className="mt-7 mx-2 mb-24">
        {sidebarItems.map((items) => (
          <SidebarItem key={items.href} items={items} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
