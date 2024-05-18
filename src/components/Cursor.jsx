import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = (e) => {
          setMousePosition({
            x: e.clientX -12,
            y: e.clientY -12
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x ,
          y: mousePosition.y ,
        }
      }
    
  return (
    <motion.div 
        variants={variants}
        animate="default"
        className="w-4 h-4 rounded-full bg-gradient-to-r from-fuchsia-200 via-purple-600 to-fuchsia-900 fixed pointer-events-none "
    >  
    </motion.div>
  )
}

export default Cursor
