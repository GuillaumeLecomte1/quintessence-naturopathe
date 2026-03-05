import Link from 'next/link';

export default function About() {
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
              <Link href="/a-propos" className="text-[#2D4A3E] text-sm tracking-wide font-medium">À PROPOS</Link>
              <Link href="/contact" className="bg-[#2D4A3E] text-white px-7 py-2.5 text-sm tracking-wide hover:bg-[#1A1A1A]">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-4">À PROPOS</p>
          <h1 className="font-display text-5xl lg:text-6xl text-[#1A1A1A] mb-8">
            Delphine BAUMONT
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-6">Mon parcours</h2>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
                <p>Je m'appelle Delphine, praticienne en naturopathie. Ma vocation est née d'une conviction profonde : chacun mérite de se sentir bien, en harmonie avec son corps et avec lui-même.</p>
                <p>Mon parcours ne fut pas linéaire. J'ai d'abord étudié la biologie et la physiologie cellulaire, fascinée par l'intelligence du vivant. Puis la vie m'a menée vers l'industrie, un univers riche, mais où, au fil du temps, je me suis un peu éloignée de ce qui me faisait profondément vibrer.</p>
                <p>C'est finalement à travers l'épreuve de la maladie que la naturopathie est entrée dans ma vie. Non pas comme un simple métier, mais comme une évidence, une rencontre, un retour à l'essentiel.</p>
                <p>Ma formation de praticienne en naturopathie à l'école Plantasanté m'a permis d'unir la science, l'écoute et l'approche naturelle pour proposer un accompagnement profondément personnalisé.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#2D4A3E] to-[#3D5F52] rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-9xl">👩‍⚕️</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C4915E] text-white p-6 rounded-2xl">
                <p className="font-display text-2xl">Certifiée</p>
                <p className="text-sm opacity-80">FENA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl text-[#1A1A1A] mb-10 text-center">Mon approche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Écoute', desc: 'Je mets un point d\'honneur à vous écouter attentivement pour comprendre vos besoins profonds.' },
              { title: 'Personnalisation', desc: 'Chaque accompagnement est unique et adapté à votre situation individuelle.' },
              { title: 'Autonomie', desc: 'Mon objectif : vous donner les clés pour devenir acteur de votre santé.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl">
                <h3 className="font-display text-xl text-[#2D4A3E] mb-3">{item.title}</h3>
                <p className="text-[#6B6B6B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2D4A3E] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-4">Me contacter</h2>
          <p className="text-white/70 mb-8">Je serais ravie de vous accompagner vers votre bien-être.</p>
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
