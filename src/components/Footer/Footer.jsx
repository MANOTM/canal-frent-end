import './Footer.css'
import logo from '../../assets/images/logo.avif'
import { Link } from 'react-router-dom';
import Boite from '../../icons/Boite';
import { motion } from 'framer-motion';
import {container , letter } from '../../components/motion/motionVariants'
function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-links">
                    <div className="footer-contact">
                        <div className="logo-">
                            <img src={logo} alt="" />
                            <p>© 2025 Pascale Canal.</p>
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
                                    required
                                />
                                <button type="submit" className="subscribe-button">
                                    S'abonner
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="uls">
                        <ul>
                            <li>
                                Plan du site
                            </li>
                            <li><Link>Tableaux</Link></li>
                            <li><Link>Comment ça marche ?</Link></li>
                            <li><Link>Commande personnalisée</Link></li>
                            <li><Link>Qui suis-je ?</Link></li>
                            <li><Link>Mes évènements</Link></li>
                            <li><Link>Contact</Link></li>
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