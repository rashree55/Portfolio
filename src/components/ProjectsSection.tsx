import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Loan Eligibility Automation Engine",
    description: "Backend-driven system to automate loan eligibility checks using financial data.",
    problem: "Automates loan eligibility decisions for bulk applications",
    tech: ["FastAPI", "SQL", "AWS", "Python"],
    highlights: [
      "REST APIs for loan eligibility processing",
      "SQL-based rule evaluation engine",
      "Automated notification workflows",
      "Minimal frontend for result visualization",
    ],
    status: "In Progress",
    github: null,
    demo: null,
  },
  {
    title: "Story-to-Audio AI Pipeline",
    description: "End-to-end full stack application converting documents into narrated audio.",
    problem: "Transforms written content into engaging audio narratives",
    tech: ["Python", "LLMs", "TTS", "Next.js"],
    highlights: [
      "Document text extraction and processing",
      "AI-powered story rewriting and dialogue generation",
      "20-25% response time optimization",
      "Asynchronous processing pipeline",
    ],
    github: "https://github.com/rashree55/story-to-audio",
    demo: null,
  },
  {
    title: "AI Multi-Voice Text-to-Speech Platform",
    description: "Multi-character TTS system with dynamic voice switching and configurable parameters.",
    problem: "Creates realistic multi-voice audio content",
    tech: ["Coqui TTS", "Python", "ML Inference"],
    highlights: [
      "Dynamic voice switching per character",
      "Configurable voice parameters",
      "Modular backend architecture",
      "Scalable audio generation",
    ],
    github: "https://github.com/Sangharaj17/aibilabs",
    demo: null,
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboards to analyze sales KPIs and trends.",
    problem: "Improves data visibility and decision-making",
    tech: ["Power BI", "SQL", "Data Visualization"],
    highlights: [
      "Interactive KPI visualizations",
      "Sales trend analysis",
      "Automated reporting workflows",
      "Data-driven insights",
    ],
    github: null,
    demo: "https://black-insights-portal.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my problem-solving abilities and technical skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group p-6 rounded-xl bg-card border border-border card-glow flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              {/* Problem */}
              <p className="text-sm text-muted-foreground mb-4 italic">→ {project.problem}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild className="gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {!project.github && !project.demo && (
                  <span className="text-xs text-muted-foreground italic">Links coming soon</span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
