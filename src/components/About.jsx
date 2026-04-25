import { motion } from 'framer-motion';
import { FiCode, FiZap, FiLayers, FiUsers } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiZap />,
    title: 'Performance Optimization',
    desc: 'Optimized MySQL queries reduced API response times by 40% in production.',
  },
  {
    icon: <FiLayers />,
    title: 'Scalable Architecture',
    desc: 'Deep focus on MVC patterns and clean, maintainable RESTful design.',
  },
  {
    icon: <FiUsers />,
    title: 'User-Centric Products',
    desc: 'Shipped systems supporting 500+ active users with seamless performance.',
  },
  {
    icon: <FiCode />,
    title: 'Full-Stack Engineering',
    desc: 'End-to-end expertise from React frontends to Node.js backend logic.',
  },
];

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-label">01. Profile</div>
        
        <div className="about-wrapper">
          <motion.div 
            className="about-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Driven by <span className="text-accent">Code Quality</span> & Business Value.
            </h2>
            
            <div className="about-paragraphs">
              <p>
                I'm <strong>Manikandan K</strong>, a Full Stack Developer based in Tamil Nadu. 
                With over a year of professional experience at <strong>U.K. Info Tech</strong>, 
                I specialize in crafting high-performance web applications that solve real-world problems.
              </p>
              <p>
                I don't just write code; I build systems. From engineering 20+ RESTful APIs 
                to optimizing database schemas that reduced latency by 40%, my focus is always 
                on deliverability and scalability.
              </p>
              <p>
                Currently pursuing my <strong>MCA at Bharathidasan University</strong>, I bridge 
                the gap between academic excellence and industry-standard production code.
              </p>
            </div>
          </motion.div>

          <div className="about-grid-highlights">
            {highlights.map((item, i) => (
              <motion.div 
                key={item.title} 
                className="about-highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="highlight-icon-wrapper">{item.icon}</div>
                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

