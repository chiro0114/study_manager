"use client";

import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import { RxCross2 } from "react-icons/rx";

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

  const defaultDsiplayItem = { id: "all", name: selectTitle };

  const [displayItem, setDisplayItem] = useState<SelectItem>(defaultDsiplayItem);
  const [displayAllItem, setDisplayAllItem] = useState(false);

  const selectClickHandler = () => {
    setDisplayAllItem((prev) => !prev);
  };

  const selectItemClickHandler = (targetId: string) => {
    const targetItemIndex = listItems.findIndex((item) => item.id === targetId);
    setDisplayItem(() => listItems[targetItemIndex]);
    selectClickHandler();
  };

  const cancelSelectHandler = () => {
    setDisplayItem(defaultDsiplayItem);
  };

  return displayItem.id === "all" ? (
    <div>
      <button
        onClick={selectClickHandler}
        className={twMerge(
          "nueumorphism flex items-center px-3 py-2 rounded-full cursor-pointer",
          className
        )}
      >
        <VscTriangleDown className="text-acc h-5 w-5" />
        <div className="bg-transparent color-cMain font-bold appearance-none text-base">
          <p className="ml-1">{displayItem.name}</p>
        </div>
      </button>
      {displayAllItem && (
        <ul className={twMerge("absolute bg-white min-w-[120px] rounded-md", className)}>
          {listItems.map((item) => {
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
  ) : (
    <div
      className={twMerge(
        "press-nueumorphism flex items-center px-3 py-2 rounded-full cursor-pointer",
        className
      )}
    >
      <div className="bg-transparent color-cMain font-bold appearance-none text-base">
        <p className="ml-1">{displayItem.name}</p>
      </div>
      <button onClick={cancelSelectHandler} className="ml-2">
        <RxCross2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Select;
