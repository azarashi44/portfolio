import Top from "../components/pages/top"
import Works from "../components/pages/works"
import Contact from "../components/pages/contact"

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
