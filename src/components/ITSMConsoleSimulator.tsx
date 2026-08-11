import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertCircle, 
  Calendar, 
  List, 
  BarChart3, 
  Play, 
  CheckCircle2, 
  Clock, 
  Laptop, 
  Network, 
  Key, 
  ArrowRight, 
  Loader2, 
  User, 
  ShieldAlert, 
  Check, 
  RefreshCw,
  FileText
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from "recharts";

// Data for Recharts
const reportsData = [
  { name: "Lun", sla: 97.8, volume: 24 },
  { name: "Mar", sla: 98.2, volume: 30 },
  { name: "Mer", sla: 96.5, volume: 28 },
  { name: "Jeu", sla: 99.1, volume: 35 },
  { name: "Ven", sla: 98.4, volume: 22 },
  { name: "Sam", sla: 100.0, volume: 8 },
  { name: "Dim", sla: 100.0, volume: 5 },
];

export default function ITSMConsoleSimulator() {
  const [activeTab, setActiveTab] = useState("incidents");

  // Incident state
  const [urgency, setUrgency] = useState<"Basse" | "Moyenne" | "Haute">("Moyenne");
  const [impact, setImpact] = useState<"Bas" | "Moyen" | "Élevé">("Moyen");
  const [slaSeconds, setSlaSeconds] = useState(5040); // 1h 24m = 5040s
  const [maxSlaSeconds, setMaxSlaSeconds] = useState(14400); // 4h = 14400s

  // Priority matrix mapping
  const getPriority = (urg: typeof urgency, imp: typeof impact) => {
    if (urg === "Basse" && imp === "Bas") {
      return { name: "Basse", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
    }
    if (urg === "Basse" && imp === "Moyen") {
      return { name: "Basse", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
    }
    if (urg === "Moyenne" && imp === "Bas") {
      return { name: "Basse", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
    }
    if (urg === "Basse" && imp === "Élevé") {
      return { name: "Moyenne", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
    }
    if (urg === "Moyenne" && imp === "Moyen") {
      return { name: "Moyenne", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
    }
    if (urg === "Haute" && imp === "Bas") {
      return { name: "Moyenne", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
    }
    if (urg === "Moyenne" && imp === "Élevé") {
      return { name: "Haute", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" };
    }
    if (urg === "Haute" && imp === "Moyen") {
      return { name: "Haute", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" };
    }
    // Haute + Élevé
    return { name: "Critique", color: "bg-red-500/20 text-red-400 border-red-500/30 animate-pulse font-bold" };
  };

  const priority = getPriority(urgency, impact);

  // Sync SLA timer with priority
  useEffect(() => {
    switch (priority.name) {
      case "Critique":
        setSlaSeconds(900); // 15m
        setMaxSlaSeconds(1800); // 30m
        break;
      case "Haute":
        setSlaSeconds(5040); // 1h 24m
        setMaxSlaSeconds(14400); // 4h
        break;
      case "Moyenne":
        setSlaSeconds(15300); // 4h 15m
        setMaxSlaSeconds(28800); // 8h
        break;
      case "Basse":
      default:
        setSlaSeconds(66600); // 18h 30m
        setMaxSlaSeconds(86400); // 24h
        break;
    }
  }, [priority.name]);

  // Live timer for SLA
  useEffect(() => {
    const timer = setInterval(() => {
      setSlaSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSla = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const getProgressBarColor = (name: string) => {
    switch (name) {
      case "Critique": return "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]";
      case "Haute": return "bg-amber-500";
      case "Moyenne": return "bg-blue-500";
      case "Basse": return "bg-emerald-500";
      default: return "bg-primary";
    }
  };

  const getPriorityTextColor = (name: string) => {
    switch (name) {
      case "Critique": return "text-red-400";
      case "Haute": return "text-amber-400";
      case "Moyenne": return "text-blue-400";
      case "Basse": return "text-emerald-400";
      default: return "text-primary";
    }
  };

  // Change management workflow state
  // Steps: 0: Brouillon, 1: Soumis, 2: Approuvé (CAB), 3: Planifié, 4: Clos
  const [changeStep, setChangeStep] = useState(1);
  const [isSimulatingCab, setIsSimulatingCab] = useState(false);

  const handleSimulateCab = () => {
    if (isSimulatingCab) return;
    setIsSimulatingCab(true);
    setChangeStep(1);

    // Timeline simulation: Submitted -> CAB approved after 1.2s -> Scheduled after 2.8s
    setTimeout(() => {
      setChangeStep(2);
      toast.info("CAB : Avis favorable émis pour CHG-109.");
    }, 1200);

    setTimeout(() => {
      setChangeStep(3);
      setIsSimulatingCab(false);
      toast.success("Succès : Le changement CHG-109 est planifié avec succès !");
    }, 2800);
  };

  const changeWorkflowSteps = [
    { label: "Brouillon", val: 0 },
    { label: "Soumis", val: 1 },
    { label: "Approuvé", val: 2 },
    { label: "Planifié", val: 3 },
    { label: "Clos", val: 4 }
  ];

  // Service Catalogue state
  const [orderingItem, setOrderingItem] = useState<string | null>(null);

  const handleOrder = (itemName: string) => {
    setOrderingItem(itemName);
    setTimeout(() => {
      setOrderingItem(null);
      toast.success(`Demande créée : Votre ticket pour "${itemName}" a été initialisé.`);
    }, 1200);
  };

  const catalogueItems = [
    {
      id: "SR-01",
      name: "MacBook Pro M3",
      desc: "Configuration standard (16Go RAM, 512Go SSD).",
      sla: "3 jours ouvrés",
      icon: Laptop
    },
    {
      id: "SR-02",
      name: "Profil VPN SecOps",
      desc: "Accès réseau à distance isolé et conforme CNDP.",
      sla: "2 heures",
      icon: Network
    },
    {
      id: "SR-03",
      name: "Licence Logicielle",
      desc: "Suite CAO ou logiciels bureautiques approuvés.",
      sla: "24 heures",
      icon: Key
    }
  ];

  return (
    <div className="w-full glass-card rounded-2xl border border-border shadow-2xl overflow-hidden text-left bg-card/45 backdrop-blur-md">
      {/* macOS style Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-600 transition-colors" />
        </div>
        <div className="text-xs font-semibold text-muted-foreground flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Console G2G ITSM (Tenant de démo)</span>
        </div>
        <div className="w-12" /> {/* spacer */}
      </div>

      <div className="p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 gap-1 bg-muted/80 p-1 mb-6 rounded-lg">
            <TabsTrigger value="incidents" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
              Incidents
            </TabsTrigger>
            <TabsTrigger value="changements" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
              Changements
            </TabsTrigger>
            <TabsTrigger value="catalogue" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
              Catalogue
            </TabsTrigger>
            <TabsTrigger value="rapports" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
              Rapports
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: INCIDENTS */}
          <TabsContent value="incidents" className="space-y-4 outline-none">
            <div className="bg-muted/40 p-4 rounded-xl border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3 mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-[10px] font-mono border-border text-muted-foreground bg-muted/60">INC-402</Badge>
                    <span className="text-xs text-muted-foreground">Créé il y a 12m</span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground mt-1">VPN déconnecté pour le service Finance</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">Priorité :</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border ${priority.color}`}>
                    {priority.name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Selectors */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Urgence</label>
                    <div className="flex space-x-1.5 bg-muted/60 p-1 rounded-md max-w-fit">
                      {(["Basse", "Moyenne", "Haute"] as const).map((u) => (
                        <button
                          key={u}
                          onClick={() => setUrgency(u)}
                          className={`text-xs px-3 py-1 rounded transition-all ${
                            urgency === u 
                              ? "bg-background text-foreground shadow-sm font-medium" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Impact</label>
                    <div className="flex space-x-1.5 bg-muted/60 p-1 rounded-md max-w-fit">
                      {(["Bas", "Moyen", "Élevé"] as const).map((i) => (
                        <button
                          key={i}
                          onClick={() => setImpact(i)}
                          className={`text-xs px-3 py-1 rounded transition-all ${
                            impact === i 
                              ? "bg-background text-foreground shadow-sm font-medium" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SLA display */}
                <div className="bg-card/40 p-4 rounded-lg border border-border/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> SLA Résolution</span>
                    <span className="text-emerald-400 font-medium">98.4% respecté</span>
                  </div>
                  <div className="py-2">
                    <div className={`text-xl sm:text-2xl font-mono font-bold tracking-wider transition-colors duration-300 ${getPriorityTextColor(priority.name)}`}>
                      {formatSla(slaSeconds)}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">Calculé selon la matrice d'escalade automatique ITIL v4</p>
                  </div>
                  <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
                    <div className={`h-full transition-all duration-1000 ${getProgressBarColor(priority.name)}`} style={{ width: `${(slaSeconds / maxSlaSeconds) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
              <span className="flex items-center gap-1"><User className="w-3 h-3" /> Assigné à : Support N2</span>
              <span>Propulsé par la logique ITIL v4</span>
            </div>
          </TabsContent>

          {/* TAB 2: CHANGEMENTS */}
          <TabsContent value="changements" className="space-y-4 outline-none">
            <div className="bg-muted/40 p-4 rounded-xl border border-border">
              <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-[10px] font-mono border-border text-muted-foreground bg-muted/60">CHG-109</Badge>
                    <span className="text-xs text-muted-foreground">Type : Normal</span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground mt-1">Migration vers AlloyDB Omni</h4>
                </div>
                <Button 
                  size="sm" 
                  onClick={handleSimulateCab}
                  disabled={isSimulatingCab}
                  className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-semibold"
                >
                  {isSimulatingCab ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                      Approbation...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 mr-1.5" />
                      Simuler le CAB
                    </>
                  )}
                </Button>
              </div>

              {/* Progress workflow with framer-motion */}
              <div className="relative py-4 px-2 mb-6">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0" />
                <div 
                  className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-700" 
                  style={{ width: `${(changeStep / 4) * 100}%` }}
                />
                
                <div className="flex justify-between relative z-10">
                  {changeWorkflowSteps.map((step) => {
                    const isActive = changeStep === step.val;
                    const isCompleted = changeStep > step.val;
                    return (
                      <div key={step.val} className="flex flex-col items-center">
                        <motion.div 
                          animate={{ 
                            scale: isActive ? 1.25 : 1,
                            backgroundColor: isActive 
                              ? "var(--primary)" 
                              : isCompleted 
                                ? "hsl(var(--primary) / 0.8)" 
                                : "hsl(var(--muted))" 
                          }}
                          className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                            isActive || isCompleted 
                              ? "bg-primary border-primary text-primary-foreground" 
                              : "bg-muted border-border text-muted-foreground"
                          }`}
                        >
                          {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.val + 1}
                        </motion.div>
                        <span className={`text-[10px] mt-2 whitespace-nowrap hidden sm:block ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Simulation Content Cards */}
              <AnimatePresence mode="wait">
                {changeStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-card/65 p-3 rounded-lg border border-border/80"
                  >
                    <div className="space-y-1 border-b md:border-b-0 md:border-r border-border/60 pb-2 md:pb-0 md:pr-3">
                      <div className="font-semibold text-primary flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> Plan d'implémentation
                      </div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Migration de schéma en mode non-bloquant, réplication de données active et basculement à chaud.
                      </p>
                    </div>

                    <div className="space-y-1 border-b md:border-b-0 md:border-r border-border/60 py-2 md:py-0 md:px-3">
                      <div className="font-semibold text-amber-400 flex items-center gap-1">
                        <RefreshCw className="w-3.5 h-3.5" /> Plan de retour arrière
                      </div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Restauration immédiate à partir du snapshot stocké localement sur stockage souverain marocain.
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 md:pt-0 md:pl-3">
                      <div className="font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Plan de test (UAT)
                      </div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Vérification d'intégrité via API de diagnostic, tests de performance et contrôle d'accès.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {changeStep === 1 && (
              <p className="text-xs text-muted-foreground text-center italic">
                Cliquez sur "Simuler le CAB" pour réunir virtuellement le comité d'approbation et valider le plan de changement.
              </p>
            )}
          </TabsContent>

          {/* TAB 3: SERVICE CATALOGUE */}
          <TabsContent value="catalogue" className="space-y-4 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {catalogueItems.map((item) => {
                const ItemIcon = item.icon;
                const isOrdering = orderingItem === item.name;
                return (
                  <div 
                    key={item.id} 
                    className="bg-muted/40 p-4 rounded-xl border border-border flex flex-col justify-between hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                        <ItemIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground block">{item.id}</span>
                      <h4 className="text-sm font-semibold text-foreground mt-0.5">{item.name}</h4>
                      <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                      <div className="text-[10px] text-muted-foreground">
                        SLA : <span className="text-foreground font-medium">{item.sla}</span>
                      </div>
                      <Button
                        size="sm"
                        disabled={orderingItem !== null}
                        onClick={() => handleOrder(item.name)}
                        className="h-7 text-[10px] px-3 font-semibold bg-primary text-primary-foreground hover:bg-primary/95 flex items-center"
                      >
                        {isOrdering ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <>
                            Commander
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* TAB 4: REPORTS */}
          <TabsContent value="rapports" className="space-y-4 outline-none">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-muted/30 p-2 sm:p-3 rounded-lg border border-border/80">
                <span className="text-[10px] text-muted-foreground block">Respect SLA</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400">98.4%</span>
              </div>
              <div className="bg-muted/30 p-2 sm:p-3 rounded-lg border border-border/80">
                <span className="text-[10px] text-muted-foreground block">Volume total</span>
                <span className="text-base sm:text-lg font-bold text-foreground">152 tkt</span>
              </div>
              <div className="bg-muted/30 p-2 sm:p-3 rounded-lg border border-border/80">
                <span className="text-[10px] text-muted-foreground block">Temps moyen</span>
                <span className="text-base sm:text-lg font-bold text-primary">42 min</span>
              </div>
            </div>

            {/* Recharts Chart Container (relative w-full h-[250px]) */}
            <div className="bg-muted/40 p-4 rounded-xl border border-border">
              <h4 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center justify-between">
                <span>Conformité SLA</span>
                <span className="text-emerald-400 font-mono">Objectif &gt;= 95%</span>
              </h4>
              
              <div className="relative w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={reportsData}
                    margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="slaColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={10}
                      tickLine={false}
                    />
                    <YAxis 
                      domain={[90, 101]} 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "11px"
                      }}
                      labelStyle={{ fontWeight: "bold" }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sla" 
                      stroke="hsl(217, 91%, 60%)" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#slaColor)" 
                      name="Taux SLA (%)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
