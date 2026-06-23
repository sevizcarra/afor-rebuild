import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import What from "@/components/What";
import Assets from "@/components/Assets";
import Method from "@/components/Method";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <What />
      <Assets />
      <Method />
      <Contact />
      <Footer />
    </main>
  );
}
