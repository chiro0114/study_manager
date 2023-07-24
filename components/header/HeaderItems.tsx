import React from "react";
import { AiFillBell, AiOutlineUser } from "react-icons/ai";
import Button from "../Button";

const headerItems = [
  {
    id: "notification",
    Icon: AiFillBell,
    href: "",
  },
  {
    id: "profile",
    Icon: AiOutlineUser,
    href: "",
  },
];

const HeaderItems = () => {
  return (
    <div className="flex gap-7">
      {headerItems.map((item) => {
        return (
          <Button key={item.id} className="nueumorphism p-5 rounded-full">
            {<item.Icon className="w-6 h-6" />}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderItems;
