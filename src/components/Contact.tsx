import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    customService: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Appel API pour envoyer le message
      // @ts-ignore
      const { sendContactMessage } = await import("@/api/contacts");
      await sendContactMessage(formData);
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Nous vous répondrons sous 24h.",
      });
      setFormData({ name: "", email: "", company: "", service: "", customService: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Erreur lors de l'envoi",
        description: error?.response?.data?.error || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@g2gtech.ma",
      href: "mailto:contact@g2gtech.com"
    },
    {
      icon: Phone,
      label: "Telephone",
      value: "+212 708 003 458",
      href: "tel:+212708003458"
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "44 Avenue de France, Appt 16, Agdal, Rabat - Maroc",
      href: "https://maps.google.com"
    },
    {
      icon: Clock,
      label: "Disponibilité",
      value: "Lundi – Vendredi : 9h00 – 18h00 (UTC+1)",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/g2gtech", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/g2gtech", label: "Twitter" },
    { icon: Github, href: "https://github.com/g2gtech", label: "GitHub" }
  ];

  return (
    <section id="contact" className="section-padding scroll-offset">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contactez</span>-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à transformer votre entreprise ? <br></br> Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs technologiques et à réussir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom et prénom *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom Complet"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de l'entreprise"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer ${!formData.service ? "text-muted-foreground" : "text-foreground"
                      }`}
                  >
                    <option value="" disabled className="text-muted-foreground bg-background">
                      - Sélectionnez un service -
                    </option>
                    <option value="Développement SaaS" className="text-foreground bg-background">
                      Développement SaaS
                    </option>
                    <option value="Conseil expert en ESM" className="text-foreground bg-background">
                      Conseil expert en ESM
                    </option>
                    <option value="Développement Sur Mesure" className="text-foreground bg-background">
                      Développement Sur Mesure
                    </option>
                    <option value="Automatisation & Workflows" className="text-foreground bg-background">
                      Automatisation & Workflows
                    </option>
                    <option value="Autre" className="text-foreground bg-background">
                      Autre
                    </option>
                  </select>
                </div>
              </div>

              {/* Champ dynamique si "Autre" est sélectionné */}
              {formData.service === "Autre" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="customService" className="block text-sm font-medium mb-2">
                    Précisez votre service / besoin personnalisé *
                  </label>
                  <Input
                    id="customService"
                    name="customService"
                    type="text"
                    required
                    value={formData.customService}
                    onChange={handleChange}
                    placeholder="Précisez votre besoin..."
                    className="w-full"
                  />
                </motion.div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre projet ou de vos besoins..."
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero-primary transition-all"
              >
                {isSubmitting ? (
                  <>Envoi...</>
                ) : (
                  <>
                    Envoyer
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-2xl font-bold mb-8">Coordonnées</h3>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-6">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="glass-card rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Our Location</h4>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-xs text-muted-foreground">Google Maps integration</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;