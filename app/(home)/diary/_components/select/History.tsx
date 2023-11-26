import Select from "@/components/Select";
import React from "react";

const History = () => {
  const listItems = [{ id: "member1", name: "太郎" }];
  return <Select selectTitle="最終更新履歴" listItems={listItems} />;
};

export default History;
