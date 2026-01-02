import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const GITHUB_URL = 'https://github.com/rashree55';
const LINKEDIN_URL = 'https://www.linkedin.com/in/rajeshree-chaudhari-2a66a0203/';
const EMAIL = 'rajeshreechaudhari515@gmail.com';
const RESUME_URL = '/Rajeshree_resume.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Rashree</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-lg sm:text-xl text-muted-foreground mb-4"
          >
            Full Stack Developer | Backend & AI-focused
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base max-w-xl mx-auto mb-10"
          >
            Building scalable web applications and AI-driven solutions with a focus on clean code, performance, and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" asChild className="gap-2 shadow-lg hover:shadow-primary/25 transition-shadow">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;