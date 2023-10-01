import { Montserrat } from "next/font/google";
import Wrapper from "@/components/Wrapper";
import "./globals.css";
import InitProvider from "@/provider/InitProvider";

export const metadata = {
  title: "study management app",
  description: "Generated by create next app",
};

const monstserrat = Montserrat({
  subsets: ["cyrillic"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={monstserrat.className}>
      <body className="text-cMain min-h-screen">
        <InitProvider>{children}</InitProvider>
      </body>
    </html>
  );
}
