import Button from "@/components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import Member from "./select/Member";
import Sort from "./select/Sort";
import History from "./select/History";

const DiaryHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="flex gap-6">
        <Member />
        <Sort />
        <History />
      </div>
      <div className="nueumorphism flex items-center justify-center w-14 h-14 rounded-full">
        <Button>
          <AiOutlinePlus className="text-acc h-9 w-9" />
        </Button>
      </div>
    </div>
  );
};

export default DiaryHeader;
