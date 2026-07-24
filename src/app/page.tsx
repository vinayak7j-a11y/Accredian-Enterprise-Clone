import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import StatsBar from "@/components/StatsBar";
import WhyUs from "@/components/WhyUs";
import Programs from "@/components/Programs";
import ProcessJourney from "@/components/ProcessJourney";
import Testimonials from "@/components/Testimonials";
import EnquireForm from "@/components/EnquireForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <StatsBar />
        <WhyUs />
        <Programs />
        <ProcessJourney />
        <Testimonials />
        <EnquireForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
