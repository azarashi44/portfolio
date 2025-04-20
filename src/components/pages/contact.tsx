// localhost:3000 👈 ここに全部表示したい
// localhost:3000/contact 

const Contact = () => {
    return (
      <section id="contact" className="min-h-screen bg-gray-50 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input className="border p-2 rounded" type="text" placeholder="お名前" required />
          <input className="border p-2 rounded" type="email" placeholder="メールアドレス" required />
          <textarea className="border p-2 rounded" placeholder="お問い合わせ内容" rows={5} required />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">送信</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  