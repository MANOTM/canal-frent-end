import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Tableaux from './pages/tableaux';
import CommentCaMarche from './pages/comment-ca-marche';
import CommandePersonnalisee from './pages/commande-personnalisee';
import QuiSuisJe from './pages/qui-suis-je';
import MesEvenements from './pages/mes-evenements';
import Contact from './pages/contact';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Loading from './components/Loading/Loading';
import NotFound from './pages/404/NotFound';
import Show from './pages/Show/Show';

const AppContent = () => {
  const { pathname } = useLocation();
  const loacation = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()
    function ref(time) {
      lenis.raf(time)
      requestAnimationFrame(ref)
    }
    requestAnimationFrame(ref)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200)
    setTimeout(() => {
      setLoading(0);
    }, Math.random() * (1500 - 500) + 500);
  }, [pathname]);


  return (
    <>
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>
      <AnimatePresence>
        <Routes location={loacation} key={loacation.pathname} >
          <Route path="/" element={<Tableaux />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="/commande-personnalisee" element={<CommandePersonnalisee />} />
          <Route path="/qui-suis-je" element={<QuiSuisJe />} />
          <Route path="/mes-evenements" element={<MesEvenements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:label" element={<Show />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
