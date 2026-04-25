import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Mastery',
    label: 'Interface Layer',
    summary: 'Fast, responsive UI with clean state flow and polished interactions.',
    skills: ['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'Framer Motion', 'Bootstrap', 'CSS3/HTML5'],
  },
  {
    title: 'Core Backend',
    label: 'Application Logic',
    summary: 'APIs, authentication, and scalable server-side structure for real-world apps.',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'PHP', 'MVC Pattern'],
  },
  {
    title: 'Data & Devops',
    label: 'Delivery Stack',
    summary: 'Database handling, tooling, and deployment workflow that keep projects stable.',
    skills: ['MySQL', 'MongoDB', 'Git / GitHub', 'Postman', 'Agile / Scrum', 'Deployment'],
  },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">02. Arsenal</div>
        
        <div className="skills-content">
          <motion.div 
            className="skills-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Technical <span className="text-accent">Toolbox</span>.</h2>
            <p className="section-desc">
              My core stack for building production-ready applications, optimized for speed and maintainability.
            </p>
          </motion.div>

          <div className="skills-grid-new">
            {skillCategories.map((category, i) => (
              <motion.div 
                key={category.title} 
                className="skill-cat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="skill-cat-label">{category.label}</span>
                <h3 className="skill-cat-title">{category.title}</h3>
                <p className="skill-cat-summary">{category.summary}</p>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
