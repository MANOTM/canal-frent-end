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
import SearchBox from './components/Search/Search';
import Layout from './layout/Layout';

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
        <Route path="/" element={<Layout><Tableaux /></Layout>} />
        <Route path="/comment-ca-marche" element={<Layout><CommentCaMarche /></Layout>} />
        <Route path="/commande-personnalisee" element={<Layout><CommandePersonnalisee /></Layout>} />
        <Route path="/qui-suis-je" element={<Layout><QuiSuisJe /></Layout>} />
        <Route path="/mes-evenements" element={<Layout><MesEvenements /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
      <SearchBox />
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
