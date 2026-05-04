import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import StatHighlight from "@/components/StatHighlight";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioTable from "@/components/PortfolioTable";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Pillars />
      <Services />
      <StatHighlight />
      <FeaturedProjects />
      <PortfolioTable />
      <Contact />
      <Footer />
    </main>
  );
}
