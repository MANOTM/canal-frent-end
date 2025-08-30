import './Footer.css'
import logo from '../../assets/images/logo.avif'
import { Link } from 'react-router-dom';
import Boite from '../../icons/Boite';
import { motion } from 'framer-motion';
import { container, letter } from '../../components/motion/motionVariants'
import { useState } from "react";
import api from '../../api/axios'

function Footer() {

    const [input, setInput] = useState('')
    const [isValidated, setIsValidated] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const handleClick = async e => {
        e.preventDefault()

        if (!input || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
            setIsValidated(true)
            return;
        }

        try {
            const res = await api.post("/subscribers", { email: input });
            setIsValidated(false)
            setIsAdded(true)
            setInput("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-links">
                    <div className="footer-contact">
                        <div className="logo-">
                            <img src={logo} alt="" />
                            <Link to='https://www.pascalecanal.fr/' target='_blank'>© 2025 Pascale Canal. Original Site</Link>
                            <p className='grey'>Site web par <a target='_blank' href="https://manotm.vercel.app/">MANOTM</a></p>
                        </div>
                        <form className="subscription-form">
                            <div className="form-container">
                                <div className="icon-container">
                                    <Boite className='mail-icon' />
                                </div>
                                <input
                                    type="email"
                                    placeholder="info@gmail.com"
                                    className="email-input"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    required
                                />
                                <button className="subscribe-button" onClick={handleClick}>
                                    S'abonner
                                </button>
                            </div>
                            {isValidated &&
                                <motion.p className="email-validated" animate={{ y: '10px' }}>L'adresse email n'est pas valide</motion.p>
                            }
                            {isAdded &&
                                <motion.p className="email-validated" animate={{ y: '10px' }}>Vous êtes bien inscrit à la newsletter !</motion.p>
                            }
                        </form>
                    </div>
                    <div className="uls">
                        <ul>
                            <li>
                                Plan du site
                            </li>
                            <li><Link to="/    ">Tableaux</Link></li>
                            <li><Link to="/comment-ca-marche">Comment ça marche ?</Link></li>
                            <li><Link to="/commande-personnalisee">Commande personnalisée</Link></li>
                            <li><Link to="/qui-suis-je">Qui suis-je ?</Link></li>
                            <li><Link to="/mes-evenements">Mes évènements</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <ul>
                            <li >
                                Réseaux sociaux
                            </li>
                            <li><Link>Facebook</Link></li>
                            <li><Link>Instagram</Link></li>
                            <li><Link>LinkedIn</Link></li>
                        </ul>
                        <ul>
                            <li >
                                Informations
                            </li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Mentions légales</Link></li>
                            <li><Link>Politique de confidentialité</Link></li>
                            <li><Link>CGU</Link></li>
                        </ul>
                    </div>
                </div>
                <motion.div
                    className="big-headding flex gap-4 justify-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.h1 variants={letter}>C</motion.h1>
                    <motion.h1 variants={letter}>N</motion.h1>
                    <motion.h1 variants={letter}>A</motion.h1>
                    <motion.h1 variants={letter}>L</motion.h1>
                </motion.div>
            </div>
        </footer>);
}

export default Footer;