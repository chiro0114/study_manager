export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/3 max-w-lg mt-12 mx-auto nueumorphism">
      <div className="w-full mx-auto pt-7 pb-10 px-9">{children}</div>
    </div>
  );
}
