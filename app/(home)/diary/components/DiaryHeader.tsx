import Button from "@/components/Button";
import Select from "@/components/Select";
import { AiOutlinePlus } from "react-icons/ai";

const DiaryHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="flex gap-6">
        <Select />
        <Select />
        <Select />
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
