import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Company from "./Sections/Company";
import Advantages from "./Sections/Advantages";
import Analytics from "./Sections/Analytics";
import Services from "./Sections/Services";
import Contact from "./Sections/Contact";
import FAQSection from "./Sections/Faq";
import Footer from "./Sections/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Advantages />
      <Analytics />
      <Services />
      <Contact />
      <FAQSection />
      <Footer />
    </>
  );
}
