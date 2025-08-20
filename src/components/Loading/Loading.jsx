import './Loading.css'
import logo from '../../assets/images/logo.avif'
import { motion } from "framer-motion";


function Loading() {
    return (
        <motion.div className="Loading-animation" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .3, ease: 'linear' } }}>
            <motion.img
                src={logo}
                alt="loading"
                animate={{
                    scale: [1, 1.1, 1],      
                    opacity: [1, 0.6, 1], 
                }}
                transition={{
                    duration: 1.5,           
                    repeat: Infinity,      
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}

export default Loading;