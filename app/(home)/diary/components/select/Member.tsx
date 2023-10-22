import Select from "@/components/Select";
import React from "react";

const Member = () => {
  const listItems = [{ id: "member1", name: "太郎" }];
  return <Select selectTitle="表示メンバー" listItems={listItems} />;
};

export default Member;
