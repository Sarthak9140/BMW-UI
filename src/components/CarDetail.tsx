import { motion, AnimatePresence } from "framer-motion";
import { X, Gauge, Zap, Settings, Shield } from "lucide-react";
import { Car } from "@/types/car";
import { Button } from "./ui/button";

interface CarDetailProps {
  car: Car;
  onClose: () => void;
}

export const CarDetail = ({ car, onClose }: CarDetailProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Car Image with Animation */}
            <div className="relative h-96 overflow-hidden rounded-t-lg">
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Car Animation */}
              <motion.div
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 w-32 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                {car.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{car.model} • {car.year}</p>
              <p className="text-lg leading-relaxed max-w-3xl">{car.description}</p>
            </motion.div>

            {/* Performance Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              <div className="text-center p-4 glass-card">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="text-3xl font-bold text-gradient-primary"
                >
                  {car.specs.horsepower}
                </motion.div>
                <div className="text-sm text-muted-foreground">Horsepower</div>
              </div>

              <div className="text-center p-4 glass-card">
                <Gauge className="w-8 h-8 text-accent mx-auto mb-2" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-3xl font-bold text-gradient-accent"
                >
                  {car.specs.topSpeed}
                </motion.div>
                <div className="text-sm text-muted-foreground">km/h Top Speed</div>
              </div>

              <div className="text-center p-4 glass-card">
                <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="text-3xl font-bold text-gradient-primary"
                >
                  {car.specs.acceleration}
                </motion.div>
                <div className="text-sm text-muted-foreground">0-100 km/h</div>
              </div>

              <div className="text-center p-4 glass-card">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, type: "spring" }}
                  className="text-3xl font-bold text-gradient-accent"
                >
                  {car.specs.torque}
                </motion.div>
                <div className="text-sm text-muted-foreground">Nm Torque</div>
              </div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid md:grid-cols-2 gap-8 mb-8"
            >
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold text-gradient-primary mb-4">Technical Specs</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="font-semibold">{car.specs.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transmission</span>
                    <span className="font-semibold">{car.specs.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drivetrain</span>
                    <span className="font-semibold">{car.specs.drivetrain}</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold text-gradient-accent mb-4">Premium Features</h3>
                <ul className="space-y-2">
                  {car.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 glass-card"
            >
              <div>
                <div className="text-3xl font-bold text-gradient-primary">{car.price}</div>
                <div className="text-muted-foreground">MSRP (excluding taxes and fees)</div>
              </div>
              <div className="flex gap-4">
                <Button variant="hero">CONFIGURE NOW</Button>
                <Button variant="accent">TEST DRIVE</Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};