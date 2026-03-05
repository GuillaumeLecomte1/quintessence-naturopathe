import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delphine BAUMONT - Naturopathe à Roppe | Quintessence',
  description: 'Consultations en naturopathie à Roppe (90380). Delphine BAUMONT vous accompagne naturellement pour retrouver votre bien-être : stress, digestion, sommeil, équilibre alimentaire.',
  keywords: 'naturopathe, Roppe, Delphine BAUMONT, médecine naturelle, bien-être, stress, digestion, alimentation, fleurs de Bach',
  openGraph: {
    title: 'Delphine BAUMONT - Naturopathe à Roppe',
    description: 'Consultations en naturopathie à Roppe. Retrouver votre bien-être naturellement.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Delphine BAUMONT",
              "jobTitle": "Naturopathe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2 rue des Champs Fourchins",
                "postalCode": "90380",
                "addressLocality": "Roppe",
                "addressCountry": "FR"
              },
              "telephone": "+33767728236",
              "email": "quintessence.delphine@gmail.com",
              "url": "https://quintessence-naturopathie.fr",
              "description": "Consultations en naturopathie à Roppe"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#FDFCF9]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF9]/95 backdrop-blur-sm border-b border-[#5D8A66]/10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif text-[#5D8A66]">✿</span>
              <span className="text-xl font-serif text-[#2D3B2D]">Quintessence</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#naturopathie" className="text-[#2D3B2D]/80 hover:text-[#5D8A66] transition">Naturopathie</a>
              <a href="#consultations" className="text-[#2D3B2D]/80 hover:text-[#5D8A66] transition">Consultations</a>
              <a href="#apropos" className="text-[#2D3B2D]/80 hover:text-[#5D8A66] transition">À propos</a>
              <a href="#contact" className="text-[#2D3B2D]/80 hover:text-[#5D8A66] transition">Contact</a>
            </div>
            <a href="#contact" className="bg-[#5D8A66] text-white px-5 py-2 rounded-full hover:bg-[#4a7352] transition text-sm font-medium">
              Prendre RDV
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8] via-[#FDFCF9] to-[#F5F0E8]"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#5D8A66]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#C4A574]/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#5D8A66]/10 px-4 py-2 rounded-full">
                <span className="text-[#5D8A66]">🌿</span>
                <span className="text-[#5D8A66] text-sm font-medium">Naturopathe certifiée</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[#2D3B2D] leading-tight">
                Delphine <span className="text-[#5D8A66]">BAUMONT</span>
                <br />
                <span className="text-3xl md:text-4xl font-light">Naturopathe à Roppe</span>
              </h1>
              <p className="text-xl text-[#2D3B2D]/70 max-w-md">
                Accompagnement naturel pour retrouver votre bien-être : gestion du stress, troubles digestifs, sommeil, et équilibre alimentaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-[#5D8A66] text-white px-8 py-3 rounded-full hover:bg-[#4a7352] transition font-medium">
                  Découvrir la naturopathie
                </a>
                <a href="#naturopathie" className="border-2 border-[#5D8A66] text-[#5D8A66] px-8 py-3 rounded-full hover:bg-[#5D8A66]/10 transition font-medium">
                  En savoir plus
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-[#2D3B2D]/60">
                  <span>📍</span>
                  <span className="text-sm">Roppe, 90380</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D3B2D]/60">
                  <span>📞</span>
                  <span className="text-sm">07 67 72 82 36</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 bg-[#F5F0E8] rounded-full flex items-center justify-center text-6xl">
                    🌿
                  </div>
                  <p className="text-[#2D3B2D]/60">Photo de Delphine</p>
                  <p className="text-[#2D3B2D]/40 text-sm mt-2">À ajouter</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-serif text-[#5D8A66]">500+</p>
                <p className="text-sm text-[#2D3B2D]/60">Personnes accompagnées</p>
              </div>
            </div>
          </div>
        </section>

        {/* Naturopathie Section */}
        <section id="naturopathie" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#5D8A66] font-medium">Approche naturelle</span>
              <h2 className="text-4xl font-serif text-[#2D3B2D] mt-2">Qu'est-ce que la naturopathie ?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-[#2D3B2D]/80">
                <p>
                  La naturopathie est une <strong>approche holistique</strong> qui prend en compte la personne dans sa globalité : physique, émotionnel et mental.
                </p>
                <p>
                  Mon rôle est de vous accompagner pour <strong>retrouver votre équilibre naturel</strong> grâce à des conseils personnalisés en higiene de vie, alimentation, et solutions naturelles.
                </p>
                <p>
                  Chaque personne est unique. C'est pourquoi je propose des <strong>consultations individualisées</strong> adaptées à vos besoins spécifiques.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#5D8A66] rounded-full"></span>
                    <span>Approche globale et personnalisée</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#5D8A66] rounded-full"></span>
                    <span>Méthodes naturelles non invasives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#5D8A66] rounded-full"></span>
                    <span>Prévention et bien-être au quotidien</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F5F0E8] p-6 rounded-2xl text-center">
                  <div className="text-4xl mb-3">🌱</div>
                  <h3 className="font-serif text-[#2D3B2D] mb-2">Alimentation</h3>
                  <p className="text-sm text-[#2D3B2D]/60">Conseils personnalisés</p>
                </div>
                <div className="bg-[#F5F0E8] p-6 rounded-2xl text-center">
                  <div className="text-4xl mb-3">🌸</div>
                  <h3 className="font-serif text-[#2D3B2D] mb-2">Fleurs de Bach</h3>
                  <p className="text-sm text-[#2D3B2D]/60">Équilibre émotionnel</p>
                </div>
                <div className="bg-[#F5F0E8] p-6 rounded-2xl text-center">
                  <div className="text-4xl mb-3">🍵</div>
                  <h3 className="font-serif text-[#2D3B2D] mb-2">Phytothérapie</h3>
                  <p className="text-sm text-[#2D3B2D]/60">Plantes medicinales</p>
                </div>
                <div className="bg-[#F5F0E8] p-6 rounded-2xl text-center">
                  <div className="text-4xl mb-3">🧘</div>
                  <h3 className="font-serif text-[#2D3B2D] mb-2">Hygiène de vie</h3>
                  <p className="text-sm text-[#2D3B2D]/60">Gestion du stress</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultations Section */}
        <section id="consultations" className="py-24 bg-[#F5F0E8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#5D8A66] font-medium">Mes services</span>
              <h2 className="text-4xl font-serif text-[#2D3B2D] mt-2">Consultations</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#5D8A66]/10 rounded-full flex items-center justify-center text-2xl mb-6">
                  🌿
                </div>
                <h3 className="text-xl font-serif text-[#2D3B2D] mb-4">Bilan naturopathique</h3>
                <p className="text-[#2D3B2D]/70 mb-6">
                  Une approche globale pour identifier vos besoins et établir un programme personnalisé d'hygiène de vie.
                </p>
                <ul className="space-y-2 text-sm text-[#2D3B2D]/60">
                  <li>• Analyse de votre mode de vie</li>
                  <li>• Conseils alimentaires</li>
                  <li>• Solutions naturelles</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#C4A574]/10 rounded-full flex items-center justify-center text-2xl mb-6">
                  😴
                </div>
                <h3 className="text-xl font-serif text-[#2D3B2D] mb-4">Troubles du sommeil</h3>
                <p className="text-[#2D3B2D]/70 mb-6">
                  Accompagnement pour retrouver un sommeil de qualité grâce à des méthodes naturelles.
                </p>
                <ul className="space-y-2 text-sm text-[#2D3B2D]/60">
                  <li>• Analyse des troubles</li>
                  <li>• Phytothérapie</li>
                  <li>• Techniques de relaxation</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#5D8A66]/10 rounded-full flex items-center justify-center text-2xl mb-6">
                  💚
                </div>
                <h3 className="text-xl font-serif text-[#2D3B2D] mb-4">Gestion du stress</h3>
                <p className="text-[#2D3B2D]/70 mb-6">
                  Des outils naturels pour mieux gérer votre stress quotidien et retrouver votre équilibre.
                </p>
                <ul className="space-y-2 text-sm text-[#2D3B2D]/60">
                  <li>• Fleurs de Bach</li>
                  <li>• Respiration</li>
                  <li>• Mindfulness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto mb-6 bg-[#F5F0E8] rounded-full flex items-center justify-center text-7xl">
                      👩‍⚕️
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#5D8A66] text-white p-4 rounded-xl">
                  <p className="font-serif text-lg">Certifiée</p>
                  <p className="text-sm opacity-80">Naturopathe FENA</p>
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-[#5D8A66] font-medium">À propos</span>
                <h2 className="text-4xl font-serif text-[#2D3B2D]">Delphine BAUMONT</h2>
                <p className="text-lg text-[#2D3B2D]/80">
                  Naturopathe passionnée, j'accompagne mes clients vers <strong>retour au bien-être</strong> grâce à une approche naturelle et personnalisée.
                </p>
                <p className="text-[#2D3B2D]/70">
                  Ma philosophie : prendre soin de la personne dans sa globalité, en cherchant la cause des déséquilibres plutôt que les symptômes.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-serif text-[#5D8A66]">500+</p>
                    <p className="text-sm text-[#2D3B2D]/60">Patients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-serif text-[#5D8A66]">5+</p>
                    <p className="text-sm text-[#2D3B2D]/60">Années exp.</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-serif text-[#5D8A66]">100%</p>
                    <p className="text-sm text-[#2D3B2D]/60">Naturel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#2D3B2D] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#C4A574] font-medium">Contact</span>
              <h2 className="text-4xl font-serif mt-2">Contactez-moi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-white/60">2 rue des Champs Fourchins<br />90380 Roppe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <a href="tel:+33767728236" className="text-white/60 hover:text-[#C4A574] transition">07 67 72 82 36</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:quintessence.delphine@gmail.com" className="text-white/60 hover:text-[#C4A574] transition">quintessence.delphine@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">🕐</div>
                  <div>
                    <h3 className="font-medium mb-1">Horaires</h3>
                    <p className="text-white/60">Lundi au vendredi<br />9h - 18h</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-white/60">Nom</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-white/60">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" placeholder="Votre email" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-white/60">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" placeholder="Votre message..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#5D8A66] text-white py-3 rounded-lg hover:bg-[#4a7352] transition font-medium">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2D3B2D]/90 py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl text-[#5D8A66]">✿</span>
              <span className="text-xl font-serif text-white">Quintessence</span>
            </div>
            <p className="text-white/40 text-sm mb-6">
              Delphine BAUMONT - Naturopathe à Roppe
            </p>
            <div className="flex justify-center gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition">Mentions légales</a>
              <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
