import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Target, Eye, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, Cloud, Database, Lock, Workflow, Server, TrendingUp, Cpu, Globe, Zap } from "lucide-react";

// 1. Mission Visual Console
const MissionVisual = () => {
  return (
    <div className="w-full h-full min-h-[320px] flex flex-col justify-between relative bg-card/70 border border-primary/30 backdrop-blur-xl rounded-[28px] overflow-hidden p-6 shadow-2xl">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs font-bold text-foreground">Mission Control Center</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-full">
          OBJECTIFS 100% ATTEINTS
        </span>
      </div>

      {/* Mission Core Grid */}
      <div className="space-y-3 my-4 relative z-10">
        <div className="bg-background/60 border border-primary/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-foreground">Solutions SaaS Multi-Tenant</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-primary">Déploiement Rapide</span>
        </div>

        <div className="bg-background/60 border border-secondary/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-xs font-medium text-foreground">Optimisation des Processus</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-secondary">Efficacité +60%</span>
        </div>

        <div className="bg-background/60 border border-emerald-500/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-foreground">Accompagnement Sur-Mesure</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-emerald-400">Consulting Certifié</span>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="text-[11px] text-muted-foreground text-center border-t border-border/40 pt-3 font-mono relative z-10">
        Mission : Transformer les défis en opportunités de croissance
      </div>
    </div>
  );
};

// 2. Vision Visual Console
const VisionVisual = () => {
  return (
    <div className="w-full h-full min-h-[320px] flex flex-col justify-between relative bg-card/70 border border-secondary/30 backdrop-blur-xl rounded-[28px] overflow-hidden p-6 shadow-2xl">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-secondary animate-bounce" />
          <span className="text-xs font-bold text-foreground">Vision & Roadmap 2030</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-secondary bg-secondary/10 border border-secondary/30 px-2 py-0.5 rounded-full">
          LEADERSHIP IT
        </span>
      </div>

      {/* Vision Core Grid */}
      <div className="space-y-3 my-4 relative z-10">
        <div className="bg-background/60 border border-secondary/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-xs font-medium text-foreground">Référence ESM & ITSM au Maroc</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-secondary">N°1 Conseil</span>
        </div>

        <div className="bg-background/60 border border-accent/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">Intégration de l'Intelligence Artificielle</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-accent">Smart Automation</span>
        </div>

        <div className="bg-background/60 border border-primary/20 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-foreground">Partenariats Stratégiques Durables</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-primary">Confiance 100%</span>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="text-[11px] text-muted-foreground text-center border-t border-border/40 pt-3 font-mono relative z-10">
        Vision : Façonner l'avenir du Service Management
      </div>
    </div>
  );
};

// 3. Partner Console Visual
const PartnerVisual = () => {
  return (
    <div className="w-full h-full min-h-[360px] flex flex-col justify-between relative bg-card/65 border border-primary/20 backdrop-blur-xl rounded-[32px] overflow-hidden p-6 shadow-2xl">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-border/50 pb-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[11px] font-mono text-muted-foreground ml-2">g2gtech-architecture.config</span>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono text-emerald-400 font-bold">100% ACTIF</span>
        </div>
      </div>

      {/* Central Interactive Tech Stack Mesh */}
      <div className="my-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-background/50 border border-primary/20 p-3.5 rounded-2xl backdrop-blur-md flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
            <Cloud className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">SaaS Multi-tenant</div>
            <div className="text-[10px] text-muted-foreground font-mono">Isolated Schemas</div>
          </div>
        </div>

        <div className="bg-background/50 border border-secondary/20 p-3.5 rounded-2xl backdrop-blur-md flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30">
            <Workflow className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">ServiceNow & ESM</div>
            <div className="text-[10px] text-muted-foreground font-mono">ITSM Workflows</div>
          </div>
        </div>

        <div className="bg-background/50 border border-accent/20 p-3.5 rounded-2xl backdrop-blur-md flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/30">
            <Database className="w-4 h-4 text-accent" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">High-Availability</div>
            <div className="text-[10px] text-muted-foreground font-mono">PostgreSQL & Redis</div>
          </div>
        </div>

        <div className="bg-background/50 border border-emerald-500/20 p-3.5 rounded-2xl backdrop-blur-md flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
            <Lock className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Sécurité ISO</div>
            <div className="text-[10px] text-muted-foreground font-mono">256-bit Encryption</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Stat Banner */}
      <div className="bg-muted/40 border border-border/60 p-3 rounded-2xl flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <Server className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Croissance Opérationnelle</span>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          +45% Efficacité
        </span>
      </div>
    </div>
  );
};

