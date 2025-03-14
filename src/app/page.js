import Header from "@/components/ai-consulting/Header";
import HeroSection from "@/components/ai-consulting/HeroSection";
import RoundSection from "@/components/ai-consulting/RoundSection";
import FunFact from "@/components/ai-consulting/Funfact";
import AboutSection from "@/components/ai-consulting/AboutSection";
import Video from "@/components/ai-consulting/video";
import Services from "@/components/ai-consulting/Services";
import Brands from "@/components/ai-consulting/Brands";
import PortfolioSection from "@/components/ai-consulting/Portfolio";
import Testimonial from "@/components/ai-consulting/Testimonial";
import Pricing from "@/components/ai-consulting/Pricing";
import BlogSection from "@/components/ai-consulting/BlogSection";
import Footer from "@/components/ai-consulting/Footer";


export const metadata = {
  title: "Ai Consulting - Personal Portfolio/CV HTML Template",
};

export default function Home() {
  return (
    <>
    <Header />
    <main>
    <HeroSection />
    <RoundSection />
    <AboutSection />
    <FunFact />
    <Services />
    {/* <Brands /> */}
    {/* <PortfolioSection /> */}
    {/* <Testimonial /> */}
    {/* <Pricing /> */}
    <BlogSection />
    {/* <Video /> */}
    
    </main>
    <Footer />
    </>
  );
}
