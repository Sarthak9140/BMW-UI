import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CarGallery } from "@/components/CarGallery";
import { CarDetail } from "@/components/CarDetail";
import { PerformanceStats } from "@/components/PerformanceStats";
import { Navigation } from "@/components/Navigation";
import { Car } from "@/types/car";

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <CarGallery onCarSelect={setSelectedCar} />
        <PerformanceStats />
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