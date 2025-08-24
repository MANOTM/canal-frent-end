import { motion } from "framer-motion";

function Cursor({x,y}) {
    return (
    <motion.div className="cursor" animate={{x,y}}>

    </motion.div>
    );
}

export default Cursor;