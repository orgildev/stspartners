import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  Users, 
  Briefcase, 
  Gavel, 
  ShieldCheck, 
  Landmark,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

import logoImg from './assets/rounded-logo.png';
import person1Img from './assets/Person1.jpg';
import person2Img from './assets/Person2.jpg';
import heroImg from './assets/hero.png';

const App: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const practiceAreas = [
    { icon: <Briefcase size={32} />, title: 'Corporate & Commercial', desc: 'Comprehensive legal support for business operations, contracts, and commercial transactions.' },
    { icon: <Scale size={32} />, title: 'M&A', desc: 'Expert guidance on mergers, acquisitions, divestitures, and strategic partnerships.' },
    { icon: <ShieldCheck size={32} />, title: 'Corporate Governance & Compliance', desc: 'Ensuring your business adheres to regulatory standards and maintains high governance levels.' },
    { icon: <Landmark size={32} />, title: 'Banking and Finance', desc: 'Specialized advice on financial regulations, lending, and capital market transactions.' },
    { icon: <MapPin size={32} />, title: 'Real Estate', desc: 'Full-service support for residential and commercial property acquisition and management.' },
    { icon: <Users size={32} />, title: 'Employment', desc: 'Strategic advice on labor relations, workplace policies, and employment law compliance.' },
    { icon: <Gavel size={32} />, title: 'Restructuring & Insolvency', desc: 'Practical solutions for debt recovery, corporate restructuring, and insolvency proceedings.' },
    { icon: <Briefcase size={32} />, title: 'Litigation & Arbitration', desc: 'Vigorous representation in dispute resolution, court litigation, and arbitration.' },
    { icon: <ShieldCheck size={32} />, title: 'Company Secretariat', desc: 'Professional secretarial services to ensure administrative efficiency and statutory compliance.' },
  ];

  const team = [
    { 
      name: 'Tsolmonchimeg Enkhbat', 
      role: 'Managing Partner', 
      img: person1Img,
      bio: 'Tsolmonchimeg is a partner specializing in Commercial and Corporate law, with extensive expertise in corporate, real estate, employment law, and investment/banking/finance. She has represented Fortune 500 companies in litigation and arbitration and previously served as a partner at a leading Mongolian law firm and senior bank lawyer.',
      qualifications: ['LL.B, Otgontenger University, 2001', 'BA, University of the Humanities, 2011', 'LL.M, National University of Mongolia, 2004', 'LL.M (Commercial Law), Monash University, 2017']
    },
    { 
      name: 'Solongo Buyant', 
      role: 'Partner', 
      img: person2Img,
      bio: 'Solongo specializes in civil, administrative, and criminal law, with a strong focus on litigation and arbitration. Her career includes serving as a senior lawyer at the Civil Aviation Authority of Mongolia and as a legal researcher. She has contributed to numerous legislative drafts and professional publications.',
      qualifications: ['LL.B, Ikh Zasag University, 2002', 'LL.M, National University of Mongolia, 2004', 'PhD Candidate, National University of Mongolia']
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={logoImg} alt="S&TS Partners LLC Logo" style={{ height: '50px', width: 'auto' }} />
            S&TS Partners LLC
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section 
        id="home" 
        className="hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.6)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')`,
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
            <h1>Defining Excellence in Legal Advocacy</h1>
            <p>S&TS Partners LLC provides strategic, results-driven legal solutions with integrity and unwavering commitment to our clients in Mongolia and beyond.</p>
            <button className="cta-button">Request Free Consultation</button>
          </motion.div>
        </div>
      </section>

      <section id="practice">
        <div className="container">
          <motion.h2 {...fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Practice Areas</motion.h2>
          <div className="practice-grid">
            {practiceAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                className="practice-card"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="icon">{area.icon}</div>
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
            <h2 style={{ marginBottom: '2rem' }}>About S&TS Partners LLC</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              S&TS Partners LLC is a full-service law firm with a strong focus on general corporate law and litigation. 
              The firm was founded in 2019 by two Mongolian-qualified lawyers educated in prestigious institutions in 
              Mongolia and Australia with 15 years of separate experience in both consulting and advocacy.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8', marginTop: '1.5rem' }}>
              Our partners have also worked in the leading law firms, banks and government-related organizations before 
              establishing the firm. To this extend, S&TS is a professional law firm that combines local knowledge and 
              international perspectives. Our practical knowledge and rich experience allow us to provide comprehensive 
              range of legal services to our domestic and foreign clients. Our objective is to provide high quality legal 
              and commercial advice through an efficiently managed professional practice that will facilitate our 
              clients’ business dealings in Mongolia.
            </p>
          </motion.div>

          <motion.h2 {...fadeIn} style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Partners</motion.h2>
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                className="team-card"
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}
              >
                <img src={member.img} alt={member.name} className="team-image" style={{ filter: 'none' }} />
                <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>{member.bio}</p>
                <div style={{ borderTop: '1px solid var(--accent)', paddingTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Qualifications</h4>
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
          <motion.h2 {...fadeIn} style={{ textAlign: 'center' }}>Get In Touch</motion.h2>
          <div className="contact-container">
            <motion.form 
              className="contact-form"
              {...fadeIn}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="cta-button" style={{ width: '100%' }}>Send Message</button>
            </motion.form>

            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={20} color="var(--secondary)" /> (555) 123-4567
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} color="var(--secondary)" /> contact@stspartners.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} color="var(--secondary)" /> 123 Legal Way, Suite 100
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} S&TS Partners LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
