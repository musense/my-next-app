import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo/Logo.component";
import LinkNavigation from "./components/LinkNavigation/LinkNavigation.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-200`}>
        <Header />
        <main className="relative xl:mt-16 mt-[100px] min-h-screen bg-transparent xl:px-1 px-8">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex xl:h-16 h-[100px] w-full flex-row items-center justify-between bg-white px-8 opacity-65">
      <Logo />
      <ul className="flex flex-row items-center justify-center gap-8">
        <LinkNavigation />
      </ul>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="bottom-0 flex h-48 w-full flex-col items-center justify-between bg-white pt-8 opacity-65">
      <div className="flex flex-row *:flex *:items-center *:justify-center *:px-6 *:before:content-[attr(data-attr)'：']">
        <div data-attr="電話">0422010520</div>
        <div data-attr="信箱">service@musense.tw</div>
        <div data-attr="地址">403518臺中市西區英才路530號23樓之5</div>
      </div>
      <div >
        <div className="flex flex-row divide-x-2 *:flex *:items-center *:justify-center *:px-6">
          <LinkNavigation />
        </div>
      </div>
      <div className="flex h-8 w-full flex-row items-center justify-center bg-orange-500 *:text-xs *:text-white">
        <span>Copyright © 陌聲行銷有限公司</span>
      </div>
    </footer>
  );
};
