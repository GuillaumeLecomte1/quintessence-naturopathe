import Link from 'next/link';
export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#4A6741]/5 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-serif text-[#4A6741]">Quintessence</Link>
          <div className="flex gap-8">
            <Link href="/a-propos" className="text-[#4A6741]">A propos</Link>
            <Link href="/contact" className="bg-[#4A6741] text-white px-6 py-2 rounded-full text-sm">Contact</Link>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-16 px-6">
        <h1 className="text-5xl font-serif text-[#2C2C2C] mb-6">A propos</h1>
        <p className="text-lg text-[#6B6B6B] max-w-2xl">Je m'appelle Delphine, praticienne en naturopathie. Ma vocation est d'aider chacun a se sentir bien.</p>
      </section>
    </div>
  );
}
