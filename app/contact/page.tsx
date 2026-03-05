import Link from 'next/link';
export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#4A6741]/5 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-serif text-[#4A6741]">Quintessence</Link>
          <Link href="/contact" className="bg-[#4A6741] text-white px-6 py-2 rounded-full text-sm">Contact</Link>
        </div>
      </nav>
      <section className="pt-32 pb-16 px-6">
        <h1 className="text-5xl font-serif text-[#2C2C2C] mb-6">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">2 rue des Champs Fourchins<br/>90380 Roppe</p>
            <p className="text-lg mb-4">07 67 72 82 36</p>
            <p className="text-lg">quintessence.delphine@gmail.com</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Votre nom" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Votre email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Message" rows={4} className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="bg-[#4A6741] text-white px-8 py-3 rounded-lg">Envoyer</button>
          </form>
        </div>
      </section>
    </div>
  );
}
