import DiaryHeader from "./components/DiaryHeader";
import { DiaryWrap } from "./components/DiaryWrap";

export default function Diary() {
  return (
    <div className="mr-16">
      <DiaryHeader />
      <DiaryWrap />
    </div>
  );
}
