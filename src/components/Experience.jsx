import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: 'U.K. Info Tech',
    role: 'MERN Stack Developer',
    duration: 'May 2025 – Present',
    location: 'Pudukkottai, TN',
    type: 'Full-time',
    impact: ['500+ Users', '40% Latency Reduction', '20+ APIs Shipped'],
    responsibilities: [
      'Engineered a production-grade Matrimony Web Application serving 500+ registered users with secure JWT-based auth.',
      'Designed and implemented 20+ RESTful API endpoints using Node.js/Express for mission-critical operations.',
      'Optimized MySQL queries and added strategic indexing, reducing average API response time by 40%.',
      'Built dynamic React.js UI components using Redux Toolkit, improving state management efficiency.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-label">03. Career</div>
        <h2 className="section-title">Professional <span className="text-accent">Journey</span>.</h2>
        
        <div className="experience-list">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.company} 
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="exp-timeline">
                <div className="exp-dot"></div>
                <div className="exp-line"></div>
              </div>
              
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-row">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-badge">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-meta-group">
                    <div className="exp-meta-item">
                      <FiCalendar /> {exp.duration}
                    </div>
                    <div className="exp-meta-item">
                      <FiMapPin /> {exp.location}
                    </div>
                  </div>
                </div>

                <div className="exp-impact-row">
                  {exp.impact.map((text) => (
                    <span key={text} className="impact-tag">{text}</span>
                  ))}
                </div>

                <ul className="exp-points">
                  {exp.responsibilities.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

