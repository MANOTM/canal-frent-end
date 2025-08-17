import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.avif';
import './Navigation.css';
import Menu from '../../icons/Menu';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const menuItems = [
    { path: '/', label: 'Tableaux' },
    { path: '/comment-ca-marche', label: 'comment ca marche?' },
    { path: '/commande-personnalisee', label: 'commande personnalisee' },
    { path: '/qui-suis-je', label: 'qui suis je?' },
    { path: '/mes-evenements', label: 'mes-evenements' },
    { path: '/contact', label: 'Contact' }
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Pascale Canal"
            className="logo"
          />
        </Link>
        {/* nav on laptop */}
        <nav className="nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* nav on small devices  */}
        <Menu open={open} setOpen={setOpen} />

        <AnimatePresence>
          {open && (
            <motion.nav
              className="small-nav"
              onClick={() => setOpen(!open)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 , ease: "easeInOut" }}
            >
              <ul
                className="small-list-nav"
                onClick={e => e.stopPropagation()}
              >
                {menuItems.map((item, index) => (
                  <li
                    key={item.path}
                    className="nav-item"
                    onClick={() => setOpen(!open)}
                  >
                    <Link
                      to={item.path}
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
