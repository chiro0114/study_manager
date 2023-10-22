import Select from "@/components/Select";
import React from "react";

const Sort = () => {
  const listItems = [{ id: "member1", name: "太郎" }];
  return <Select selectTitle="並び替え" listItems={listItems} />;
};

export default Sort;
