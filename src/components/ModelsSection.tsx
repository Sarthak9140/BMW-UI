import { motion } from "framer-motion";
import { Car } from "@/types/car";
import '../styles/models.scss';
import bmwI8Gallery from "@/assets/bmw-i8-gallery.jpg";
import bmwX6MGallery from "@/assets/bmw-x6m-gallery.jpg";
import bmwM8Gallery from "@/assets/bmw-m8-gallery.jpg";

interface ModelsSectionProps {
  onCarSelect: (car: Car) => void;
}

const allModels: Car[] = [
  {
    id: "bmw-i8",
    name: "BMW i8",
    model: "Hybrid Sports Car",
    year: 2024,
    image: bmwI8Gallery,
    price: "Starting at $148,500",
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
      "Butterfly Doors",
      "Carbon Fiber Body",
      "Laser Headlights",
      "BMW ConnectedDrive",
      "Harman Kardon Audio"
    ],
    description: "The BMW i8 represents the future of sports cars with its revolutionary hybrid drivetrain and stunning design."
  },
  {
    id: "bmw-x6m",
    name: "BMW X6 M",
    model: "Performance SAV", 
    year: 2024,
    image: bmwX6MGallery,
    price: "Starting at $109,500",
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
      "M Performance Exhaust",
      "Adaptive M Suspension",
      "M Sport Brakes",
      "BMW Live Cockpit Professional",
      "Gesture Control"
    ],
    description: "The BMW X6 M combines the versatility of an SAV with the performance of an M car."
  },
  {
    id: "bmw-m8",
    name: "BMW M8 Gran Coupe",
    model: "Luxury Performance",
    year: 2024,
    image: bmwM8Gallery,
    price: "Starting at $131,500",
    specs: {
      horsepower: 617,
      topSpeed: 305,
      acceleration: "3.2s",
      torque: 750,
      engine: "4.4L Twin-Turbo V8",
      transmission: "8-Speed M Steptronic",
      drivetrain: "All-Wheel Drive"
    },
    features: [
      "Carbon Ceramic Brakes",
      "Adaptive LED Headlights",
      "Merino Leather Interior",
      "Bowers & Wilkins Audio",
      "Driving Assistant Professional"
    ],
    description: "The BMW M8 Gran Coupe is the pinnacle of luxury performance, offering four-door practicality with supercar performance."
  },
  // Additional models for the complete showcase
  {
    id: "bmw-m3",
    name: "BMW M3 Competition",
    model: "Track-focused Sedan",
    year: 2024,
    image: bmwM8Gallery, // Using placeholder for now
    price: "Starting at $73,900",
    specs: {
      horsepower: 503,
      topSpeed: 290,
      acceleration: "3.8s",
      torque: 650,
      engine: "3.0L Twin-Turbo I6",
      transmission: "8-Speed M Steptronic",
      drivetrain: "Rear-Wheel Drive"
    },
    features: [
      "M Carbon Fiber Roof",
      "M Sport Differential",
      "Track Package",
      "M Drive Professional",
      "Carbon Fiber Interior"
    ],
    description: "Pure driving dynamics meet everyday usability in the ultimate sports sedan."
  },
  {
    id: "bmw-ix",
    name: "BMW iX",
    model: "Electric Luxury SUV",
    year: 2024,
    image: bmwX6MGallery, // Using placeholder for now
    price: "Starting at $87,100",
    specs: {
      horsepower: 516,
      topSpeed: 200,
      acceleration: "4.6s",
      torque: 765,
      engine: "Dual Electric Motors",
      transmission: "Single-Speed",
      drivetrain: "All-Wheel Drive"
    },
    features: [
      "500+ Mile Range",
      "Panoramic Glass Roof",
      "Bowers & Wilkins Audio",
      "Air Suspension",
      "Level 2 Autonomous Driving"
    ],
    description: "The future of luxury mobility with zero emissions and maximum comfort."
  },
  {
    id: "bmw-m4",
    name: "BMW M4 Competition",
    model: "High-Performance Coupe",
    year: 2024,
    image: bmwI8Gallery, // Using placeholder for now
    price: "Starting at $76,900",
    specs: {
      horsepower: 503,
      topSpeed: 290,
      acceleration: "3.8s",
      torque: 650,
      engine: "3.0L Twin-Turbo I6",
      transmission: "8-Speed M Steptronic",
      drivetrain: "Rear-Wheel Drive"
    },
    features: [
      "M Carbon Ceramic Brakes",
      "Adaptive M Suspension",
      "M Performance Exhaust",
      "Carbon Fiber Aerodynamics",
      "Track-Tuned Chassis"
    ],
    description: "Precision engineering meets raw emotion in this track-bred coupe."
  }
];

export const ModelsSection = ({ onCarSelect }: ModelsSectionProps) => {
  return (
    <section className="models-section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="models-header"
        >
          <h2>ALL MODELS</h2>
          <p>
            Explore our complete lineup of luxury vehicles, each designed to deliver 
            the ultimate driving experience with cutting-edge technology and performance.
          </p>
        </motion.div>

        <div className="models-grid">
          {allModels.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="model-card cursor-hover"
              onClick={() => onCarSelect(car)}
            >
              <div className="model-image-container">
                <img
                  src={car.image}
                  alt={car.name}
                  className="model-image"
                />
                <div className="model-overlay" />
                <div className="model-badge">
                  {car.year}
                </div>
              </div>

              <div className="model-content">
                <h3 className="model-name">{car.name}</h3>
                <p className="model-type">{car.model}</p>
                
                <div className="model-specs">
                  <div className="spec-item">
                    <span className="spec-value">{car.specs.horsepower}</span>
                    <span className="spec-label">HP</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-value">{car.specs.acceleration}</span>
                    <span className="spec-label">0-60 MPH</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-value">{car.specs.topSpeed}</span>
                    <span className="spec-label">TOP SPEED</span>
                  </div>
                </div>
                
                <div className="model-price">
                  {car.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};