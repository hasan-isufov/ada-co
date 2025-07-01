import About from "@/components/about/about";
import ContactSection from "@/components/contact/contact";

import HeroSection from "@/components/home/heroSection";
import { MarqueeDemo } from "@/components/magicui/moving-card";
import { OurServices } from "@/components/our-services/ourServices";
import TeamSection from "@/components/team/team";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden ">
        <HeroSection />
        <OurServices />
        <MarqueeDemo />
        <About />
        <TeamSection />
        <ContactSection />
      </div>
    </>
  );
}
