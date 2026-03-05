import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#4A6741]/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">✿</span>
            <span className="text-xl font-serif text-[#4A6741]">Quintessence</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/naturopathie" className="text-[#2C2C2C]/70 hover:text-[#4A6741] text-sm">Naturopathie</Link>
            <Link href="/a-propos" className="text-[#2C2C2C]/70 hover:text-[#4A6741] text-sm">A propos</Link>
            <Link href="/contact" className="bg-[#4A6741] text-white px-6 py-2 rounded-full text-sm">Contact</Link>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-16 px-6">
        <h1 className="text-5xl font-serif text-[#2C2C2C] mb-6">Delphine BAUMONT<br/>Naturopathe a Roppe</h1>
        <p className="text-xl text-[#6B6B6B] max-w-2xl mb-8">Retrouver son equilibre naturellement. Votre praticienne vous accompagne vers un mieux-etre durable.</p>
        <Link href="/contact" className="bg-[#4A6741] text-white px-8 py-3 rounded-full">Prendre rendez-vous</Link>
      </section>
    </div>
  );
}
