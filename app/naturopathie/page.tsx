import Link from 'next/link';
export default function Naturopathie() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#4A6741]/5 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-serif text-[#4A6741]">Quintessence</Link>
          <div className="flex gap-8">
            <Link href="/naturopathie" className="text-[#4A6741]">Naturopathie</Link>
            <Link href="/contact" className="bg-[#4A6741] text-white px-6 py-2 rounded-full text-sm">Contact</Link>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-16 px-6">
        <h1 className="text-5xl font-serif text-[#2C2C2C] mb-6">Naturopathie</h1>
        <p className="text-lg text-[#6B6B6B] max-w-2xl">Reconnue par l'OMS, approche globale pour retrouver l'equilibre.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl"><h3 className="font-serif text-xl mb-2">Bilan initial</h3><p className="text-[#4A6741] text-2xl">70€</p></div>
          <div className="bg-white p-6 rounded-xl"><h3 className="font-serif text-xl mb-2">Suivi</h3><p className="text-[#4A6741] text-2xl">55€</p></div>
          <div className="bg-white p-6 rounded-xl"><h3 className="font-serif text-xl mb-2">Forfait 3 seances</h3><p className="text-[#4A6741] text-2xl">160€</p></div>
        </div>
      </section>
    </div>
  );
}
