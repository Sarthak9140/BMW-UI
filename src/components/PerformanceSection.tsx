import { motion } from "framer-motion";
import { useState } from "react";
import { Car } from "@/types/car";
import { Car360Viewer } from "./Car360Viewer";
import '../styles/performance.scss';
import bmwX6MGallery from "@/assets/bmw-x6m-gallery.jpg";
import bmwM8Gallery from "@/assets/bmw-m8-gallery.jpg";
import bmwI8Gallery from "@/assets/bmw-i8-gallery.jpg";

interface PerformanceSectionProps {
  onCarSelect: (car: Car) => void;
}

const performanceCars: Car[] = [
  {
    id: "bmw-m8-performance",
    name: "BMW M8 Competition",
    model: "Ultimate Performance Machine",
    year: 2024,
    image: bmwM8Gallery,
    price: "Starting at $145,900",
    specs: {
      horsepower: 625,
      topSpeed: 305,
      acceleration: "3.0s",
      torque: 750,
      engine: "4.4L Twin-Turbo V8",
      transmission: "8-Speed M Steptronic",
      drivetrain: "All-Wheel Drive"
    },
    features: [
      "M Performance Exhaust",
      "Carbon Ceramic Brakes",
      "Active M Differential",
      "M Track Package",
      "Bowers & Wilkins Audio"
    ],
    description: "The most powerful BMW M car ever created, engineered for the track but refined for the road."
  },
  {
    id: "bmw-x6m-performance",
    name: "BMW X6 M Competition",
    model: "High-Performance SAV",
    year: 2024,
    image: bmwX6MGallery,
    price: "Starting at $125,900",
    specs: {
      horsepower: 617,
      topSpeed: 290,
      acceleration: "3.8s",
      torque: 750,
      engine: "4.4L Twin-Turbo V8",
      transmission: "8-Speed M Steptronic",
      drivetrain: "All-Wheel Drive"
    },
    features: [
      "M Performance Package",
      "Adaptive M Suspension",
      "M Sport Differential",
      "Track-Tuned Stability",
      "Carbon Fiber Accents"
    ],
    description: "Uncompromising performance meets luxury utility in this high-performance SAV."
  },
  {
    id: "bmw-i8-performance",
    name: "BMW i8 Roadster",
    model: "Hybrid Performance",
    year: 2024,
    image: bmwI8Gallery,
    price: "Starting at $164,900",
    specs: {
      horsepower: 374,
      topSpeed: 250,
      acceleration: "4.4s",
      torque: 570,
      engine: "1.5L Turbo + Electric",
      transmission: "6-Speed Automatic",
      drivetrain: "All-Wheel Drive"
    },
    features: [
      "Hybrid Performance",
      "Butterfly Doors",
      "Carbon Fiber Monocoque",
      "Laser Headlights",
      "Future-Forward Design"
    ],
    description: "Revolutionary hybrid technology meets stunning performance in this futuristic roadster."
  }
];

export const PerformanceSection = ({ onCarSelect }: PerformanceSectionProps) => {
  const [selected360Car, setSelected360Car] = useState<Car | null>(null);

  const handle360View = (car: Car) => {
    setSelected360Car(car);
  };

  return (
    <>
      <section className="performance-section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="performance-header"
          >
            <h2>PERFORMANCE</h2>
            <p>
              Experience the pinnacle of automotive performance with our most powerful 
              and track-capable models, each engineered for ultimate driving dynamics.
            </p>
          </motion.div>

          <div className="performance-grid">
            {performanceCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="performance-card cursor-hover"
              >
                <div className="car-360-viewer">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="car-360-image"
                    onClick={() => handle360View(car)}
                  />
                  <div className="rotate-indicator">
                    Drag to rotate 360°
                  </div>
                  <div className="speed-indicator">
                    <div className="speed-value">{car.specs.topSpeed}</div>
                    <div className="speed-unit">KM/H</div>
                  </div>
                </div>

                <div className="performance-content">
                  <h3 className="car-name">{car.name}</h3>
                  <p className="car-category">{car.model}</p>
                  
                  <div className="performance-stats">
                    <div className="stat-item">
                      <span className="stat-value">{car.specs.horsepower}</span>
                      <span className="stat-label">Horsepower</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">{car.specs.acceleration}</span>
                      <span className="stat-label">0-60 MPH</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">{car.specs.topSpeed}</span>
                      <span className="stat-label">Top Speed</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">{car.specs.torque}</span>
                      <span className="stat-label">NM Torque</span>
                    </div>
                  </div>
                  
                  <button 
                    className="view-360-btn cursor-hover"
                    onClick={() => handle360View(car)}
                  >
                    View in 360°
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected360Car && (
        <Car360Viewer
          car={selected360Car}
          onClose={() => setSelected360Car(null)}
        />
      )}
    </>
  );
};