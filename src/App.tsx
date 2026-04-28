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

const App: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const practiceAreas = [
    { 
      icon: <Briefcase size={32} />, 
      title: 'Corporate & Commercial', 
      desc: 'Comprehensive legal support across all aspects of business operations, including company formation and governance, legal due diligence, contract drafting and negotiation, regulatory compliance, and a wide range of commercial transactions.' 
    },
    { 
      icon: <Landmark size={32} />, 
      title: 'Banking and Finance', 
      desc: 'Specialized legal advice across a broad spectrum of banking and finance matters, including regulatory compliance, borrowing, financing structures, lending transactions, and capital markets activities.' 
    },
    { 
      icon: <MapPin size={32} />, 
      title: 'Real Estate', 
      desc: 'Provision of legal advice on residential and commercial real estate matters, including property acquisition and disposition, leasing, due diligence, and transactional structuring.' 
    },
    { 
      icon: <Users size={32} />, 
      title: 'Employment', 
      desc: 'Strategic and practical legal advice on all aspects of employment law, including labor relations, workplace policies, employment contracts, termination matters, and regulatory compliance.' 
    },
    { 
      icon: <ShieldCheck size={32} />, 
      title: 'Insolvency', 
      desc: 'Practical solutions for insolvency matters with strategic insight and efficient execution.' 
    },
    { 
      icon: <Gavel size={32} />, 
      title: 'Litigation & Arbitration', 
      desc: 'Strategic and results driven representation in all forms of dispute resolution, including court litigation, arbitration, and alternative dispute resolution mechanisms. Our team is committed to protecting our clients’ interests at every stage of the dispute process, from pre litigation strategy and negotiation through to final resolution and enforcement.' 
    },
  ];

  const team = [
    { 
      name: 'Tsolmonchimeg Enkhbat', 
      role: 'Managing Partner', 
      img: person1Img,
      bio: 'Tsolmonchimeg is a lawyer specializing in commercial and corporate law, with extensive experience in investment, real estate, employment, banking and finance, and capital markets. She advises both domestic and foreign clients, guiding them from the establishment of their businesses through all phases of their operations.',
      qualifications: [
        'LL.B, Otgontenger University, 2001', 
        'BA, University of the Humanities, 2011', 
        'LL.M, National University of Mongolia, 2004', 
        'LL.M (Commercial Law), Monash University, 2017'
      ]
    },
    { 
      name: 'Solongo Buyant', 
      role: 'Partner', 
      img: person2Img,
      bio: 'Solongo is an experienced litigation lawyer specializing in civil, administrative, and criminal law, with a strong track record in representing clients across all stages of litigation and arbitration. She brings extensive expertise in handling complex disputes, providing strategic advice, and advocating effectively before courts and arbitral tribunals, with a strong commitment to the protection of human rights.',
      qualifications: [
        'LL.B, Ikh Zasag University, 2002', 
        'LL.M, National University of Mongolia, 2004'
      ]
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
            <p>S&TS Partners LLC provides strategic, results driven legal solutions with integrity and an unwavering commitment to our Mongolian and foreign clients.</p>
            <button className="cta-button">Request Consultation</button>
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
              S&TS Partners LLC is a full service law firm with a strong focus on corporate law and litigation. 
              Established in 2019, the firm was founded by two Mongolian qualified lawyers educated at prestigious 
              institutions in Mongolia and Australia.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8', marginTop: '1.5rem' }}>
              Our partners each bring 20 years of experience in corporate law and litigation, with particular expertise 
              in advising foreign investors, as well as in both consulting and advocacy. Drawing on this extensive 
              experience, we provide a comprehensive range of legal services to both domestic and international clients. 
              Our objective is to deliver high quality legal and commercial advice through an efficiently managed 
              professional practice, supporting and facilitating our clients’ business activities in Mongolia.
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
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Education</h4>
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

            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={20} color="var(--secondary)" /> +976 99030515; +976 99163617
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="var(--secondary)" /> info@stspartners.mn
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'center', maxWidth: '500px' }}>
                <MapPin size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                Suite 301, Arig Center, Jamyangun Street, 1st khoroo, Sukhbaatar District, Ulaanbaatar 14240, Mongolia
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
