import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Gavel, 
  ShieldCheck, 
  Landmark,
  Mail,
  Phone,
  MapPin,
  Globe
} from 'lucide-react';

import logoImg from './assets/transparent-logo.png';
import person1Img from './assets/Person1.jpg';
import person2Img from './assets/Person2.jpg';
import { translations, type Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const practiceIcons = [
    <Briefcase size={32} />,
    <Landmark size={32} />,
    <MapPin size={32} />,
    <Users size={32} />,
    <ShieldCheck size={32} />,
    <Gavel size={32} />
  ];

  const teamImages = [person1Img, person2Img];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'mn' : 'en');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={logoImg} alt="S&TS Partners LLC Logo" style={{ height: '80px', width: 'auto' }} />
            <span className="logo-text">S&TS Partners LLC</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul className="nav-links">
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#practice">{t.nav.practice}</a></li>
              <li><a href="#about">{t.nav.about}</a></li>
              <li><a href="#contact">{t.nav.contact}</a></li>
            </ul>
            <button 
              onClick={toggleLang} 
              className="lang-switcher"
              aria-label="Switch Language"
            >
              <Globe size={20} />
              <span>{lang === 'en' ? 'MN' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.4)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t.hero.title}</h1>
            <p>{t.hero.desc}</p>
            <a href="#contact" className="cta-button" style={{ textDecoration: 'none' }}>{t.hero.cta}</a>
          </motion.div>
        </div>
      </section>

      <section id="practice">
        <div className="container">
          <motion.h2 {...fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.practice.title}</motion.h2>
          <div className="practice-grid">
            {t.practice.areas.map((area, idx) => (
              <motion.div 
                key={idx}
                className="practice-card"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="icon">{practiceIcons[idx]}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ maxWidth: '800px', margin: '0 auto 5rem auto', textAlign: 'center' }}
          >
            <h2 style={{ marginBottom: '2rem' }}>{t.about.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              {t.about.p1}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8', marginTop: '1.5rem' }}>
              {t.about.p2}
            </p>
          </motion.div>

          <motion.h2 {...fadeIn} style={{ textAlign: 'center', marginBottom: '4rem' }}>{t.about.partnersTitle}</motion.h2>
          <div className="team-grid">
            {t.team.map((member, idx) => (
              <motion.div 
                key={idx}
                className="team-card"
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}
              >
                <img src={teamImages[idx]} alt={member.name} className="team-image" style={{ filter: 'none' }} />
                <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>{member.bio}</p>
                <div style={{ borderTop: '1px solid var(--accent)', paddingTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.about.education}</h4>
                  <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {member.qualifications.map((q, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>• {q}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <motion.h2 {...fadeIn} style={{ textAlign: 'center' }}>{t.contact.title}</motion.h2>
          <div className="contact-container">
            <motion.form 
              className="contact-form"
              {...fadeIn}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const message = formData.get('message');
                
                const subject = `${t.contact.subject}: ${name}`;
                const body = `Full Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
                
                window.location.href = `mailto:orgil0515@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder={t.contact.phonePlaceholder} required />
              </div>
              <div className="form-group">
                <textarea name="message" rows={5} placeholder={t.contact.messagePlaceholder} required></textarea>
              </div>
              <button type="submit" className="cta-button" style={{ width: '100%' }}>{t.contact.submit}</button>
            </motion.form>

            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={20} color="var(--secondary)" /> +976 99030515; +976 99163617
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="var(--secondary)" /> info@stspartners.mn
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'center', maxWidth: '500px' }}>
                <MapPin size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                {t.contact.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} S&TS Partners LLC. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
