import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    id: "todo",
    title: "Todo",
    href: "",
  },
  {
    id: "diary",
    title: "Diary",
    href: "",
  },
  {
    id: "list",
    title: "List",
    href: "",
  },
  {
    id: "logout",
    title: "Logout",
    href: "",
  },
];

const Sidebar = () => {
  return (
    <div className="nueumorphism rounded-md bg-main mt-28 ml-5">
      <ul className="mt-7 mx-2 mb-24">
        {sidebarItems.map((items) => (
          <SidebarItem key={items.id} items={items} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
