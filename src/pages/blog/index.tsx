import React from 'react';
import Top from "../../components/pages/top";
import Works from "../../components/pages/works";
import Contact from "../../components/pages/contact";
import Footer from "../../components/pages/blog/footer";


export default function Blog() {
    return (
      <div>
        {/* TOPセクション */}
        <Top />
  
        {/* WORKセクション */}
        <Works />
  
        {/* CONTACTセクション */}
        <Contact />

        <Footer />
  
        <h1>hogeサバの味噌煮</h1>
        <p>このサイトは、サバが運営するサイトです。</p>
      </div>
    );
  }
  