'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const float = {
  y: [-10, 10, -10],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

// FAQ Data
const faqs = [
  {
    question: "Comment savoir si j'ai besoin d'aller voir un naturopathe ?",
    answer: "Vous pouvez envisager de consulter un naturopathe si vous recherchez une approche naturelle pour améliorer votre bien-être global. Si vous éprouvez des déséquilibres physiques, chroniques ou émotionnels, ou si vous souhaitez simplement adopter un mode de vie plus sain, un naturopathe peut vous aider."
  },
  {
    question: "La naturopathie est-elle dangereuse ?",
    answer: "La naturopathie est une approche holistique visant à favoriser le bien-être en utilisant des méthodes naturelles non invasives. Cependant, il est important de consulter un professionnel compétent qui prend en compte votre historique médical et vos traitements médicaux."
  },
  {
    question: "Combien de séances de naturopathie faut-il pour obtenir des résultats ?",
    answer: "Le nombre de séances varie selon vos besoins. Généralement entre 3 et 5 rendez-vous espacés d'un mois et demi à trois mois sont nécessaires pour atteindre vos objectifs."
  },
  {
    question: "Les consultations sont-elles remboursées ?",
    answer: "De plus en plus de mutuelles proposent une prise en charge des consultations en naturopathie. Renseignez-vous auprès de votre mutuelle pour connaître les conditions."
  }
];

