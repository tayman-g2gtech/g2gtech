import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Settings,
  Code2,
  Workflow,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Cpu,
  Server,
  HardDrive,
  Lock,
  Landmark,
  Network,
  Code,
  Laptop,
  FileText,
  Smartphone,
  Play,
  Loader2,
  Check
} from "lucide-react";

// 1. SaaS Development Visual
const SaaSVisual = () => {
  const [tenantName, setTenantName] = useState("entreprise-demo");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionStep, setProvisionStep] = useState(0);

  const startProvision = () => {
    if (isProvisioning || provisionStep === 3) return;
    setIsProvisioning(true);
    setProvisionStep(1);

    setTimeout(() => {
      setProvisionStep(2);
      setTimeout(() => {
        setProvisionStep(3);
        setIsProvisioning(false);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Cloud className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Gestionnaire Multi-Tenant SaaS</span>
        </div>
        <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded font-mono font-bold">Cloud-Native</span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">Sous-domaine client</label>
          <div className="flex items-center bg-muted/50 border border-border/60 rounded-lg p-2 text-xs">
            <input
              type="text"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value.toLowerCase().replace(/\s+/g, ""))}
              disabled={isProvisioning || provisionStep === 3}
              className="bg-transparent border-none text-foreground outline-none w-2/3"
            />
            <span className="text-muted-foreground w-1/3 text-right">.g2gtech.ma</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-[10px]">
          <div className="bg-muted/30 p-2 rounded border border-border/50">
            <span className="text-muted-foreground block">Base de données</span>
            <span className="font-semibold text-foreground">Schéma PostgreSQL Isolé</span>
          </div>
          <div className="bg-muted/30 p-2 rounded border border-border/50">
            <span className="text-muted-foreground block">Région Cloud</span>
            <span className="font-semibold text-primary">Maroc (Souverain)</span>
          </div>
        </div>

        <button
          onClick={startProvision}
          disabled={isProvisioning || provisionStep === 3}
          className="w-full text-xs py-2 px-3 font-semibold bg-primary text-primary-foreground hover:bg-primary/95 disabled:bg-muted disabled:text-muted-foreground rounded-lg transition-all flex items-center justify-center"
        >
          {isProvisioning ? (
            <>
              <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />
              Provisionnement du Tenant...
            </>
          ) : provisionStep === 3 ? (
            "SaaS Tenant configuré"
          ) : (
            "Lancer le Provisionnement"
          )}
        </button>
      </div>

      {provisionStep > 0 && (
        <div className="space-y-2 pt-2 border-t border-border/40 text-[11px]">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">✓</div>
            <span className="text-muted-foreground">Création logique du schéma de base de données</span>
          </div>
          {provisionStep >= 2 && (
            <div className="flex items-center space-x-2">
              <div className="w-3.5 h-3.5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">✓</div>
              <span className="text-muted-foreground">Déploiement des clés SSL / DNS</span>
            </div>
          )}
          {provisionStep >= 3 && (
            <div className="flex items-center space-x-2">
              <div className="w-3.5 h-3.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</div>
              <span className="text-emerald-400 font-semibold">Tenant configuré avec succès !</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// 2. ESM Consulting Visual
const EsmVisual = () => {
  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Settings className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Flux de Routage ESM (ITIL)</span>
        </div>
        <span className="text-[9px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-mono font-bold">ServiceNow / Freshservice</span>
      </div>

      <div className="relative h-44 flex items-center justify-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes esm-flow {
            to {
              stroke-dashoffset: -20;
            }
          }
          .esm-flow-path {
            stroke-dasharray: 6 4;
            animation: esm-flow 1.5s linear infinite;
          }
        `}} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 60 88 L 170 88" stroke="hsl(var(--primary)/0.6)" strokeWidth="1.5" className="esm-flow-path" />
          <path d="M 230 88 L 340 88" stroke="hsl(var(--secondary)/0.6)" strokeWidth="1.5" className="esm-flow-path" />
        </svg>

        <div className="absolute left-2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-md">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[8px] font-medium text-muted-foreground mt-1.5 bg-muted px-1.5 py-0.5 rounded border border-border whitespace-nowrap">Ticket ESM Créé</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg border border-primary/20 animate-pulse">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-[8px] font-bold text-foreground mt-1.5 bg-muted px-1.5 py-0.5 rounded border border-border whitespace-nowrap">Règles d'Escalade</span>
        </div>

        <div className="absolute right-2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-card border border-secondary/30 flex items-center justify-center shadow-md">
            <Network className="w-5 h-5 text-secondary" />
          </div>
          <span className="text-[8px] font-medium text-muted-foreground mt-1.5 bg-muted px-1.5 py-0.5 rounded border border-border whitespace-nowrap">Technicien N2</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40 text-[10px]">
        <div className="bg-muted/30 p-2 rounded border border-border/50 text-[10px]">
          <span className="text-muted-foreground block">Module ITIL</span>
          <span className="font-semibold text-foreground">Incident / Request Management</span>
        </div>
        <div className="bg-muted/30 p-2 rounded border border-border/50 text-[10px]">
          <span className="text-muted-foreground block">Optimisation SLA</span>
          <span className="font-semibold text-emerald-400">Temps de résolution -35%</span>
        </div>
      </div>
    </div>
  );
};

// 3. Custom Dev Visual
const CustomVisual = () => {
  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Aperçu du Code et Rendu Mobile</span>
        </div>
        <span className="text-[9px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded font-mono font-bold">MERN / React Native</span>
      </div>

      <div className="grid grid-cols-12 gap-4 h-40">
        {/* Code Editor Mock */}
        <div className="col-span-7 bg-muted/60 border border-border/60 rounded-xl p-3 font-mono text-[8px] text-muted-foreground overflow-hidden flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-secondary block">import <span className="text-foreground">React</span> from <span className="text-emerald-400">"react"</span>;</span>
            <span className="text-secondary block">const <span className="text-foreground">Widget</span> = () =&gt; &#123;</span>
            <span className="text-muted-foreground block pl-3">return (</span>
            <span className="text-primary block pl-6">&lt;<span className="text-primary-foreground font-semibold">Card</span> className=<span className="text-emerald-400">"bg-primary"</span>&gt;</span>
            <span className="text-foreground block pl-9">&lt;<span className="text-primary-foreground font-semibold">Title</span>&gt;G2G CRM&lt;/<span className="text-primary-foreground font-semibold">Title</span>&gt;</span>
            <span className="text-primary block pl-6">&lt;/<span className="text-primary-foreground font-semibold">Card</span>&gt;</span>
            <span className="text-muted-foreground block pl-3">);</span>
            <span className="text-secondary block">&#125;;</span>
          </div>
          <span className="text-accent text-[7px] text-right font-bold block">✓ Compilation réussie</span>
        </div>

        {/* Smartphone Simulator */}
        <div className="col-span-5 border-2 border-border bg-background rounded-2xl p-1.5 flex flex-col items-center justify-between shadow-inner relative">
          {/* Phone notch */}
          <div className="w-8 h-2 bg-border rounded-full absolute -top-0.5 left-1/2 -translate-x-1/2" />

          <div className="w-full h-full bg-muted/20 rounded-xl p-1.5 flex flex-col justify-between relative overflow-hidden">
            {/* Dashboard representation */}
            <div className="space-y-1 mt-1">
              <div className="w-6 h-1.5 bg-primary/20 rounded" />
              <div className="w-full h-10 bg-gradient-primary rounded-lg p-1.5 flex flex-col justify-between">
                <span className="text-[7px] font-bold text-white leading-none">G2G CRM</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[6px] text-white/80">Revenu</span>
                  <span className="text-[8px] font-bold text-white font-mono">+12%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mb-1">
              <div className="h-6 bg-card border border-border/60 rounded flex items-center justify-center">
                <span className="text-[6px] text-muted-foreground">Active</span>
              </div>
              <div className="h-6 bg-card border border-border/60 rounded flex items-center justify-center">
                <span className="text-[6px] text-muted-foreground">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t border-border/40">
        <span>Performance UI : 99% sur Mobile</span>
        <span>Framework : React / Node</span>
      </div>
    </div>
  );
};

// 4. Automation & Workflows Visual
const AutomationVisual = () => {
  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <Workflow className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Éditeur de Workflows Automatiques</span>
        </div>
        <span className="text-[9px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded font-mono font-bold">n8n / API</span>
      </div>

      {/* n8n diagram simulator */}
      <div className="relative h-44 flex items-center justify-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes workflow-flow {
            to {
              stroke-dashoffset: -20;
            }
          }
          .workflow-path {
            stroke-dasharray: 6 4;
            animation: workflow-flow 1.2s linear infinite;
          }
        `}} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 60 68 L 140 128" stroke="hsl(var(--primary)/0.6)" strokeWidth="1.5" className="workflow-path" />
          <path d="M 60 148 L 140 128" stroke="hsl(var(--primary)/0.6)" strokeWidth="1.5" className="workflow-path" />
          <path d="M 200 128 L 290 128" stroke="hsl(var(--secondary)/0.6)" strokeWidth="1.5" className="workflow-path" />
        </svg>

        {/* Input Trigger 1 */}
        <div className="absolute top-2 left-2 flex flex-col items-center">
          <div className="w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center shadow">
            <Globe className="w-4 h-4 text-primary" />
          </div>
          <span className="text-[7px] text-muted-foreground mt-1">Webhook</span>
        </div>

        {/* Input Trigger 2 */}
        <div className="absolute bottom-6 left-2 flex flex-col items-center">
          <div className="w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center shadow">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <span className="text-[7px] text-muted-foreground mt-1">Nouveau Mail</span>
        </div>

        {/* Processing Node (n8n node) */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg border border-primary/20">
            <Workflow className="w-6 h-6 text-white" />
          </div>
          <span className="text-[8px] font-bold text-foreground mt-1.5 bg-muted px-1.5 py-0.5 rounded border border-border whitespace-nowrap">Analyse IA & Extraction</span>
        </div>

        {/* Output Action Node */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-card border border-emerald-500/30 flex items-center justify-center shadow-md animate-pulse">
            <Zap className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-[8px] font-semibold text-emerald-400 mt-1.5 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded whitespace-nowrap">Ticket Créé & SMS</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t border-border/40">
        <span>Taux de réussite : 99.98%</span>
        <span>Intégrations : Slack, n8n, API externes</span>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: "service-saas",
      icon: Cloud,
      title: "Développement SaaS",
      description: "Création de solutions SaaS multi-tenant scalables avec une architecture cloud-native. Spécialisation en ESM et plateformes métiers sur mesure. Du design à la mise en production, nous assurons performance, sécurité et évolutivité.",
      features: ["Multi-tenant", "Cloud Native", "API RESTful", "Sécurité avancée", "DevOps & CI/CD", "Scalabilité", "Modern UI/UX"],
      colSpan: "lg:col-span-2",
      badge: "SaaS & Scale",
      visual: <SaaSVisual />
    },
    {
      id: "service-esm",
      icon: Settings,
      title: "Conseil expert en ESM",
      description: "Expertise sur ITSM, ITAM, ITOM, CSM et HRSD, avec ServiceNow, Freshworks et autres plateformes. Accompagnement dans l’optimisation de vos processus métiers.",
      features: ["ServiceNow", "Freshworks CRM", "ITSM", "ITAM", "HRSD"],
      colSpan: "lg:col-span-1",
      badge: "Consulting",
      visual: <EsmVisual />
    },
    {
      id: "service-custom",
      icon: Code2,
      title: "Développement Sur Mesure",
      description: "Applications web et mobile de haute performance avec technologies modernes. MERN Stack, Responsive design et hébergement managé.",
      features: ["MERN Stack", "React Native", "Responsive Apps", "API RESTful"],
      colSpan: "lg:col-span-1",
      badge: "Custom Apps",
      visual: <CustomVisual />
    },
    {
      id: "service-automation",
      icon: Workflow,
      title: "Automatisation & Workflows",
      description: "Automatisation complète des processus métier avec n8n, workflows intelligents, intégrations d'API robustes et scripts d'optimisation système.",
      features: ["n8n Workflows", "DevOps Integrations", "CI/CD Pipelines", "Automatisation"],
      colSpan: "lg:col-span-2",
      badge: "Automation",
      visual: <AutomationVisual />
    }
  ];

  const appleTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  const containerRef = useRef<HTMLDivElement>(null);
  const maxTranslateRef = useRef(0);

  useEffect(() => {
    const compute = () => {
      if (!containerRef.current) return;
      const vw = window.innerWidth;
      // The sticky div is inside max-w-7xl mx-auto, so its actual width is
      // min(viewportWidth, 1280px) — NOT the full viewport width.
      // Using containerRef.offsetWidth gives the real clipping boundary.
      const containerW = containerRef.current.offsetWidth;
      const n = services.length;
      const cardW = 600;         // w-[600px] on each card
      const gap = 32;            // space-x-8 = 2rem = 32px
      const sidePad = vw * 0.1;  // px-[10vw] uses viewport units

      // Total rail content width
      const totalW = sidePad + n * cardW + (n - 1) * gap + sidePad;

      // Translate until the right 10vw padding is visible on the right edge
      // of the container (not the viewport).
      maxTranslateRef.current = Math.max(0, totalW - containerW);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [services.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Function form: reads the ref on every scroll tick — always up to date
  const translateX = useTransform(scrollYProgress, (v) => v * -maxTranslateRef.current);

  return (
    <section id="services" className="section-padding scroll-offset bg-gradient-sub">
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
            Nos <span className="gradient-text font-black">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions technologiques complètes pour accompagner votre croissance et optimiser vos processus métier.
          </p>
        </motion.div>

        {/* Services Scroll (Desktop) & List (Mobile) */}
        {/* Mobile View */}
        <div className="block lg:hidden space-y-8 px-4 mb-20">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="bento-card p-6 flex flex-col items-center text-center space-y-6">
              <div className="flex items-center justify-between w-full">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/60 border border-border px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-0.5 text-xs font-semibold text-muted-foreground border border-border bg-muted/30 rounded-lg"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-center">
                {service.visual}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal Scroll Carousel */}
        <div className="hidden lg:block relative" id="services-sticky-container" ref={containerRef}>
          <div className="h-[360vh]">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
              <motion.div style={{ x: translateX }} className="flex space-x-8 px-[10vw]">
                {services.map((service, index) => (
                  <div
                    key={index}
                    id={`desktop-${service.id}`}
                    className="w-[600px] min-h-[580px] flex-shrink-0 bento-card p-10 flex flex-col justify-between bg-card/65 backdrop-blur-md border border-border/80 rounded-[32px] shadow-2xl relative"
                  >
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 rounded-full blur-[40px] pointer-events-none" />

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/80 border border-border px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      <div className="space-y-3 text-left">
                        <h3 className="text-3xl font-extrabold tracking-tight text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Integrated Mockup/Visual */}
                    <div className="my-6 w-full flex justify-center">
                      <div className="scale-95 origin-center w-full">
                        {service.visual}
                      </div>
                    </div>

                    {/* Features at the bottom */}
                    <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-semibold text-muted-foreground border border-border/80 bg-muted/30 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>


        {/* Apple Style CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={appleTransition}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mt-28"
        >
          <div className="bento-card p-10 sm:p-16 max-w-4xl mx-auto flex flex-col items-center justify-center bg-card/50">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight text-foreground">
              Prêt à <span className="gradient-text font-black">Transformer</span> votre Entreprise?
            </h3>
            <p className="text-muted-foreground text-base mb-8 max-w-2xl leading-relaxed">
              Parlons de votre projet et découvrons comment G2GTech peut accélérer votre croissance avec des solutions technologiques de pointe sur mesure.
            </p>
            <div className="flex justify-center w-full">
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-hero-primary flex gap-2 items-center justify-center px-8 py-6 text-base rounded-full"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="text-muted-foreground text-xs mt-6 tracking-wide font-medium uppercase flex items-center gap-4">
              <span>Consultation gratuite</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span>Devis personnalisé</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span>Support inclus</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;