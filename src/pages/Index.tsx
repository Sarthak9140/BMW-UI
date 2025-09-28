import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CarGallery } from "@/components/CarGallery";
import { CarDetail } from "@/components/CarDetail";
import { PerformanceStats } from "@/components/PerformanceStats";
import { Navigation } from "@/components/Navigation";
import { ModelsSection } from "@/components/ModelsSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { CustomCursor } from "@/components/CustomCursor";
import { Car } from "@/types/car";

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "models":
        return <ModelsSection onCarSelect={setSelectedCar} />;
      case "performance":
        return <PerformanceSection onCarSelect={setSelectedCar} />;
      case "gallery":
        return (
          <>
            <CarGallery onCarSelect={setSelectedCar} />
            <PerformanceStats />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <CarGallery onCarSelect={setSelectedCar} />
            <PerformanceStats />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {renderContent()}
      </motion.main>

      {selectedCar && (
        <CarDetail 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </div>
  );
};

export default Index;