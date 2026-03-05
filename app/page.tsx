'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const float = { y: [-10, 10, -10], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };

const services = [
  { id: 'naturopathie', icon: '🌿', title: 'Naturopathie', description: 'Reconnue par l\'OMS, approche globale de la santé et du bien-être.', prices: [{ name: 'Bilan initial 1h30', price: '70€' }, { name: 'Suivi 1h', price: '55€' }, { name: 'Forfait 3 séances', price: '160€' }] },
  { id: 'reflexologie', icon: '🦶', title: 'Réflexologie', description: 'Méthode naturelle pour libérer les facultés d\'auto-régulation.', prices: [{ name: 'Séance 1h', price: '55€' }, { name: 'Forfait 3 séances', price: '150€' }] },
  { id: 'energetique', icon: '⚡', title: 'Énergétique', description: 'Le Reiki pour rééquilibrer corps, esprit et énergie.', prices: [{ name: 'Séance 1h30', price: '60€' }, { name: 'Forfait 3 séances', price: '160€' }] },
  { id: 'massage', icon: '💆', title: 'Massage 5 Continents', description: ' Voyage sensoriel: Lomi-Lomi, suédois, californien, ayurvédique.', prices: [{ name: 'Séance 80 min', price: '80€' }, { name: 'Forfait 3 séances', price: '210€' }] },
  { id: 'fleursbach', icon: '🌸', title: 'Fleurs de Bach', description: 'Élixirs floraux pour rééquilibrer les émotions.', prices: [{ name: 'Conseil', price: 'Inclus' }] }
];

const faqs = [
  { question: "Comment se déroule une première consultation ?", answer: "Environ 1h30 pour un bilan complet : habitudes alimentaires, antécédents, higiene de vie, émotions. Je remets un programme personnalisé." },
  { question: "Les consultations sont-elles remboursées ?", answer: "De plus en plus de mutuelles proposent une prise en charge. Renseignez-vous auprès de votre mutuelle." },
  { question: "Combien de séances sont nécessaires ?", answer: "Généralement 3 à 5 séances espacées de 1 à 3 mois selon vos objectifs." },
  { question: "La naturopathie remplace-t-elle la médecine traditionnelle ?", answer: "Non. Le naturopathe ne pose pas de diagnostic et ne remplace pas le suivi médical. Approche complémentaire." },
  { question: "Pourquoi consulter un naturopathe ?", answer: "Pour prévention, mieux-être général, gestion du stress, troubles digestifs, sommeil, fatigue, équilibre hormonal." }
];

