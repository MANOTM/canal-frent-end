import "./Article.css"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Article({ Article }) {
  return (
    <motion.div className="article" whileTap={{ scale: 0.97 }}>
      <Link to={`/${Article?.name}`} >
        <div className="main-img">
          <motion.img   src={Article?.mainImg} alt={Article?.name} />
        </div>
        <div className="art-info">
          <div className="art-info-content">
            <h3 className="art-title">{Article?.name}</h3>
            <p className="art-price">{Article?.price}€</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}