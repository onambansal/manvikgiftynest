import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { applyDocumentMeta } from './config.js';
import Navbar from './components/Navbar.jsx';

import Footer from './components/Footer.jsx';
import FloatingContacts from './components/FloatingContacts.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';
import CartToast from './components/CartToast.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import PageTransition from './components/PageTransition.jsx';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Gallery from './pages/Gallery.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  useEffect(() => {
    applyDocumentMeta();
  }, []);

  return (

    <>
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <FloatingContacts />
      <BackToTop />
      <CartToast />
    </>


  );
}
