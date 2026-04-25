import { motion } from 'framer-motion';
import { FiDownload, FiCheckCircle } from 'react-icons/fi';

const Resume = () => {
  return (
    <section className="section resume-section-new" id="resume">
      <div className="container">
        <motion.div 
          className="resume-card-new"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="resume-content-new">
            <h2 className="resume-title-new">Looking for a <span className="text-accent">Full-Stack Engineer?</span></h2>
            <p className="resume-text-new">
              I bring a year of real-world experience building scalable MERN systems, optimizing performance by 40%, and delivering production-ready code.
            </p>
            
            <div className="resume-highlights-new">
              <div className="resume-h-item">
                <FiCheckCircle /> <span>Scalable Architecture</span>
              </div>
              <div className="resume-h-item">
                <FiCheckCircle /> <span>Performance Focused</span>
              </div>
              <div className="resume-h-item">
                <FiCheckCircle /> <span>Production Experience</span>
              </div>
            </div>

            <div className="resume-actions-new">
              <a href="/Manikandan_2Page_ATS_Resume.docx" download="Manikandan_2Page_ATS_Resume.docx" className="btn btn-primary">
                Download Full Resume <FiDownload />
              </a>
            </div>
          </div>
          
          <div className="resume-visual-bg"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
