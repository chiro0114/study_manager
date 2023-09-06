import DiaryItem from "./DiaryItem";

export const DiaryWrap = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-10">
      <DiaryItem />
      <DiaryItem />
      <DiaryItem />
      <DiaryItem />
    </div>
  );
};
