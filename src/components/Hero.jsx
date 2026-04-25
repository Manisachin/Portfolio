import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-eyebrow">
              <span className="status-indicator"></span>
              Available for new projects
            </div>
            
            <div className="hero-intro-row">
              <div className="hero-photo-container">
                <img src="/images/manikandan-profile.png" alt="Manikandan K" className="hero-photo" />
                <div className="photo-ring"></div>
              </div>
              <div className="hero-headline-group">
                <h1 className="hero-headline">
                  Designing Code That Powers <br />
                  <span className="text-accent">Modern Web Experiences</span>
                </h1>
              </div>
            </div>
            
            <p className="hero-subheadline">
              I'm <strong>Manikandan K</strong>, a MERN Stack Developer specialized in building 
              scalable applications with a focus on performance and clean architecture.
            </p>

            <div className="hero-meta">
              <div className="meta-item">
                <FiMapPin className="meta-icon" />
                <span>Pudukkottai, India</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">Experience</span>
                <span className="meta-value">1+ Year</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                See My Work <FiArrowRight />
              </button>
              <a href="/Manikandan_2Page_ATS_Resume.docx" download="Manikandan_2Page_ATS_Resume.docx" className="btn btn-secondary">
                <FiDownload /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="visual-card">
              <div className="card-header">
                <div className="dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="address-bar">api.manikandan.dev</div>
              </div>
              <div className="card-body">
                <div className="code-snippet">
                  <span className="code-keyword">const</span> <span className="code-func">developer</span> = &#123;
                    <br />&nbsp;&nbsp;name: <span className="code-string">'Manikandan K'</span>,
                    <br />&nbsp;&nbsp;role: <span className="code-string">'MERN Stack Developer'</span>,
                    <br />&nbsp;&nbsp;focus: <span className="code-string">'Performance'</span>,
                    <br />&nbsp;&nbsp;metrics: &#123;
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;apiSpeed: <span className="code-string">'+40%'</span>,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;users: <span className="code-string">'500+'</span>
                    <br />&nbsp;&nbsp;&#125;
                  <br />&#125;;
                </div>
              </div>
            </div>
            <div className="visual-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
