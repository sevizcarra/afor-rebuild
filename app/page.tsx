import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stripe from "@/components/Stripe";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stripe />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
