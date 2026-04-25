import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Bharathidasan University',
    location: 'Tamil Nadu',
    duration: '2025 – Present',
    status: 'Pursuing',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: "H.H. The Rajah's College",
    location: 'Pudukkottai, TN',
    duration: '2022 – 2025',
    status: 'First Class',
  },
];

const certifications = [
  { title: 'MERN Stack Web Development', issuer: 'Udemy / freeCodeCamp', year: '2024' },
  { title: 'JavaScript (ES6+) & React.js', issuer: 'Self-directed training', year: '2024' },
  { title: 'TypeScript, Docker & Jest', issuer: 'Ongoing', year: '2025' },
];

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-label">05. Academic</div>
        <h2 className="section-title">Academic <span className="text-accent">Background</span>.</h2>
        
        <div className="education-centered-layout">
          <div className="education-items-new">
            {education.map((edu, i) => (
              <motion.div 
                key={edu.degree} 
                className="edu-item-card-v2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="edu-card-status">{edu.status}</div>
                <div className="edu-card-content-v2">
                  <div className="edu-icon-v2"><FiBookOpen /></div>
                  <div className="edu-details-v2">
                    <h4 className="edu-card-degree">{edu.degree}</h4>
                    <div className="edu-card-institution">{edu.institution}</div>
                    <div className="edu-card-meta">
                      <span><FiCalendar /> {edu.duration}</span>
                      <span><FiMapPin /> {edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

