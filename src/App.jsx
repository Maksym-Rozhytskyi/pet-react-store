import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Catalog from './pages/Catalog.jsx';
import NotFound from './pages/NotFound.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Product from './pages/Product.jsx';
import Support from './pages/Support.jsx';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import BackToTop from './components/BackToTop.jsx';

function Home() {
  useEffect(() => {
    document.title = 'Main Page';
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BackToTop />
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
