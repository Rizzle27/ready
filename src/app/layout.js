import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./layouts/Nav";
import Header from "./layouts/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ready.",
  description: "Powered by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex`}>
        <Nav />
        <div className="flex flex-col gap-12 m-4 py-5 px-6 w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
