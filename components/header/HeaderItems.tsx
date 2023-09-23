"use client";

import React, { useState } from "react";
import { AiFillBell, AiOutlineUser } from "react-icons/ai";
import Button from "../Button";
import { useRouter } from "next/navigation";

const HeaderItems = () => {
  const router = useRouter();
  const [openNotice, setOpenNotice] = useState(false);
  const headerItems = [
    {
      id: "notification",
      Icon: AiFillBell,
      clickHandler: () => {},
    },
    {
      id: "profile",
      Icon: AiOutlineUser,
      clickHandler: () => {
        router.push("/profile");
      },
    },
  ];
  return (
    <div className="flex gap-7">
      {headerItems.map((item) => {
        return (
          <Button
            key={item.id}
            onClick={item.clickHandler}
            className="nueumorphism p-5 rounded-full"
          >
            {<item.Icon className="w-6 h-6" />}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderItems;