const testimonials = [
  { name: "Marie D.", text: "Après des mois de fatigue, j'ai retrouvé mon énergie grâce aux conseils de Delphine. Approche bienveillante !", role: "Patiente" },
  { name: "Pierre L.", text: "La réflexologie a transformé ma gestion du stress. Je dors mieux et me sens plus équilibrée.", role: "Patient" },
  { name: "Sophie M.", text: "Delphine m'a accompagnée avec écoute vers une vie plus saine. Je recommande sincèrement.", role: "Patiente" }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState('naturopathie');
  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-[#5D8A66]/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2"><span className="text-3xl">🌿</span><span className="text-xl font-serif text-[#5D8A66] font-bold">Quintessence</span></div>
          <div className="hidden md:flex items-center gap-8">
            {['Naturopathie', 'Services', 'À propos', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[#2D3B2D]/80 hover:text-[#5D8A66] text-sm font-medium">{item}</a>
            ))}
          </div>
          <motion.a href="#contact" className="bg-[#5D8A66] text-white px-5 py-2 rounded-full text-sm font-medium" whileHover={{ scale: 1.05 }}>Prendre RDV</motion.a>
        </nav>
      </motion.header>

      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8] via-[#FDFCF9] to-[#F5F0E8]" />
        <motion.div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#5D8A66]/10 rounded-full blur-3xl" animate={float} />
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div className="space-y-8" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-[#5D8A66]/10 px-4 py-2 rounded-full">
              <span>✨</span><span className="text-[#5D8A66] text-sm font-medium">Naturopathe certifiée FENA</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-serif text-[#2D3B2D] leading-tight">
              Delphine <span className="text-[#5D8A66]">BAUMONT</span><br/>
              <span className="text-3xl md:text-4xl font-light">Naturopathe à Roppe</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-[#2D3B2D]/70 max-w-lg">Naturopathie, réflexologie, énergétique, massage des 5 Continents et Fleurs de Bach pour votre bien-être.</motion.p>
            <motion.div variants={fadeIn} className="flex gap-4">
              <motion.a href="#services" className="bg-[#5D8A66] text-white px-8 py-3 rounded-full font-medium" whileHover={{ scale: 1.05 }}>Mes services</motion.a>
              <motion.a href="#contact" className="border-2 border-[#5D8A66] text-[#5D8A66] px-8 py-3 rounded-full font-medium" whileHover={{ scale: 1.05 }}>Contact</motion.a>
            </motion.div>
            <motion.div variants={fadeIn} className="flex gap-6">
              <span className="text-[#2D3B2D]/60 text-sm">📍 Roppe, 90380</span>
              <a href="tel:+33767728236" className="text-[#2D3B2D]/60 text-sm hover:text-[#5D8A66]">📞 07 67 72 82 36</a>
            </motion.div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="aspect-[4/5] bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8"><motion.div className="w-48 h-48 mx-auto bg-[#F5F0E8] rounded-full flex items-center justify-center text-8xl" animate={float}>🌿</motion.div><p className="text-[#2D3B2D]/60">Photo de Delphine</p></div>
            </div>
            <motion.div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="text-3xl font-serif text-[#5D8A66]">500+</p><p className="text-sm text-[#2D3B2D]/60">Personnes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="naturopathie" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-[#5D8A66] font-medium">Approche naturelle</span>
            <h2 className="text-4xl font-serif text-[#2D3B2D] mt-2">La Naturopathie</h2>
            <p className="text-[#2D3B2D]/70 mt-4 max-w-3xl mx-auto">Reconnue par l'OMS, elle considère la personne dans sa globalité — corps, esprit et émotions.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <p className="text-lg"><strong>La naturopathie</strong> est une approche globale de santé. Elle s'inscrit dans une démarche de prévention, d'équilibre et de vitalité durable.</p>
              <p className="text-lg">« La naturopathie vise à préserver et optimiser la santé globale de l'individu. » — <em>FENA</em></p>
              <div className="grid grid-cols-2 gap-4">
                {['🌱 Alimentation', '🌸 Fleurs de Bach', '🍵 Phytothérapie', '🧘 Stress'].map((item, i) => (
                  <div key={i} className="bg-[#F5F0E8] p-3 rounded-xl text-sm">{item}</div>
                ))}
              </div>
            </motion.div>
            <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-serif text-[#2D3B2D]">Pourquoi consulter ?</h3>
              <ul className="space-y-4">
                {['Prévention et higiene de vie', 'Mieux-être et énergie', 'Gestion du stress', 'Troubles digestifs', 'Sommeil et fatigue', 'Équilibre hormonal'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-3 h-3 bg-[#5D8A66] rounded-full" /><span>{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-[#5D8A66] font-medium">Mon expertise</span>
            <h2 className="text-4xl font-serif text-[#2D3B2D] mt-2">Mes Services</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map(s => (
              <motion.button key={s.id} onClick={() => setActiveService(s.id)} className={`px-5 py-2 rounded-full text-sm ${activeService === s.id ? 'bg-[#5D8A66] text-white' : 'bg-white text-[#2D3B2D]'}`} whileHover={{ scale: 1.05 }}>{s.icon} {s.title}</motion.button>
            ))}
          </div>
          <AnimatePresence>
            <motion.div key={activeService} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-4"><span className="text-4xl">{currentService.icon}</span><div><h3 className="text-2xl font-serif text-[#2D3B2D]">{currentService.title}</h3></div></div>
                  <p className="text-[#2D3B2D]/80">{currentService.description}</p>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-[#2D3B2D] mb-6">Tarifs</h4>
                  <div className="space-y-3">
                    {currentService.prices.map((p, i) => (
                      <motion.div key={i} className="flex justify-between p-4 bg-[#F5F0E8] rounded-xl" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                        <span>{p.name}</span><span className="text-2xl font-serif text-[#5D8A66]">{p.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="apropos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="aspect-square bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl flex items-center justify-center">
                <div className="text-9xl">👩‍⚕️</div>
              </div>
              <motion.div className="absolute -bottom-4 -right-4 bg-[#5D8A66] text-white p-6 rounded-2xl" initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
                <p className="font-serif">Certifiée FENA</p>
              </motion.div>
            </motion.div>
            <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="text-[#5D8A66] font-medium">À propos</span>
              <h2 className="text-4xl font-serif text-[#2D3B2D]">Delphine BAUMONT</h2>
              <p className="text-[#2D3B2D]/80">Praticienne en naturopathie, ma vocation est d'aider chacun à se sentir bien. Mon parcours : biologie → industrie → naturopathie (école Plantasanté).</p>
              <p className="text-[#2D3B2D]/80">Je vous accompagne avec écoute et bienveillance vers un équilibre global : physique, émotionnel et intérieur.</p>
              <div className="grid grid-cols-3 gap-4">
                {[{ n: '500+', l: 'Patients' },{ n: '5+', l: 'Années' },{ n: '100%', l: 'Naturel' }].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-[#F5F0E8] rounded-xl"><p className="text-2xl font-serif text-[#5D8A66]">{s.n}</p><p className="text-xs text-[#2D3B2D]/60">{s.l}</p></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><span className="text-[#5D8A66] font-medium">Témoignages</span><h2 className="text-4xl font-serif text-[#2D3B2D]">Ils m'ont fait confiance</h2></motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-2xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="flex gap-1 mb-4">{'★★★★★'.split('').map((s, j) => <span key={j} className="text-[#C4A574]">{s}</span>)}</div>
                <p className="text-[#2D3B2D]/80 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3"><div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">{t.name[0]}</div><div><p className="font-medium">{t.name}</p><p className="text-sm text-[#2D3B2D]/60">{t.role}</p></div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><span className="text-[#5D8A66] font-medium">FAQ</span><h2 className="text-4xl font-serif text-[#2D3B2D]">Questions fréquentes</h2></motion.div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i} className="bg-[#F5F0E8] rounded-2xl overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between">
                  <span className="font-medium pr-4">{f.question}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} className="text-[#5D8A66]">▼</motion.span>
                </button>
                <AnimatePresence>{openFaq === i && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}><p className="px-6 pb-6 text-[#2D3B2D]/70">{f.answer}</p></motion.div>}</AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#2D3B2D] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><span className="text-[#C4A574] font-medium">Contact</span><h2 className="text-4xl font-serif">Contactez-moi</h2></motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[{ i: '📍', t: 'Adresse', c: '2 rue des Champs Fourchins\n90380 Roppe' },{ i: '📞', t: 'Téléphone', c: '07 67 72 82 36', l: 'tel:+33767728236' },{ i: '✉️', t: 'Email', c: 'quintessence.delphine@gmail.com', l: 'mailto:quintessence.delphine@gmail.com' },{ i: '🕐', t: 'Horaires', c: 'Lundi au vendredi\n9h - 18h' }].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">{item.i}</div>
                  <div><h3 className="font-medium mb-1">{item.t}</h3>{item.l ? <a href={item.l} className="text-white/60 hover:text-[#C4A574]">{item.c}</a> : <p className="text-white/60 whitespace-pre-line">{item.c}</p>}</div>
                </motion.div>
              ))}
            </div>
            <motion.div className="bg-white/5 p-8 rounded-2xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <form className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C4A574]" />
                <input type="email" placeholder="Votre email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C4A574]" />
                <input type="tel" placeholder="Votre téléphone" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C4A574]" />
                <textarea rows={4} placeholder="Votre message..." className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C4A574]" />
                <motion.button type="submit" className="w-full bg-[#5D8A66] py-3 rounded-lg font-medium" whileHover={{ scale: 1.02 }}>Envoyer</motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2D3B2D]/90 py-12 border-t border-white/10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4"><span className="text-3xl text-[#5D8A66]">🌿</span><span className="text-xl font-serif text-white">Quintessence</span></div>
        <p className="text-white/40 text-sm mb-6">Delphine BAUMONT - Naturopathe à Roppe</p>
        <div className="flex justify-center gap-6 text-white/40 text-sm"><a href="#">Mentions légales</a><a href="#">Confidentialité</a></div>
      </footer>
    </div>
  );
}
