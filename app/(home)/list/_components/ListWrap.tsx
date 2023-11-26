import React from "react";
import ListItem from "./ListItem";

const ListWrap = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-10">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default ListWrap;
