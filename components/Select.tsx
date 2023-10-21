"use client";

import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

type SelectItem = {
  id: string;
  name: string;
};

type SelectProps = {
  selectTitle: string;
  listItems?: SelectItem[];
  className?: string;
};

const Select: React.FC<SelectProps> = ({ selectTitle, listItems, className }) => {
  if (!listItems) return <></>;

  const mergeListItems = listItems && listItems;
  const [displayItem, setDisplayItem] = useState<SelectItem>(mergeListItems[0]);
  const [displayAllItem, setDisplayAllItem] = useState(false);

  const targetItem = mergeListItems.find((filterItem) => displayItem.id === filterItem.id);

  const selectClickHandler = () => {
    setDisplayAllItem((prev) => !prev);
  };

  const selectItemClickHandler = (targetId: string) => {
    const targetItemIndex = mergeListItems.findIndex((item) => item.id === targetId);
    setDisplayItem(() => mergeListItems[targetItemIndex]);
    selectClickHandler();
  };

  return (
    <div>
      <button
        onClick={selectClickHandler}
        className={twMerge(
          "nueumorphism flex items-center px-3 py-2 rounded-full cursor-pointer",
          className
        )}
      >
        <VscTriangleDown className="text-acc h-5 w-5" />
        <p className="bg-transparent color-cMain font-bold appearance-none text-base">
          <p className="ml-1">{displayItem.name === ""}</p>
        </p>
      </button>
      {displayAllItem && (
        <ul className={twMerge("absolute bg-white min-w-[120px] rounded-md", className)}>
          {mergeListItems.map((item) => {
            return (
              <li
                key={item.id}
                className="font-bold color-acc text-center px-4 py-2 border-b-2 border-cMain last:border-none"
              >
                <button
                  onClick={() => {
                    selectItemClickHandler(item.id);
                  }}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
