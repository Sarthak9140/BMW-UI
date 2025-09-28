import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import bmwM5Hero from "@/assets/bmw-m5-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with BMW Hero Car */}
      <div className="absolute inset-0">
        <motion.img
          src={bmwM5Hero}
          alt="BMW M5 Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="block text-gradient-primary">THE NEXT</span>
          <span className="block text-gradient-accent">GENERATION</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the future of luxury driving. Explore our revolutionary BMW models 
          with cutting-edge technology, unmatched performance, and timeless design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button variant="hero" className="group text-lg px-8 py-4">
            EXPLORE MODELS
            <motion.div
              className="ml-2 group-hover:translate-x-1 transition-transform"
              whileHover={{ x: 4 }}
            >
              →
            </motion.div>
          </Button>
          
          <Button variant="accent" className="text-lg px-8 py-4">
            CONFIGURE NOW
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">DISCOVER MORE</span>
          <ChevronDown className="w-6 h-6 glow-accent" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary glow-primary animate-float" />
      <div className="absolute top-1/3 right-20 w-1 h-1 rounded-full bg-accent glow-accent animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary glow-primary animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};