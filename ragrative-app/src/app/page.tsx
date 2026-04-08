import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Stats } from "@/components/sections/Stats";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Awards } from "@/components/sections/Awards";
import { ContactForm } from "@/components/sections/ContactForm";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientLogos />
      <ServicesBento />
      <Stats />
      <ServicesMarquee />
      <Process />
      <CTA />
      <Awards />
      <ContactForm />
      <FeaturedWork />
      <Testimonials />
      <Footer />
    </>
  );
}
