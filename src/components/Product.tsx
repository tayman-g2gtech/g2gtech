import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Check,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  Globe,
  Smartphone,
  Database,
  CloudDownload,
  Play,
  Sliders,
  CheckCircle2,
  Cpu,
  Server,
  HardDrive,
  Lock,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ITSMConsoleSimulator from "./ITSMConsoleSimulator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

// 1. Operational Management Visual
const OperationalVisual = () => {
  const [urgency, setUrgency] = useState<"Basse" | "Moyenne" | "Haute">("Haute");
  const [timeLeft, setTimeLeft] = useState("00:54:12");

  useEffect(() => {
    const timer = setInterval(() => {
      const parts = timeLeft.split(":");
      let h = parseInt(parts[0]);
      let m = parseInt(parts[1]);
      let s = parseInt(parts[2]);
      s--;
      if (s < 0) {
        s = 59;
        m--;
        if (m < 0) {
          m = 59;
          h--;
        }
      }
      if (h >= 0) {
        setTimeLeft(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
        );
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-full font-bold">INC-402</span>
          <span className="text-[11px] text-muted-foreground">Créé il y a 8 min</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-semibold text-emerald-400">Actif</span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground">Alerte : VPN déconnecté pour l'équipe FinTech</h4>
        <p className="text-xs text-muted-foreground mt-1">Impact sur la passerelle de paiement de production.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="space-y-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">Urgence</label>
          <div className="flex space-x-1 bg-muted/60 p-0.5 rounded-md w-full">
            {(["Basse", "Moyenne", "Haute"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUrgency(u)}
                className={`text-[10px] flex-1 py-1 rounded transition-all ${urgency === u
                  ? "bg-background text-foreground shadow-sm font-medium"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 p-2.5 rounded-lg border border-border/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[9px] text-muted-foreground">
            <span>SLA Résolution</span>
            <span className="text-amber-400">Restant</span>
          </div>
          <div className="text-sm font-mono font-bold text-amber-400 mt-1">
            {timeLeft}
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-border/40">
        <div className="flex items-start space-x-2 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
          <div className="text-muted-foreground">
            <span className="text-foreground font-semibold">08:30</span> - Ticket généré par le moteur de supervision
          </div>
        </div>
        <div className="flex items-start space-x-2 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
          <div className="text-muted-foreground">
            <span className="text-foreground font-semibold">08:32</span> - Escalade auto vers le groupe <span className="text-primary font-medium">SecOps N2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Governance Visual
const GovernanceVisual = () => {
  const [changeStep, setChangeStep] = useState(1);
  const [isApproving, setIsApproving] = useState(false);

  const triggerApproval = () => {
    if (isApproving || changeStep >= 3) return;
    setIsApproving(true);
    setTimeout(() => {
      setChangeStep(2);
      setTimeout(() => {
        setChangeStep(3);
        setIsApproving(false);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md text-left">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono bg-secondary/15 border border-secondary/30 text-secondary-foreground px-2.5 py-0.5 rounded-full font-bold">CHG-109</span>
          <span className="text-[11px] text-muted-foreground">Type : Normal</span>
        </div>
        <button
          onClick={triggerApproval}
          disabled={isApproving || changeStep >= 3}
          className="text-[10px] font-bold bg-primary text-primary-foreground hover:bg-primary/95 disabled:bg-muted disabled:text-muted-foreground px-3 py-1 rounded-md flex items-center transition-all shadow-sm"
        >
          {isApproving ? (
            <>
              <span className="w-2.5 h-2.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-1.5" />
              Vote CAB...
            </>
          ) : changeStep >= 3 ? (
            "Approuvé & Planifié"
          ) : (
            "Simuler le CAB"
          )}
        </button>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground">Migration vers base de données AlloyDB Omni</h4>
        <p className="text-xs text-muted-foreground mt-1">Passage en production de la nouvelle plateforme de gestion.</p>
      </div>

      <div className="relative py-2 px-1">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-700"
          style={{ width: `${(changeStep / 3) * 100}%` }}
        />

        <div className="flex justify-between relative z-10">
          {[
            { l: "Brouillon", v: 0 },
            { l: "Soumis", v: 1 },
            { l: "Approbation CAB", v: 2 },
            { l: "Planifié", v: 3 }
          ].map((s) => {
            const isActive = changeStep === s.v;
            const isCompleted = changeStep > s.v;
            return (
              <div key={s.v} className="flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full border text-[9px] flex items-center justify-center font-bold transition-all ${isActive || isCompleted
                  ? "bg-primary border-primary text-primary-foreground scale-110"
                  : "bg-muted border-border text-muted-foreground"
                  }`}>
                  {isCompleted ? "✓" : s.v + 1}
                </div>
                <span className="text-[9px] mt-1 text-muted-foreground hidden sm:block">{s.l}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-border/40 text-[11px]">
        <div className="flex items-start space-x-2">
          <div className="w-3.5 h-3.5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mt-0.5 font-bold">✓</div>
          <div>
            <span className="text-foreground font-semibold">Plan d'implémentation :</span> Migration à chaud avec réplication.
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-3.5 h-3.5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mt-0.5 font-bold">✓</div>
          <div>
            <span className="text-foreground font-semibold">Plan de retour arrière :</span> Restauration instantanée snapshot ZFS.
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className={`w-3.5 h-3.5 rounded flex items-center justify-center mt-0.5 font-bold transition-all ${changeStep >= 3
            ? "bg-primary/10 border border-primary/20 text-primary"
            : "bg-muted border-border text-muted-foreground animate-pulse"
            }`}>
            {changeStep >= 3 ? "✓" : "•"}
          </div>
          <div>
            <span className="text-foreground font-semibold">Plan de test (UAT) :</span> Script de validation de requêtes complexes.
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. CMDB Visual
const CmdbVisual = () => {
  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md overflow-hidden relative text-left">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes cmdb-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .cmdb-dash-path {
          stroke-dasharray: 6 4;
          animation: cmdb-dash 2s linear infinite;
        }
      `}} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40" />

      <div className="flex items-center justify-between border-b border-border/60 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Explorateur de Dépendances CMDB</span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">Relations : 3 Actifs liés</span>
      </div>

      <div className="relative h-44 flex items-center justify-center z-10">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 200 68 L 100 128" stroke="hsl(var(--primary)/0.6)" strokeWidth="1.5" className="cmdb-dash-path" />
          <path d="M 200 68 L 200 128" stroke="hsl(var(--secondary)/0.6)" strokeWidth="1.5" className="cmdb-dash-path" />
          <path d="M 200 68 L 300 128" stroke="hsl(var(--accent)/0.6)" strokeWidth="1.5" className="cmdb-dash-path" />
        </svg>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg border border-primary/20">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="text-[9px] font-bold text-foreground mt-1 bg-muted/95 border border-border px-2 py-0.5 rounded-full whitespace-nowrap">VM-PROD-01 (Ubuntu)</span>
        </div>

        <div className="absolute bottom-2 left-4 flex flex-col items-center">
          <div className="w-9 h-9 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-md">
            <Cpu className="w-4.5 h-4.5 text-primary" />
          </div>
          <span className="text-[8px] font-medium text-muted-foreground mt-1">Application Web</span>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-9 h-9 rounded-xl bg-card border border-secondary/30 flex items-center justify-center shadow-md">
            <Database className="w-4.5 h-4.5 text-secondary" />
          </div>
          <span className="text-[8px] font-medium text-muted-foreground mt-1">AlloyDB Omni</span>
        </div>

        <div className="absolute bottom-2 right-4 flex flex-col items-center">
          <div className="w-9 h-9 rounded-xl bg-card border border-accent/30 flex items-center justify-center shadow-md">
            <HardDrive className="w-4.5 h-4.5 text-accent" />
          </div>
          <span className="text-[8px] font-medium text-muted-foreground mt-1">Stockage local (Morocco)</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/40 text-[9px] relative z-10">
        <div className="bg-muted/30 p-2 rounded-lg border border-border/50">
          <span className="text-muted-foreground block">CPU / RAM</span>
          <span className="font-semibold text-foreground">8 vCPU / 32 Go</span>
        </div>
        <div className="bg-muted/30 p-2 rounded-lg border border-border/50">
          <span className="text-muted-foreground block">Contrat</span>
          <span className="font-semibold text-emerald-400">Actif (SLA 99.9%)</span>
        </div>
        <div className="bg-muted/30 p-2 rounded-lg border border-border/50">
          <span className="text-muted-foreground block">Licence</span>
          <span className="font-semibold text-foreground">Entreprise</span>
        </div>
      </div>
    </div>
  );
};

// 4. Security Visual
const SecurityVisual = () => {
  return (
    <div className="w-full max-w-md p-6 bg-card/85 border border-border/80 rounded-2xl shadow-xl space-y-4 backdrop-blur-md relative overflow-hidden text-left">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[35px] pointer-events-none" />

      <div className="flex items-center justify-between border-b border-border/60 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-foreground">Souveraineté & Sécurité</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">Sécurisé</span>
      </div>

      <div className="space-y-3 pt-1 relative z-10">
        <div className="p-3 bg-muted/40 rounded-xl border border-border/60 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-primary" /> Hébergement Souverain
            </span>
            <span className="text-[10px] text-muted-foreground">Données localisées au Maroc (Loi 09-08)</span>
          </div>
          <div className="w-9 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-end px-0.5 cursor-not-allowed">
            <div className="w-4 h-4 rounded-full bg-primary shadow-sm" />
          </div>
        </div>

        <div className="p-3 bg-muted/40 rounded-xl border border-border/60 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-secondary" /> Isolation Multi-Tenant
            </span>
            <span className="text-[10px] text-muted-foreground">Schémas logiques de base de données isolés</span>
          </div>
          <div className="w-9 h-5 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-end px-0.5 cursor-not-allowed">
            <div className="w-4 h-4 rounded-full bg-secondary shadow-sm" />
          </div>
        </div>

        <div className="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Conformité Réglementaire</span>
            <span className="text-[9px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">RGPD, CNDP</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Contrôle d'accès RBAC :</span>
            <span className="text-foreground font-semibold">Roles & Permissions d'accès</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const features = [
    {
      icon: Zap,
      title: "Gestion Opérationnelle (ITIL v4)",
      description: "Incidents, demandes de service, suivi des SLA avec alertes et escalades automatisées.",
      visual: <OperationalVisual />
    },
    {
      icon: Sliders,
      title: "Gouvernance & Mises en Production",
      description: "Base d'erreurs connues (KEDB), comités CAB, plans d'implémentation, de retour arrière et de test.",
      visual: <GovernanceVisual />
    },
    {
      icon: Database,
      title: "Gestion des Actifs IT (CMDB)",
      description: "Inventaire matériel/logiciel, suivi des relations entre actifs, contrats et licences.",
      visual: <CmdbVisual />
    },
    {
      icon: Shield,
      title: "Souveraineté & Sécurité",
      description: "Hébergement cloud local (Maroc) ou On-Premise, conformité CNDP (Loi 09-08), isolation multi-tenant et rôles RBAC.",
      visual: <SecurityVisual />
    }
  ];


  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for small teams getting started with ITSM",
      features: [
        "Up to 5 users",
        "Basic incident management",
        "Email notifications",
        "Community support",
        "1 GB storage"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per user/month",
      description: "Advanced features for growing organizations",
      features: [
        "Unlimited users",
        "Full ITSM suite",
        "Advanced analytics",
        "24/7 priority support",
        "100 GB storage",
        "Custom workflows",
        "SLA management",
        "API access"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large enterprises",
      features: [
        "Everything in Professional",
        "Dedicated support manager",
        "Custom integrations",
        "Advanced security features",
        "Unlimited storage",
        "On-premise deployment",
        "Training & onboarding",
        "99.9% SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 4), 3);
    setActiveIndex(index);
  });

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollableHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = rect.top + scrollTop + (scrollableHeight * (index / 3));

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="product" className="section-padding scroll-offset">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-[90px] h-[70px] md:w-28 md:h-20 bg-gradient-primary rounded-3xl flex items-center justify-center">
              <span className="text-4xl text-white md:text-5xl font-bold">G2G</span>
            </div>
            <span className="text-4xl md:text-5xl font-bold gradient-text">ITSM</span>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez la nouvelle génération de gestion des services informatiques (ITSM) avec notre plateforme complète et multi-tenant conçue pour les entreprises modernes.
          </p>
        </motion.div>

        {/* Features Scroll (Desktop) & List (Mobile) */}
        {/* Mobile View */}
        <div className="block lg:hidden space-y-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bento-card p-6 flex flex-col items-center text-center space-y-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{feature.description}</p>
              </div>
              <div className="w-full flex justify-center">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative mb-20" ref={containerRef}>
          <div className="h-[320vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-12 items-center">
                {/* Left side: Text descriptions */}
                <div className="col-span-5 space-y-6">
                  {features.map((feature, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <div
                        key={index}
                        onClick={() => scrollToStep(index)}
                        className={`bento-card p-6 cursor-pointer transition-all duration-500 flex items-start space-x-4 border ${isActive
                          ? "border-primary/50 bg-card/90 shadow-[0_0_25px_rgba(59,130,246,0.15)] opacity-100 scale-[1.02]"
                          : "border-border/40 bg-card/10 opacity-25 hover:opacity-40 scale-100"
                          }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isActive ? "bg-gradient-primary text-white" : "bg-muted text-muted-foreground"
                          }`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h3 className={`text-base font-bold transition-all ${isActive ? "text-foreground" : "text-muted-foreground"
                            }`}>{feature.title}</h3>
                          <p className="text-muted-foreground text-xs leading-relaxed mt-2">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right side: Mockup visual with AnimatePresence */}
                <div className="col-span-7 flex justify-center items-center min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 30, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -30, scale: 0.96 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full flex justify-center"
                    >
                      {features[activeIndex].visual}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Platform Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.15 }}
          className="bento-card p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">
                Découvrez <span className="gradient-text">G2G ITSM</span> en action
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Découvrez comment la plateforme ITSM de G2GTech peut transformer votre prestation de services grâce à une automatisation intelligente, des rapports complets et des intégrations transparentes.
              </p>
              <div className="space-y-3">
                {[
                  "Conformité ITIL v4 complète",
                  "Sécurité, conformité et personnalisation multi-tenant",
                  "Gestion des incidents, problèmes et changements",
                  "Catalogue de services et demandes utilisateur",
                  "Gestion des actifs et configuration",
                  "Suivi des SLA et automatisation des workflows",
                  "Rapports et tableaux de bord personnalisés",
                  "Support 24/7 avec SLA garanties"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  onClick={() => window.open("https://g2gitsm.com/signup", "_blank")}
                  className="btn-hero-primary transition-all text-lg px-6 py-4 w-full sm:w-auto"
                >
                  commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="hover:scale-105 transition-all hover:bg-gradient-primary hover:text-white text-lg px-6 py-4 w-full sm:w-auto"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Regarder la visite vidéo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-card border-border text-foreground">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">Visite guidée de G2G ITSM</DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        Découvrez comment notre plateforme optimise vos services informatiques.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-card to-muted/50 flex flex-col items-center justify-center gap-6 p-8">
                      {/* Demo preview — replace src below with your real YouTube video ID once published */}
                      {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Visite guidée G2G ITSM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
                      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                        <Play className="w-7 h-7 text-primary ml-1" />
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">Démo disponible sur demande</h4>
                        <p className="text-sm text-muted-foreground max-w-sm">
                          Notre équipe vous présente G2G ITSM en live et répond à vos questions en temps réel.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() => window.open("https://g2gitsm.com/signup", "_blank")}
                          className="btn-hero-primary px-6 py-2 text-sm rounded-full"
                        >
                          Essai gratuit
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            const el = document.querySelector("#contact");
                            if (el) { el.scrollIntoView({ behavior: "smooth" }); }
                          }}
                          className="px-6 py-2 text-sm rounded-full"
                        >
                          Planifier une démo live
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Besoin d'un déploiement On-Premise ou Grand Compte ?{" "}
                <button onClick={scrollToContact} className="text-primary hover:underline font-medium focus:outline-none">
                  Contactez-nous
                </button>
              </p>
            </div>

            <div className="w-full flex items-center justify-center lg:mt-0">
              <ITSMConsoleSimulator />
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Flexible pricing options to match your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative glass-card rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? 'btn-hero-primary' : 'btn-hero-secondary'}`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Product;