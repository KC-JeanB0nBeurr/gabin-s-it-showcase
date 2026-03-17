import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CompetenceMatrix from "@/components/CompetenceMatrix";
import RealisationsSection from "@/components/RealisationsSection";
import VeilleSection from "@/components/VeilleSection";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <main>
      <HeroSection />
      <CompetenceMatrix activeFilter={activeFilter} onFilter={setActiveFilter} />
      <RealisationsSection activeFilter={activeFilter} />
      <VeilleSection />
    </main>
  );
};

export default PortfolioPage;
