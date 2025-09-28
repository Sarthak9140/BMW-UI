import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Gauge, Timer, Cog } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: Zap,
    label: "Total Horsepower",
    value: 1608,
    suffix: "HP",
    description: "Combined power across our M lineup"
  },
  {
    icon: Gauge,
    label: "Top Speed Record",
    value: 305,
    suffix: "km/h",
    description: "Achieved by the BMW M8 Competition"
  },
  {
    icon: Timer,
    label: "Fastest 0-100",
    value: 3.2,
    suffix: "sec",
    description: "BMW M8 Gran Coupe acceleration"
  },
  {
    icon: Cog,
    label: "Years of Innovation", 
    value: 107,
    suffix: "years",
    description: "Since BMW was founded in 1916"
  }
];

const CounterAnimation = ({ 
  targetValue, 
  suffix, 
  duration = 2000 
}: { 
  targetValue: number; 
  suffix: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = targetValue * easeOutCubic;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-primary">
      {Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

export const PerformanceStats = () => {
  return (
    <section id="performance" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">PERFORMANCE</span>
            <br />
            <span className="text-gradient-accent">BY NUMBERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the engineering excellence behind every BMW with performance metrics that define automotive supremacy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="glass-card p-8 text-center group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.05 }}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <stat.icon className="w-12 h-12 mx-auto text-primary glow-primary" />
                </motion.div>

                <div className="mb-4">
                  <CounterAnimation 
                    targetValue={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gradient-accent">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6 mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button 
            variant="hero" 
            className="text-lg px-12 py-4"
          >
            EXPERIENCE THE POWER
          </Button>
        </motion.div>
      </div>
    </section>
  );
};