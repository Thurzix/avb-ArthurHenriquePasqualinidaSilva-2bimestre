import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Detalhes from '../Pages/Detalhes';
import Favoritos from '../Pages/Favoritos';

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/detalhes">Detalhes</Link>
                    <Link to="/favoritos">Favoritos</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detalhes/:id" element={<Detalhes />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}