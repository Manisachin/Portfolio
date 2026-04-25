import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiZap } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Matrimony Web Application',
    desc: 'A production-grade full-stack platform serving 500+ users. Focused on secure role-based access and high-performance profile matching.',
    metrics: { icon: <FiZap />, label: '40% Faster API Response' },
    tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT'],
    github: 'https://github.com/Manisachin',
    features: [
      'Role-based access control (User/Admin)',
      'Tiered membership lifecycle management',
      '20+ Optimized RESTful API endpoints',
      'Advanced profile analytics dashboard'
    ],
    image: '/images/project-matrimony.png'
  },
  {
    id: 2,
    title: 'Gym Management CRM',
    desc: 'Multi-branch CRM system handling memberships, automated payments, and real-time revenue analytics for physical gym locations.',
    metrics: { icon: '📊', label: '60% Less Manual Work' },
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
    github: 'https://github.com/Manisachin',
    features: [
      'Centralized multi-branch dashboard',
      'Automated renewal alert system',
      'Member attendance & revenue tracking',
      'Dynamic reporting & data export'
    ],
    image: '/images/project-gym.png'
  },
  {
    id: 3,
    title: 'Student Management System',
    desc: 'Comprehensive academic record system for 300+ students with dual-role dashboards and real-time grade tracking.',
    metrics: { icon: '🎓', label: '50% Data Entry Efficiency' },
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JS'],
    github: 'https://github.com/Manisachin',
    features: [
      'Role-specific dashboards',
      'Full academic CRUD lifecycle',
      'Real-time session data sync',
      'Automated report generation'
    ],
    image: '/images/project-student.png'
  }
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-label">04. Case Studies</div>
        <h2 className="section-title">Selected <span className="text-accent">Work</span>.</h2>
        
        <div className="projects-list-detailed">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              className={`project-case-study ${i % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="project-visual-detailed">
                <div className="visual-inner">
                  <div className="visual-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="visual-body">
                    <img src={project.image} alt={project.title} className="project-image-detailed" />
                  </div>
                </div>
                <div className="visual-glow-alt"></div>
              </div>

              <div className="project-info-detailed">
                <div className="project-metric-badge">
                  {project.metrics.icon} <span>{project.metrics.label}</span>
                </div>
                <h3 className="project-title-detailed">{project.title}</h3>
                <p className="project-desc-detailed">{project.desc}</p>
                
                <ul className="project-features-list">
                  {project.features.map(f => <li key={f}>{f}</li>)}
                </ul>

                <div className="project-tags-row">
                  {project.tags.map(t => <span key={t} className="project-tag-pill">{t}</span>)}
                </div>

                <div className="project-links-row">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

