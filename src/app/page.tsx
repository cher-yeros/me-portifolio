import About from "@/components/Home/About";
import AboutBox from "@/components/Home/AboutBox";
import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";
import Features from "@/components/Home/Features";
import Portifolio from "@/components/Home/Portifolio";
import Service from "@/components/Home/Service";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />

      <main id="main">
        <About />
        <AboutBox />

        <Clients />
        <Features />

        <Service />
        <Testimonial />

        <Portifolio />
        <Team />

        <Contact />
      </main>

      <Footer />
    </main>
  );
}
