import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Catalog from './pages/Catalog.jsx'
import NotFound from './pages/NotFound.jsx'
import Features from './components/Features.jsx'
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';

function Home() {
    return (<>
        <Header/>
        <Hero/>
        <Features/>
        <Reviews/>
        <Footer/>
    </>)
}

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App
