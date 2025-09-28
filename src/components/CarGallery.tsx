import { motion } from "framer-motion";
import { Car } from "@/types/car";
import { ArrowRight } from "lucide-react";
import bmwI8Gallery from "@/assets/bmw-i8-gallery.jpg";
import bmwX6MGallery from "@/assets/bmw-x6m-gallery.jpg";
import bmwM8Gallery from "@/assets/bmw-m8-gallery.jpg";

interface CarGalleryProps {
  onCarSelect: (car: Car) => void;
}

const cars: Car[] = [
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
  }
];

export const CarGallery = ({ onCarSelect }: CarGalleryProps) => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">LEGENDARY</span>
            <br />
            <span className="text-gradient-accent">MODELS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our flagship models, each engineered for ultimate performance and luxury
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card group cursor-pointer overflow-hidden"
              onClick={() => onCarSelect(car)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center glow-primary"
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground">{car.model}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <span className="text-accent font-semibold">{car.specs.horsepower} HP</span>
                    <span className="text-muted-foreground mx-2">•</span>
                    <span className="text-accent font-semibold">{car.specs.acceleration}</span>
                  </div>
                  <div className="text-sm text-primary font-semibold">
                    {car.price}
                  </div>
                </div>

                <motion.div
                  className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  layoutId={`bar-${car.id}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};