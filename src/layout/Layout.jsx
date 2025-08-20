import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Header/Navigation";
import SearchBox from "../components/Search/Search";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";


export default function Layout({ children }) {
    const [showAnimation, setShowAnimation] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setShowAnimation(false)
    }, []);
    return (
        <div className="main-section">
            <AnimatePresence mode="wait">
                {showAnimation && <Animation />}
            </AnimatePresence>
            <Navigation />
            <motion.div className="hero-container" exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}>
                {children}
            </motion.div>
            <Footer />
            <SearchBox />

        </div>
    );
}

const Animation = () => {
    return (
        <motion.div className="out-animation" initial={{ top: '-300vh' }} exit={{ top: '300vh', transition: { duration: 3, ease: [0.55, 1, 0.48, .44] } }}></motion.div>
    )
}