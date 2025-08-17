import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Header/Navigation';
import Tableaux from './pages/tableaux';
import CommentCaMarche from './pages/comment-ca-marche';
import CommandePersonnalisee from './pages/commande-personnalisee';
import QuiSuisJe from './pages/qui-suis-je';
import MesEvenements from './pages/mes-evenements';
import Contact from './pages/contact';
import Lenis from 'lenis';

// Separate component for the app content that can use useLocation
const AppContent = () => {
  const { pathname } = useLocation();

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
  }, [pathname]);
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Tableaux />} />
        <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
        <Route path="/commande-personnalisee" element={<CommandePersonnalisee />} />
        <Route path="/qui-suis-je" element={<QuiSuisJe />} />
        <Route path="/mes-evenements" element={<MesEvenements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
