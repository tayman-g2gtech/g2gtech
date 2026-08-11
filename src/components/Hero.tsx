import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Database, Shield, Zap, Cloud, Lock, Workflow, Terminal, Activity, TrendingUp, Sparkles, Server, CheckCircle2, Code2, Layers, Network, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apple-like scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    { text: "Conseil expert en IT", icon: Cpu },
    { text: "Création SaaS", icon: Cloud },
    { text: "Transformation digitale", icon: Code2 }
  ];

  // Animation transition config matching Apple's ease out
  const appleTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Network Mesh & Data Flow Background */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Glow Blur Elements (Aurora Glow) */}
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] bg-primary/15 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[8s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s] delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[12s] delay-2000" />

        {/* Cyber Network Grid Lines (Subtle Perspective Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

        {/* Central Concentric Radar Pulse Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <circle cx="350" cy="350" r="160" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" strokeDasharray="6 6" />
            <circle cx="350" cy="350" r="260" stroke="hsl(var(--secondary))" strokeWidth="1" fill="none" strokeDasharray="8 8" />
            <circle cx="350" cy="350" r="340" stroke="hsl(var(--accent))" strokeWidth="0.8" fill="none" />
          </svg>
        </div>


        {/* Floating Constellation Star Nodes */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3.5 + (i % 4) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_12px_hsl(var(--primary))]"
            style={{
              left: `${8 + (i * 5.8)}%`,
              top: `${14 + (i * 5.5) % 70}%`
            }}
          />
        ))}

        {/* High-Tech Floating Glassmorphic Badges */}

        {/* 1. Top Left Node - Cloud SaaS */}
        <motion.div
          animate={{ y: [-12, 12, -12], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[16%] left-[4%] hidden lg:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-primary/30 p-3 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.18)]"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div className="text-left pr-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-foreground tracking-wide">Multi-Tenant SaaS</span>
            </div>
            <span className="text-[9px] text-muted-foreground font-mono">Cloud Architecture</span>
          </div>
        </motion.div>

        {/* 2. Top Right Node - Security Shield */}
        <motion.div
          animate={{ y: [14, -14, 14], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[18%] right-[5%] hidden lg:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-secondary/30 p-3 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.18)]"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-secondary" />
          </div>
          <div className="text-left pr-2">
            <div className="flex items-center space-x-1.5">
              <Lock className="w-3 h-3 text-secondary" />
              <span className="text-[11px] font-bold text-foreground tracking-wide">Sécurité IT</span>
            </div>
            <span className="text-[9px] text-emerald-400 font-mono font-semibold">Prévention CSRF &amp; XSS</span>
          </div>
        </motion.div>

        {/* 3. Mid Left Node - Scalabilité & Architecture */}
        <motion.div
          animate={{ y: [8, -12, 8], x: [-3, 3, -3] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute top-[40%] left-[3%] hidden xl:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-emerald-500/30 p-2.5 rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.15)]"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Layers className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[10px] font-bold text-foreground block">Architecture Scalable</span>
            <span className="text-[9px] text-emerald-400 font-mono font-bold">Microservices Cloud</span>
          </div>
        </motion.div>

        {/* 4. Mid Right Node - Intégration & Connectivité */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [3, -3, 3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[42%] right-[4%] hidden xl:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-primary/30 p-2.5 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.15)]"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Network className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[10px] font-bold text-foreground block">CI/CD Automatisé</span>
            <span className="text-[9px] text-primary font-mono font-semibold">Zero-Downtime</span>
          </div>
        </motion.div>

        {/* 5. Bottom Left Node - Workflows & Automation */}
        <motion.div
          animate={{ y: [-15, 10, -15], x: [-5, 5, -5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[22%] left-[6%] hidden lg:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-accent/30 p-3 rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.18)]"
        >
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Workflow className="w-5 h-5 text-accent" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[11px] font-bold text-foreground block">Workflows n8n</span>
            <span className="text-[9px] text-accent font-mono">Automatisé 99.9%</span>
          </div>
        </motion.div>

        {/* 6. Bottom Right Node - Database Cluster */}
        <motion.div
          animate={{ y: [10, -12, 10], x: [5, -5, 5] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[20%] right-[6%] hidden lg:flex items-center space-x-3 bg-card/65 backdrop-blur-xl border border-primary/30 p-3 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.18)]"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[11px] font-bold text-foreground block">Cluster PostgreSQL</span>
            <span className="text-[9px] text-muted-foreground font-mono">Temps réel</span>
          </div>
        </motion.div>

        {/* Floating Mini Tech Pills */}
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[58%] left-[12%] hidden xl:flex items-center space-x-1.5 bg-card/50 border border-primary/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-primary font-bold shadow-md"
        >
          <Zap className="w-3 h-3 text-primary" />
          <span>RESTful API & GraphQL</span>
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[56%] right-[11%] hidden xl:flex items-center space-x-1.5 bg-card/50 border border-secondary/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-secondary font-bold shadow-md"
        >
          <Shield className="w-3 h-3 text-secondary" />
          <span>SLA 99.99% Garanti</span>
        </motion.div>

        <motion.div
          animate={{ y: [-6, 6, -6], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="absolute top-[26%] left-[18%] hidden 2xl:flex items-center space-x-1.5 bg-card/50 border border-accent/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-accent font-bold shadow-md"
        >
          <Code2 className="w-3 h-3 text-accent" />
          <span>MERN Stack & React Native</span>
        </motion.div>

        <motion.div
          animate={{ y: [-6, 6, -6], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="absolute top-[32%] right-[14%] hidden 2xl:flex items-center space-x-1.5 bg-card/50 border border-primary/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-primary font-bold shadow-md"
        >
          <CheckCircle2 className="w-3 h-3 text-primary" />
          <span>CI/CD Automatisé - Zero-Downtime</span>
        </motion.div>

      </motion.div>

      {/* Main Content with Scroll fade & scale */}
      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="space-y-10">

          {/* Main Heading and Badge */}
          <div className="space-y-6">


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, ...appleTransition }}
            >
              {/* Product-style G2G Tech Logo Header */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-[90px] h-[70px] md:w-28 md:h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl text-white md:text-5xl font-bold">G2G</span>
                </div>
                <span className="text-4xl md:text-5xl font-bold gradient-text">Tech</span>
              </div>

              {/* Tagline */}
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground mb-4">
                From <span className="text-primary font-medium">Good</span> to{" "}
                <span className="gradient-text font-black">Great</span> Technology
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.25, ...appleTransition }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Spécialisés en SaaS, consulting IT et développement sur mesure.
            </motion.p>
          </div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.35, ...appleTransition }}
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-2.5 bg-muted/25 border border-border/40 px-4 py-2 rounded-full backdrop-blur-sm hover:border-primary/40 transition-colors">
                <item.icon className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span className="text-foreground/90">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.45, ...appleTransition }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="btn-hero-primary text-base px-8 py-6 w-full sm:w-auto"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={() => scrollToSection("#services")}
              variant="outline"
              size="lg"
              className="btn-hero-secondary text-base px-8 py-6 w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4" />
              Découvrez nos services
            </Button>

            <Button
              onClick={() => scrollToSection("#product")}
              size="lg"
              className="btn-hero-primary bg-gradient-secondary text-base px-8 py-6 w-full sm:w-auto"
            >
              G2G ITSM
              <ArrowRight className="ml-2 h-4.5 w-4.5" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-7 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;