// 4. Excellence Visual
const ExcellenceVisual = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between relative bg-card/70 border border-emerald-500/30 backdrop-blur-xl rounded-[28px] overflow-hidden p-6 shadow-2xl">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-foreground">Audit de Qualité & SecOps</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          CONFORME 100%
        </span>
      </div>

      {/* Quality Grid */}
      <div className="space-y-3 my-4 relative z-10">
        {[
          { label: "Standards & Bonnes Pratiques ISO", value: "99.9%", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Tests Automatisés & CI/CD", value: "100% PASSED", icon: CheckCircle2, color: "text-primary" },
          { label: "Performance & Optimisation Web", value: "A+ Grade", icon: TrendingUp, color: "text-secondary" }
        ].map((item, idx) => (
          <div key={idx} className="bg-background/60 border border-border/60 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center space-x-2.5">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            </div>
            <span className={`text-[11px] font-mono font-bold ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Footer Tagline */}
      <div className="text-[11px] text-muted-foreground text-center border-t border-border/40 pt-3 font-mono relative z-10">
        Refactorisation continue & Architecture Zéro Bug
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"mission" | "excellence" | "vision">("mission");
  
  // Apple-like scroll parallax for image zoom
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.6], [0.5, 0.8, 1]);
  
  const appleTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding pb-0 scroll-offset bg-background relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={appleTransition}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-foreground">
            À Propos de <span className="gradient-text font-black">G2GTech</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Société IT marocaine spécialisée en développement SaaS, consulting IT et solutions sur mesure. Nous aidons les entreprises à transformer leurs défis technologiques en opportunités de croissance.
          </p>
        </motion.div>

        {/* Core Presentation Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mx-4 mb-28">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1, ...appleTransition }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Votre Partenaire Technologique de Confiance
            </h3>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Fondée avec la vision de transformer le paysage technologique marocain, 
                G2GTech combine expertise technique et approche consultative pour livrer 
                des solutions de Service Management qui dépassent les attentes de nos clients.
              </p>
              <p>
                Notre équipe d'experts maîtrise les technologies les plus avancées : 
                développement SaaS multi-tenant, intégration ServiceNow, solutions 
                cloud natives, et automatisation intelligente des processus métier.
              </p>
              <p>
                Nous croyons fermement que chaque entreprise mérite des solutions technologiques 
                qui accélèrent sa croissance opérationnelle et renforcent sa compétitivité sur le marché local et international.
              </p>
            </div>
          </motion.div>

          {/* Parallax Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={appleTransition}
            className="relative"
          >
            <PartnerVisual />
          </motion.div>
        </div>

        {/* Interactive Tabbed Bento Showcase */}
        <div className="mt-20 mb-28 max-w-5xl mx-auto px-4">
          {/* Tab buttons control */}
          <div className="flex justify-center bg-muted/50 p-1.5 rounded-2xl border border-border/60 max-w-md mx-auto mb-12">
            {[
              { id: "mission", label: "Mission", icon: Target },
              { id: "excellence", label: "Excellence", icon: Sparkles },
              { id: "vision", label: "Vision", icon: Eye }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isActive 
                      ? "bg-card text-foreground shadow-md border border-border/80" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="bento-card p-8 sm:p-12 relative overflow-hidden bg-card/60 backdrop-blur-md border border-border/80 rounded-[32px] min-h-[480px]">
            <AnimatePresence mode="wait">
              {activeTab === "mission" && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full"
                >
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Target className="h-5.5 w-5.5 text-primary" />
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight">Notre Mission</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Accompagner les entreprises dans leur transformation digitale avec des solutions SaaS innovantes et du consulting IT de haute qualité. Nous concevons des outils modernes pour relever vos défis opérationnels au quotidien.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Accompagnement de bout en bout sur mesure",
                        "Solutions SaaS multi-tenant prêtes à l'emploi",
                        "Consulting de haut niveau avec des experts certifiés"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 h-full min-h-[300px]">
                    <MissionVisual />
                  </div>
                </motion.div>
              )}

              {activeTab === "excellence" && (
                <motion.div
                  key="excellence"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full"
                >
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                      <Sparkles className="h-5.5 w-5.5 text-white animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight">Engagement d'Excellence</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Nous nous engageons à livrer des solutions modernes et performantes de qualité supérieure, en utilisant les meilleures pratiques du secteur. Chaque ligne de code et chaque processus sont optimisés pour votre croissance.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Meilleures pratiques et standards internationaux",
                        "Satisfaction client garantie à 100%",
                        "Recherche constante de performance et de robustesse"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 h-full min-h-[300px]">
                    <ExcellenceVisual />
                  </div>
                </motion.div>
              )}

              {activeTab === "vision" && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full"
                >
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20">
                      <Eye className="h-5.5 w-5.5 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight">Notre Vision</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Devenir le partenaire technologique de référence au Maroc pour les entreprises qui aspirent à l'excellence digitale et à la performance. Nous construisons le futur de la gestion des services IT.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Leadership de l'ESM et de l'ITSM au Maroc",
                        "Innovation continue et intégration de l'intelligence artificielle",
                        "Partenariats de confiance durables avec nos clients"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 h-full min-h-[300px]">
                    <VisionVisual />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;