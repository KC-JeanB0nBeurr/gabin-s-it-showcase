import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CompetenceMatrix from "@/components/CompetenceMatrix";
import RealisationsSection from "@/components/RealisationsSection";
import VeilleSection from "@/components/VeilleSection";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompetenceMatrix activeFilter={activeFilter} onFilter={setActiveFilter} />
      <RealisationsSection activeFilter={activeFilter} />
      <VeilleSection />
      <footer className="border-t border-border py-8">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Gabin Donnier — BTS SIO SISR — Lycée Saint-Marc
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
