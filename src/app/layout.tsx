import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

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
        <ReduxProvider>
          <Header />
          <main className="relative min-h-screen bg-transparent 
          xl:mt-16 mt-[100px] 
          xl:px-1 px-8
          ">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}


