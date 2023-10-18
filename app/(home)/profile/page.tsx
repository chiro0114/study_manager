"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { ChangeEvent, useState } from "react";

export default function Profile() {
  const [inputProfile, setInputProfile] = useState({ image: "", name: "", desc: "" });
  return (
    <div className="w-3/5 ml-16 mt-10 nueumorphism">
      <div className="p-4">
        <div className="flex justify-end">
          <Button
            onClick={() => {}}
            className="text-acc font-bold py-2 px-4 rounded-full nueumorphism"
          >
            保存
          </Button>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="mx-auto w-32 h-32 mt-3 rounded-full nueumorphism">
            <input type="file" />
          </div>
          <div className="w-2/3 border-b-4 border-acc pb-3 mx-auto mt-8">
            <Input
              placeholder="名前を入力"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputProfile((prev) => ({ ...prev, name: e.target.value }));
              }}
              maxLength={15}
              value={inputProfile.name}
              className="block w-full text-xl font-bold text-center mx-auto"
            />
          </div>
          <div className="mt-7 border border-cMain">
            <Textarea placeholder="自己紹介文を入力" className="w-full h-60 p-2 resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
