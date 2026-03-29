import { client } from "@/sanity/lib/client";
import { projectsQuery, testimonialsQuery } from "@/sanity/lib/queries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import AboutTeam from "@/components/AboutTeam";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default async function Home() {
  const [projects, testimonials] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(testimonialsQuery)
  ]);

  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio projects={projects} />
      <AboutTeam />
      <Testimonials testimonials={testimonials} />
      <FAQSection />
      <ContactForm />
      <Footer /> {/* وضع التذييل في النهاية */}
    </main>
  );
}