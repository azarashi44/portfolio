import Image from "next/image";
import localFont from "next/font/local";
import Top from "../components/pages/top"
import Works from "../components/pages/works"
import Contact from "../components/pages/contact"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      {/* TOPセクション */}
      <Top />

      {/* WORKセクション */}
      <Works />

      {/* CONTACTセクション */}
      <Contact />

      {/* なんか適当に書いてるセクション */}
      <h1>hogeサバの味噌煮</h1>
      <p>このサイトは、サバが運営するサイトです。</p>
    </div>
  );
}
