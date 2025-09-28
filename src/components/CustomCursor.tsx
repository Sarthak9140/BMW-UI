import { useState, useEffect } from 'react';
import '../styles/cursor.scss';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterHoverable = () => setIsHovering(true);
    const handleMouseLeaveHoverable = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects for interactive elements
    const hoverableElements = document.querySelectorAll('button, a, [role="button"], .cursor-hover');
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterHoverable);
      el.addEventListener('mouseleave', handleMouseLeaveHoverable);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterHoverable);
        el.removeEventListener('mouseleave', handleMouseLeaveHoverable);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};