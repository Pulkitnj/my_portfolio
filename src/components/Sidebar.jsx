import React, { useState } from 'react';
import { motion } from 'framer-motion';
//Strokes can be made using figma as they are just location of the lines
function Sidebar() {
    const [open, setOpen] = useState(false);
    const items = ["Home", "About", "Projects", "Contact"];
    const variants = {
        open: {
            width: '25%',
            clipPath: "circle(1200px at 40px 40px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
            }
        },
        closed: {
            width: '100px',
            clipPath: "circle(25px at 35px 45px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <motion.div 
            initial={false}
            animate={open ? "open" : "closed"}
            variants={variants}
            className="fixed top-0 left-0 w-full h-full bg-white shadow-lg opacity-80 z-50"
            style={{ clipPath: open ? 'circle(800px at 40px 40px)' : 'circle(30px at 35px 45px)' }}
        >
            <div className="absolute w-full h-full flex flex-col text-center justify-center gap-5 p-4">
                <div className="flex flex-col text-center justify-center gap-5">
                    {items.map((item) => (
                        <motion.a
                            href={`#${item}`}
                            key={item}
                            className="text-3xl text-black p-2  hover:text-4xl  rounded transition duration-300"
                            variants={{
                                open: { y:0,opacity: 1 },
                                closed: { y:50,opacity: 0 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.7 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                <div className="fixed top-6 left-6">
                    <button
                        className="w-12 h-12 rounded-lg text-black cursor-pointer hover:text-4xl transition duration-300"
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <motion.path 
                                strokeWidth="3" 
                                stroke="black" 
                                strokeLinecap="round" 
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" },
                                }}
                            />
                            <motion.path 
                                strokeWidth="3"
                                stroke="black"
                                strokeLinecap="round"
                                d = "M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                            />
                            <motion.path 
                                strokeWidth="3"
                                stroke="black"
                                strokeLinecap="round"
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346"},
                                    open: { d: "M 3 2.5 L 17 16.346" },
                                }}
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Sidebar;