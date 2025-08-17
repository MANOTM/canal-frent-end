import { useState } from "react";
import { motion } from "framer-motion";

export default function Menu({ open = false, setOpen }) {

    return (
        <div
            className="menu-icon"
            onClick={() => setOpen(!open)}
            style={{
                backgroundColor: open ? "#ffffff" : "#000000", // Black when closed, white when open
                transition: "all 0.3s ease"
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={open ? "#000000" : "#ffffff"} // White when closed, black when open
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Top Line */}
                <motion.line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    animate={open ? { x1: 5, y1: 5, x2: 19, y2: 19 } : { x1: 3, y1: 6, x2: 21, y2: 6 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Middle Line */}
                <motion.line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    animate={open ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />

                {/* Bottom Line */}
                <motion.line
                    x1="9"
                    y1="18"
                    x2="21"
                    y2="18"
                    animate={open ? { x1: 5, y1: 19, x2: 19, y2: 5 } : { x1: 9, y1: 18, x2: 21, y2: 18 }}
                    transition={{ duration: 0.3 }}
                />
            </svg>
        </div>
    );
}
