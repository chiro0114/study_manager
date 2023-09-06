import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const DiaryItem = () => {
  return (
    <div className="nueumorphism p-2 basis-60">
      <div className="flex items-center">
        <AiOutlineCalendar className="w-5 h-5" />
        <p className="text-sm font-bold">2023/6/6</p>
      </div>
      <h4 className="text-lg font-bold pb-1 mt-1 mb-2 border-b-2 border-b-acc">タイトルタイトル</h4>
      <div>
        <p>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入...
        </p>
      </div>
    </div>
  );
};

export default DiaryItem;
