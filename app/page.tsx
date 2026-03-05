import Link from 'next/link';

const services = [
  { 
    title: 'Naturopathie', 
    desc: 'Retrouver votre équilibre naturellement grâce à une approche globale et personnalisée.',
    price: 'À partir de 55€'
  },
  { 
    title: 'Réflexologie', 
    desc: 'Stimuler les zones réflexes pour libérer les capacités d\'auto-régulation du corps.',
    price: 'À partir de 55€'
  },
  { 
    title: 'Énergétique', 
    desc: 'Le Reiki pour rééquilibrer vos énergies et retrouver harmonie et bien-être.',
    price: 'À partir de 60€'
  },
  { 
    title: 'Massages', 
    desc: 'Le massage des 5 continents, un voyage sensoriel unique.',
    price: 'À partir de 80€'
  },
];

const values = [
  { title: 'Écoute', desc: 'Un temps d\'écoute précieux pour comprendre vos besoins profonds.' },
  { title: 'Bienveillance', desc: 'Un accompagnement doux et non-jugeant à chaque étape.' },
  { title: 'Nature', desc: 'Des méthodes naturelles pour un bien-être durable.' },
  { title: 'Autonomie', desc: 'Vous donner les clés pour devenir acteur de votre santé.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EF]/95 backdrop-blur-sm border-b border-[#2D4A3E]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl text-[#2D4A3E]">✿</span>
              <span className="font-display text-2xl text-[#2D4A3E] tracking-wide">Quintessence</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="/naturopathie" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] transition-colors text-sm tracking-wide">NATUROPATHIE</Link>
              <Link href="/reflexologie" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] transition-colors text-sm tracking-wide">RÉFLEXOLOGIE</Link>
              <Link href="/a-propos" className="text-[#1A1A1A]/70 hover:text-[#2D4A3E] transition-colors text-sm tracking-wide">À PROPOS</Link>
              <Link href="/contact" className="bg-[#2D4A3E] text-white px-7 py-2.5 text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F4EF] via-[#F0EBE3] to-[#E8E2D8]" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[600px] bg-[#C4915E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#2D4A3E]/5 rounded-full blur-3xl" />
        
        {/* Decorative line */}
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-[#2D4A3E]/10 hidden lg:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="stagger-children">
              <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-6">
                Delphine BAUMONT — Naturopathe certifiée FENA
              </p>
              <h1 className="font-display text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.05] mb-8">
                Retrouver son<br/>
                <span className="italic text-[#2D4A3E]">équilibre</span>.<br/>
                naturellement.
              </h1>
              <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-md mb-10">
                Votre praticienne vous accompagne vers un mieux-être durable à travers une approche holistique et personnalisée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-[#2D4A3E] text-white px-8 py-3.5 text-sm tracking-wide hover:bg-[#1A1A1A] transition-colors">
                  PRENDRE RENDEZ-VOUS
                </Link>
                <Link href="/a-propos" className="border border-[#2D4A3E] text-[#2D4A3E] px-8 py-3.5 text-sm tracking-wide hover:bg-[#2D4A3E]/5 transition-colors">
                  DÉCOUVRIR
                </Link>
              </div>
            </div>
            
            {/* Visual element - abstract botanical */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main visual */}
                <div className="aspect-[4/5] bg-gradient-to-br from-[#2D4A3E] to-[#3D5F52] rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#F8F4EF]/20 text-9xl mb-4">🌿</div>
                      <p className="text-[#F8F4EF]/60 font-display text-2xl">Quintessence</p>
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A3E]/30 to-transparent" />
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <p className="font-display text-3xl text-[#2D4A3E] mb-1">500+</p>
                  <p className="text-[#6B6B6B] text-sm">personnes accompagnées vers leur bien-être</p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#C4915E] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-4">EXPERTISE</p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1A1A1A]">Mes services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="group">
                <div className="bg-[#F8F4EF] p-8 rounded-2xl h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-display text-2xl text-[#2D4A3E] mb-4 group-hover:text-[#C4915E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <p className="text-[#C4915E] text-sm font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/naturopathie" className="inline-flex items-center gap-2 text-[#2D4A3E] hover:text-[#C4915E] transition-colors text-sm tracking-wide">
              EN SAVOIR PLUS <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 lg:py-32 bg-[#2D4A3E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C4915E] text-xs tracking-[0.3em] uppercase mb-4">À PROPOS</p>
              <h2 className="font-display text-4xl lg:text-5xl mb-8">
                Une approche bienveillante et personnalisée
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Mon parcours m'a menée de la biologie vers l'industrie, avant que la naturopathie n'entre dans ma vie comme une évidence. Ma formation à l'école Plantasanté m'a permis d'unir science, écoute et approche naturelle.
              </p>
              <p className="text-white/70 leading-relaxed mb-10">
                Aujourd'hui, je vous accompagne comme éducatrice de santé, avec respect et bienveillance, vers un équilibre global — physique, émotionnel et intérieur.
              </p>
              <Link href="/a-propos" className="inline-block border border-white/30 text-white px-8 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors">
                EN SAVOIR PLUS
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#3D5F52] rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">👩‍⚕️</span>
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

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#2D4A3E]">{['💚', '🤝', '🌱', '🔑'][i]}</span>
                </div>
                <h3 className="font-display text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-[#6B6B6B] text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
            Prête(e) à retrouver votre bien-être ?
          </h2>
          <p className="text-[#6B6B6B] text-lg mb-10">
            Chaque parcours est unique. Je vous invite à me contacter pour une première consultation personnalisée.
          </p>
          <Link href="/contact" className="inline-block bg-[#C4915E] text-white px-10 py-4 text-sm tracking-wide hover:bg-[#A67847] transition-colors">
            ME CONTACTER
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl text-[#2D4A3E]">✿</span>
                <span className="font-display text-xl">Quintessence</span>
              </div>
              <p className="text-white/50 text-sm">Delphine BAUMONT</p>
              <p className="text-white/50 text-sm">Naturopathe certifiée FENA</p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/naturopathie" className="hover:text-white transition-colors">Naturopathie</Link></li>
                <li><Link href="/reflexologie" className="hover:text-white transition-colors">Réflexologie</Link></li>
                <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>2 rue des Champs Fourchins</li>
                <li>90380 Roppe</li>
                <li>07 67 72 82 36</li>
                <li>quintessence.delphine<br/>@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            © 2026 Quintessence — Delphine BAUMONT. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
