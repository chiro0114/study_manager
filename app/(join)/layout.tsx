export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-12">
      <div className="w-1/3 max-w-lg mx-auto nueumorphism">
        <div className="w-full mx-auto pt-7 pb-10 px-9">{children}</div>
      </div>
    </div>
  );
}
