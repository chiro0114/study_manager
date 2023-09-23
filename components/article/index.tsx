import React from "react";
import { AiOutlineEdit, AiOutlineStepBackward } from "react-icons/ai";
import Link from "next/link";
import Button from "../Button";

const Article = () => {
  return (
    <div className="mt-6">
      <Link href="/" className="inline-block rounded-full nueumorphism">
        <div className="flex gap-1 items-center px-5 py-2">
          <AiOutlineStepBackward className="w-6 h-6" />
          <span className="text-sm font-bold">戻る</span>
        </div>
      </Link>
      <div className="flex gap-8 max-w-3xl mt-8 ml-20">
        <div className="p-8 nueumorphism">
          <h3 className="text-2xl font-bold pb-2 mb-6 border-b-2 border-acc">
            タイトルタイトルタイトル
          </h3>
          <div>
            <p className="text-lg">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
          </div>
        </div>
        <div>
          <Button className="flex justify-center items-center w-14 h-14 rounded-full nueumorphism">
            <AiOutlineEdit className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
