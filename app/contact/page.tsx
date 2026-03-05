import Link from 'next/link';

export default function Contact() {
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
              <Link href="/a-propos" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] text-sm tracking-wide">À PROPOS</Link>
              <Link href="/contact" className="bg-[#2D4A3E] text-white px-7 py-2.5 text-sm tracking-wide">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-4">CONTACT</p>
          <h1 className="font-display text-5xl lg:text-6xl text-[#1A1A1A] mb-8">
            Me contacter
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-8">Informations de contact</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-[#C4915E] text-xs tracking-[0.2em] uppercase mb-2">ADRESSE</p>
                  <p className="text-[#1A1A1A] text-lg">2 rue des Champs Fourchins<br/>90380 Roppe</p>
                </div>
                <div>
                  <p className="text-[#C4915E] text-xs tracking-[0.2em] uppercase mb-2">TÉLÉPHONE</p>
                  <a href="tel:+33767728236" className="text-[#1A1A1A] text-lg hover:text-[#2D4A3E] transition-colors">07 67 72 82 36</a>
                </div>
                <div>
                  <p className="text-[#C4915E] text-xs tracking-[0.2em] uppercase mb-2">EMAIL</p>
                  <a href="mailto:quintessence.delphine@gmail.com" className="text-[#1A1A1A] text-lg hover:text-[#2D4A3E] transition-colors">quintessence.delphine@gmail.com</a>
                </div>
                <div>
                  <p className="text-[#C4915E] text-xs tracking-[0.2em] uppercase mb-2">HORAIRES</p>
                  <p className="text-[#1A1A1A] text-lg">Lundi au vendredi<br/>9h - 18h</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8F4EF] p-8 lg:p-10 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">Nom</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2D4A3E]" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2D4A3E]" placeholder="Votre email" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2D4A3E]" placeholder="Votre téléphone" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2D4A3E]" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#2D4A3E] text-white py-4 text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors">
                  ENVOYER
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white/40 py-8 text-center text-sm">
        <p>© 2026 Quintessence — Delphine BAUMONT</p>
      </footer>
    </div>
  );
}
