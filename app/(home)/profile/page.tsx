import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function Profile() {
  return (
    <div className="w-3/5 mx-auto mt-10 nueumorphism">
      <div className="p-4">
        <div className="flex justify-end">
          <button className=" text-acc font-bold py-2 px-4  rounded-full nueumorphism">保存</button>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="mx-auto w-32 h-32 mt-3 rounded-full nueumorphism">
            <img src="" alt="" />
          </div>
          <div className="mt-8 border-b-4 border-acc pb-3">
            <Input
              placeholder="名前を入力"
              className="w-40 text-xl font-bold text-center mx-auto"
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
