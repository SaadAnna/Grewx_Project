import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Company from "./Sections/Company";
import Advantages from "./Sections/Advantages";
import Analytics from "./Sections/Analytics";
import Services from "./Sections/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Advantages />
      <Analytics />
      <Services />
    </>
  );
}
