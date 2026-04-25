import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-top-v2">
          <div className="footer-brand-v2">
            <span className="logo-text">Manikandan <span className="text-accent">.</span></span>
            <p>Full Stack Engineer specialized in high-performance MERN applications.</p>
          </div>
          
          <div className="footer-socials-v2">
            <a href="https://github.com/Manisachin" target="_blank" rel="noreferrer" className="social-pill-v2">
              <FiGithub /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/manikandan-k-6b386932a" target="_blank" rel="noreferrer" className="social-pill-v2">
              <FiLinkedin /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom-v2">
          <div className="footer-copyright">
            © {currentYear} Manikandan K. All rights reserved.
          </div>
          <div className="footer-signature">
            Built with <span className="text-accent">Passion</span> & Precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
