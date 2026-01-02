import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'SDE Intern',
    organization: 'AiBi Pvt Ltd',
    period: 'Jun 2025 – Present',
    description: 'Working on AI-driven Text-to-Speech systems with focus on backend APIs and automation.',
    highlights: ['ML inference pipelines', 'API optimization', 'Latency reduction'],
    icon: Briefcase,
  },
  {
    type: 'work',
    role: 'Frontend Intern',
    organization: 'The Sparks Foundation',
    period: 'Dec 2023 – Feb 2024',
    description: 'Developed responsive UI components using React.js and JavaScript.',
    highlights: ['React.js', 'REST API integration', 'Bug fixes'],
    icon: Briefcase,
  },
  {
    type: 'education',
    role: 'B.E. in Computer Science & Engineering',
    organization: 'University of Mumbai',
    period: 'Expected 2026',
    description: 'GPA: 8.9 — Focused on software engineering, data structures, and AI fundamentals.',
    highlights: ['GPA 8.9', 'Computer Science', 'AI & ML'],
    icon: GraduationCap,
  },
  {
    type: 'open-source',
    role: 'Open Source Contributor',
    organization: 'Social Winter of Code 2025',
    period: '2025',
    description: 'Active contributor to JavaScript and backend development projects.',
    highlights: ['JavaScript', 'Backend', 'Feature enhancements'],
    icon: Code,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.organization}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-8 ring-4 ring-background z-10" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                }`}
              >
                <div
                  className={`p-8 rounded-2xl bg-card border border-border card-glow ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}
                >
                  {/* Header */}
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <exp.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-base text-primary/80 mb-4">{exp.organization}</p>

                  {/* Description */}
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
