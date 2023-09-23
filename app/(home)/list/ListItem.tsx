import CategoryTag from "@/components/CategoryTag";
import React from "react";

const ListItem = () => {
  return (
    <div className="nueumorphism p-2 basis-72">
      <div className="flex gap-2">
        <CategoryTag text="After Effects" />
      </div>
      <h4 className="text-xl font-bold mt-3 mb-3">タイトルタイトル</h4>
    </div>
  );
};

export default ListItem;
