import { AiOutlinePlus } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";
import Heading from "./components/Heading";
import TodoWrap from "./components/TodoWrap";
import Button from "@/components/Button";

export default function Todo() {
  return (
    <div className="mr-16">
      <div className="flex justify-between items-center mt-10">
        <div className="nueumorphism flex items-center px-3 py-2 rounded-full">
          <select
            name="displayMember"
            className="bg-transparent color-cMain font-bold appearance-none text-base"
          >
            <option value="">表示メンバー</option>
          </select>
          <VscTriangleDown className="text-acc h-5 w-5" />
        </div>
        <div className="nueumorphism flex items-center justify-center w-14 h-14 rounded-full">
          <Button>
            <AiOutlinePlus className="text-acc h-9 w-9" />
          </Button>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex gap-6 ">
          <TodoWrap heading="Todo" />
          <TodoWrap heading="Doing" />
          <TodoWrap heading="Done" />
        </div>
      </div>
    </div>
  );
}