// Testimonials
const testimonials = [
  {
    name: "Marie D.",
    text: "Après plusieurs mois de fatigue, j'ai retrouvé mon énergie grâce aux conseils de Delphine. Une approche bienveillante et efficace !",
    role: "Patiente"
  },
  {
    name: "Pierre L.",
    text: "Des conseils personnalisés qui ont transformé mon alimentation. Je dors mieux et me sens plus vital.",
    role: "Patient"
  },
  {
    name: "Sophie M.",
    text: "Delphine m'a accompagnée lors de ma transition vers une vie plus saine. Très à l'écoute et professionnelle.",
    role: "Patiente"
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-[#5D8A66]/10"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">🌿</span>
            <span className="text-xl font-serif text-[#5D8A66] font-bold">Quintessence</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {['Naturopathie', 'Services', 'Témoignages', 'FAQ', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#2D3B2D]/80 hover:text-[#5D8A66] transition text-sm font-medium"
                whileHover={{ color: '#5D8A66' }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contact"
            className="bg-[#5D8A66] text-white px-5 py-2 rounded-full hover:bg-[#4a7352] transition text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prendre RDV
          </motion.a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8] via-[#FDFCF9] to-[#F5F0E8]" />
        <motion.div 
          className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#5D8A66]/10 rounded-full blur-3xl"
          animate={float}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-[#C4A574]/10 rounded-full blur-3xl"
          animate={{ ...float, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-[#5D8A66]/10 px-4 py-2 rounded-full"
            >
              <span>✨</span>
              <span className="text-[#5D8A66] text-sm font-medium">Naturopathe certifiée FENA</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl font-serif text-[#2D3B2D] leading-tight"
            >
              Delphine <span className="text-[#5D8A66]">BAUMONT</span>
              <br />
              <span className="text-3xl md:text-4xl font-light">Naturopathe à Roppe</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-[#2D3B2D]/70 max-w-lg"
            >
              Votre partenaire pour retrouver votre bien-être naturellement. 
              Approche holistique personnalisée pour une santé durable.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="bg-[#5D8A66] text-white px-8 py-3 rounded-full hover:bg-[#4a7352] transition font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir la naturopathie
              </motion.a>
              <motion.a
                href="#services"
                className="border-2 border-[#5D8A66] text-[#5D8A66] px-8 py-3 rounded-full hover:bg-[#5D8A66]/10 transition font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mes services
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-[#2D3B2D]/60">
                <span>📍</span>
                <span className="text-sm">Roppe, 90380</span>
              </div>
              <div className="flex items-center gap-2 text-[#2D3B2D]/60">
                <span>📞</span>
                <a href="tel:+33767728236" className="text-sm hover:text-[#5D8A66]">07 67 72 82 36</a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="aspect-[4/5] bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl overflow-hidden flex items-center justify-center relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-8">
                <motion.div 
                  className="w-48 h-48 mx-auto mb-6 bg-[#F5F0E8] rounded-full flex items-center justify-center text-8xl"
                  animate={float}
                >
                  🌿
                </motion.div>
                <p className="text-[#2D3B2D]/60 font-medium">Photo de Delphine</p>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">💚</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-2xl">🌸</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-3xl font-serif text-[#5D8A66]">500+</p>
              <p className="text-sm text-[#2D3B2D]/60">Personnes accompagnées</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Naturopathie Section */}
      <section id="naturopathie" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5D8A66] font-medium">Approche naturelle</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D3B2D] mt-2">La Naturopathie</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 text-lg text-[#2D3B2D]/80"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                La naturopathie est une <strong>médecine traditionnelle</strong> reconnue par l'OMS qui prend en compte la personne dans sa globalité : physique, émotionnel et mental.
              </p>
              <p>
                Mon rôle est de vous accompagner pour <strong>retrouver votre équilibre naturel</strong> grâce à des conseils personnalisés en hygiène de vie, alimentation, et solutions naturelles.
              </p>
              <p>
                Chaque personne est unique. C'est pourquoi je propose des <strong>consultations individualisées</strong> adaptées à vos besoins spécifiques.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: '🌱', title: 'Alimentation' },
                  { icon: '🌸', title: 'Fleurs de Bach' },
                  { icon: '🍵', title: 'Phytothérapie' },
                  { icon: '🧘', title: 'Hygiène de vie' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3 bg-[#F5F0E8] p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { emoji: '😴', title: 'Sommeil', desc: 'Retrouver un sommeil réparateur' },
                { emoji: '💪', title: 'Énergie', desc: 'Booster votre vitalité' },
                { emoji: '🫃', title: 'Digestion', desc: 'Confort intestinal' },
                { emoji: '😊', title: 'Équilibre', desc: 'Gestion du stress' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-[#F5F0E8] p-6 rounded-2xl text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-serif text-[#2D3B2D] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2D3B2D]/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5D8A66] font-medium">Offre complète</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D3B2D] mt-2">Mes Services</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Consultation naturopathique',
                desc: 'Bilan complet pour identifier vos besoins et établir un programme personnalisé.',
                items: ['Analyse de votre mode de vie', 'Conseils alimentaires', 'Solutions naturelles', 'Suivi personnalisé']
              },
              {
                icon: '🌸',
                title: 'Fleurs de Bach',
                desc: 'Élixirs floraux pour équilibrer vos émotions et retrouver votre calme.',
                items: ['43 fleurs différentes', 'Mélanges personnalisés', 'Accompagnement émotionnel', 'Stress, anxiété, sommeil']
              },
              {
                icon: '🍵',
                title: 'Phytothérapie',
                desc: 'Utilisation des plantes médicinales pour accompagner votre santé.',
                items: ['Tisanes et décoctions', 'Huiles essentielles', 'Compléments naturels', 'conseils adaptés']
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#5D8A66]/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-[#2D3B2D] mb-4">{service.title}</h3>
                <p className="text-[#2D3B2D]/70 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#2D3B2D]/60">
                      <span className="w-2 h-2 bg-[#5D8A66] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5D8A66] font-medium">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D3B2D] mt-2">Ils m'ont fait confiance</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                className="bg-[#F5F0E8] p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#C4A574]">★</span>
                  ))}
                </div>
                <p className="text-[#2D3B2D]/80 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D3B2D]">{testimonial.name}</p>
                    <p className="text-sm text-[#2D3B2D]/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5D8A66] font-medium">Questions fréquentes</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D3B2D] mt-2">FAQ</h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-[#2D3B2D] pr-4">{faq.question}</span>
                  <motion.span 
                    className="text-[#5D8A66] text-2xl"
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-[#2D3B2D]/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#5D8A66]/20 to-[#C4A574]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-64 h-64 mx-auto mb-6 bg-[#F5F0E8] rounded-full flex items-center justify-center text-9xl">
                    👩‍⚕️
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-[#5D8A66] text-white p-6 rounded-2xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <p className="font-serif text-lg">Certifiée FENA</p>
                <p className="text-sm opacity-80">Formation complète</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#5D8A66] font-medium">À propos</span>
              <h2 className="text-4xl font-serif text-[#2D3B2D]">Delphine BAUMONT</h2>
              <p className="text-lg text-[#2D3B2D]/80">
                Naturopathe passionnée, je vous accompagne vers un <strong>mieux-être durable</strong> grâce à une approche naturelle et personnalisée.
              </p>
              <p className="text-[#2D3B2D]/70">
                Ma philosophie : prendre soin de la personne dans sa globalité, en cherchant la cause des déséquilibres plutôt que les symptômes.
              </p>
              <p className="text-[#2D3B2D]/70">
                Diplômée et certifiée par la FENA (Fédération Française des Écoles de Naturopathie), j'utilise des méthodes naturelles non invasives pour vous aider à retrouver votre équilibre.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: '500+', label: 'Patients' },
                  { number: '5+', label: 'Années exp.' },
                  { number: '100%', label: 'Naturel' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-3xl font-serif text-[#5D8A66]">{stat.number}</p>
                    <p className="text-sm text-[#2D3B2D]/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#2D3B2D] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C4A574] font-medium">Contact</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2">Contactez-moi</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                { icon: '📍', title: 'Adresse', content: '2 rue des Champs Fourchins\n90380 Roppe' },
                { icon: '📞', title: 'Téléphone', content: '07 67 72 82 36', link: 'tel:+33767728236' },
                { icon: '✉️', title: 'Email', content: 'quintessence.delphine@gmail.com', link: 'mailto:quintessence.delphine@gmail.com' },
                { icon: '🕐', title: 'Horaires', content: 'Lundi au vendredi\n9h - 18h' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#5D8A66]/20 rounded-full flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-white/60 hover:text-[#C4A574] transition whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white/60 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="bg-white/5 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-white/60">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" 
                    placeholder="Votre email" 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" 
                    placeholder="Votre téléphone" 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C4A574]" 
                    placeholder="Votre message..."
                  />
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#5D8A66] text-white py-3 rounded-lg hover:bg-[#4a7352] transition font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3B2D]/90 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl text-[#5D8A66]">🌿</span>
            <span className="text-xl font-serif text-white">Quintessence</span>
          </motion.div>
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
  );
}
