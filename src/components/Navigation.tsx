import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BMWLogo } from "./BMWLogo";
import { Button } from "./ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Models", id: "models" },
    { name: "Performance", id: "performance" },
    { name: "Gallery", id: "gallery" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* BMW Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <BMWLogo size={40} />
            <span className="text-2xl font-bold text-gradient-primary">BMW</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => onTabChange(item.id)}
                whileHover={{ y: -2 }}
                className={`text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer ${
                  activeTab === item.id ? 'text-foreground' : ''
                }`}
              >
                {item.name}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all ${
                  activeTab === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
            <Button variant="hero" size="sm" className="cursor-hover">
              Configure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onTabChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block py-2 text-foreground/80 hover:text-foreground transition-colors w-full text-left ${
                  activeTab === item.id ? 'text-foreground' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};