// G2GTech - Modern Corporate Website

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Product from "@/components/Product";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Product />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
