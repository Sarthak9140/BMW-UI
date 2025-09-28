import { motion } from "framer-motion";

interface BMWLogoProps {
  size?: number;
  className?: string;
}

export const BMWLogo = ({ size = 40, className = "" }: BMWLogoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#bmwGradient)"
          strokeWidth="2"
          className="animate-glow-pulse"
        />
        
        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="url(#bmwInnerGradient)"
        />
        
        {/* BMW Segments */}
        <motion.path
          d="M 10 50 A 40 40 0 0 1 50 10 L 50 50 Z"
          fill="#ffffff"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.path
          d="M 50 10 A 40 40 0 0 1 90 50 L 50 50 Z"
          fill="url(#bmwBlueGradient)"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        
        <motion.path
          d="M 90 50 A 40 40 0 0 1 50 90 L 50 50 Z"
          fill="#ffffff"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        
        <motion.path
          d="M 50 90 A 40 40 0 0 1 10 50 L 50 50 Z"
          fill="url(#bmwBlueGradient)"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        
        {/* Center BMW Text */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="text-xs font-bold fill-foreground"
          style={{ fontSize: '10px' }}
        >
          BMW
        </text>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bmwGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(213 100% 50%)" />
            <stop offset="100%" stopColor="hsl(180 100% 50%)" />
          </linearGradient>
          
          <linearGradient id="bmwInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0 0% 10%)" />
            <stop offset="100%" stopColor="hsl(0 0% 20%)" />
          </linearGradient>
          
          <linearGradient id="bmwBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(213 100% 60%)" />
            <stop offset="100%" stopColor="hsl(213 100% 40%)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};