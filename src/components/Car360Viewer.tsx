import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, RotateCw } from 'lucide-react';
import { Car } from '@/types/car';
import '../styles/car360.scss';

interface Car360ViewerProps {
  car: Car;
  onClose: () => void;
}

export const Car360Viewer = ({ car, onClose }: Car360ViewerProps) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastX;
    const newRotation = (rotation + deltaX * 0.5) % 360;
    setRotation(newRotation < 0 ? newRotation + 360 : newRotation);
    setLastX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setLastX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - lastX;
    const newRotation = (rotation + deltaX * 0.5) % 360;
    setRotation(newRotation < 0 ? newRotation + 360 : newRotation);
    setLastX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const rotateLeft = () => {
    const newRotation = (rotation - 45) % 360;
    setRotation(newRotation < 0 ? newRotation + 360 : newRotation);
  };

  const rotateRight = () => {
    const newRotation = (rotation + 45) % 360;
    setRotation(newRotation);
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          rotateLeft();
          break;
        case 'ArrowRight':
          rotateRight();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [rotation, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="car-360-modal"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="car-360-container"
        >
          <div className="car-360-header">
            <div className="car-title">{car.name} - 360° View</div>
            <button className="close-btn cursor-hover" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div
            className="car-360-viewer"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src={car.image}
              alt={`${car.name} 360° view`}
              className="car-360-image"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d'
              }}
              draggable={false}
            />

            <div className="rotation-indicator">
              <span className="rotation-icon">🔄</span>
              Drag to rotate • Use arrow keys
            </div>

            <div className="angle-display">
              <span className="angle-value">{Math.round(rotation)}°</span>
            </div>

            <div className="controls-overlay">
              <button 
                className="control-arrow cursor-hover" 
                onClick={rotateLeft}
              >
                <RotateCcw size={20} />
              </button>
              <button 
                className="control-arrow cursor-hover" 
                onClick={rotateRight}
              >
                <RotateCw size={20} />
              </button>
            </div>
          </div>

          <div className="car-360-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-value">{car.specs.horsepower}</span>
                <span className="info-label">Horsepower</span>
              </div>
              <div className="info-item">
                <span className="info-value">{car.specs.topSpeed}</span>
                <span className="info-label">Top Speed</span>
              </div>
              <div className="info-item">
                <span className="info-value">{car.specs.acceleration}</span>
                <span className="info-label">0-60 MPH</span>
              </div>
              <div className="info-item">
                <span className="info-value">{car.specs.torque}</span>
                <span className="info-label">NM Torque</span>
              </div>
              <div className="info-item">
                <span className="info-value">{car.specs.engine}</span>
                <span className="info-label">Engine</span>
              </div>
              <div className="info-item">
                <span className="info-value">{car.specs.drivetrain}</span>
                <span className="info-label">Drivetrain</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};