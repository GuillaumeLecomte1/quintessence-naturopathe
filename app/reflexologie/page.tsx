import Link from 'next/link';

export default function Reflexologie() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EF]/95 backdrop-blur-sm border-b border-[#2D4A3E]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl text-[#2D4A3E]">✿</span>
              <span className="font-display text-2xl text-[#2D4A3E] tracking-wide">Quintessence</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="/naturopathie" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] text-sm tracking-wide">NATUROPATHIE</Link>
              <Link href="/reflexologie" className="text-[#2D4A3E] text-sm tracking-wide font-medium">RÉFLEXOLOGIE</Link>
              <Link href="/a-propos" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] text-sm tracking-wide">À PROPOS</Link>
              <Link href="/contact" className="bg-[#2D4A3E] text-white px-7 py-2.5 text-sm tracking-wide hover:bg-[#1A1A1A]">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-4">RÉFLEXOLOGIE</p>
          <h1 className="font-display text-5xl lg:text-6xl text-[#1A1A1A] mb-8">
            L'art naturel du bien-être
          </h1>
          <p className="text-[#6B6B6B] text-lg max-w-2xl leading-relaxed">
            La réflexologie est une méthode naturelle et manuelle qui aide le corps à libérer ses facultés d'auto-régulation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-6">Une approche globale</h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">
                En stimulant des points réflexes situés sur les pieds, les mains, le visage ou le crâne, cette approche douce agit sur l'ensemble des organes et fonctions du corps.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Grâce à des pressions précises et adaptées, la réflexologie procure une détente profonde, favorise la récupération et soutient la prévention de nombreux troubles.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-6">Les techniques</h2>
              <ul className="space-y-4">
                {[
                  'Réflexologie plantaire',
                  'Réflexologie palmaire', 
                  'Réflexologie crânio-faciale',
                  'Points Knap'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#2D4A3E] rounded-full"></span>
                    <span className="text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl text-[#1A1A1A] mb-10 text-center">Tarifs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl text-center">
              <h3 className="font-display text-xl text-[#1A1A1A] mb-2">Séance</h3>
              <p className="text-[#6B6B6B] text-sm mb-4">1h</p>
              <p className="text-4xl font-display text-[#2D4A3E]">55€</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center">
              <h3 className="font-display text-xl text-[#1A1A1A] mb-2">Forfait</h3>
              <p className="text-[#6B6B6B] text-sm mb-4">3 séances</p>
              <p className="text-4xl font-display text-[#2D4A3E]">150€</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D4A3E] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-4">Vous souhaitez essayer ?</h2>
          <p className="text-white/70 mb-8">Contactez-moi pour une première séance.</p>
          <Link href="/contact" className="inline-block bg-white text-[#2D4A3E] px-10 py-4 text-sm tracking-wide hover:bg-[#F8F4EF] transition-colors">
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white/40 py-8 text-center text-sm">
        <p>© 2026 Quintessence — Delphine BAUMONT</p>
      </footer>
    </div>
  );
}
