import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "À propos", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Produits", href: "#product" },
      { name: "Carrières", href: "#contact" }
    ],
    services: [
      { name: "Développement SaaS", serviceId: "service-saas", index: 0 },
      { name: "Conseil expert en ESM", serviceId: "service-esm", index: 1 },
      { name: "Développement personnalisé", serviceId: "service-custom", index: 2 },
      { name: "Automatisation & Workflows", serviceId: "service-automation", index: 3 }
    ],
    support: [
      { name: "Demander un devis", href: "#contact" },
      { name: "Centre d'aide", href: "#contact" },
      { name: "Contacter le support", href: "#contact" },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/g2gtech", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/g2gtech", label: "Twitter" },
    { icon: Github, href: "https://github.com/g2gtech", label: "GitHub" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServiceCard = (serviceId: string, index: number) => {
    if (window.innerWidth >= 1024) {
      const container = document.querySelector("#services-sticky-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = container.scrollHeight - window.innerHeight;
        const targetScrollY = rect.top + scrollTop + (scrollableHeight * (index / 3));

        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth"
        });
        return;
      }
    }

    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToSection("#services");
    }
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div
              onClick={() => scrollToSection("#home")}
              className="flex items-center space-x-1.5 cursor-pointer inline-flex"
            >
              <div className="px-1.5 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-[15px] tracking-tight">G2G</span>
              </div>
              <span className="text-2xl font-bold tracking-tight gradient-text">Tech</span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Permettre aux organisations du d'atteindre l'excellence technologique grâce à des solutions innovantes et à des services de conseil experts.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@g2gtech.ma" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@g2gtech.ma
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+212708003458" className="text-muted-foreground hover:text-primary transition-colors">
                  +212 708 003 458
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  44 Avenue de France, Appt 16, Agdal, Rabat - Maroc
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-glass-bg border border-glass-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group flex items-center"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToServiceCard(link.serviceId, link.index)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group flex items-center text-left"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group flex items-center"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border py-8"
        >
          <div className="flex flex-col sm:flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear}</span>
              <span onClick={() => window.location.href = "https://www.g2gtech.com/"} className="cursor-pointer hover:text-blue-400 transition-all duration-300">G2GTech,</span>
              <span>Tous droits réservés.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-blue-400 transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-muted-foreground hover:text-blue-400 transition-colors duration-200">
                Conditions d'utilisation
              </button>
              <button className="text-muted-foreground hover:text-blue-400 transition-colors duration-200">
                Politique relative aux cookies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;