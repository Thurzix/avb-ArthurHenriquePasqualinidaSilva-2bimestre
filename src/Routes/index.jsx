import { BrowserRouter } from "react-router-dom";

export default function AppRoutes() {
    return(
        <>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/">Detalhes</Link>
            <Link to="/">Favoritos</Link>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Detalhes" element={<Detalhes/>} />
                <Route path="/Favoritos" element={<Favoritos/>} />
            </Routes>
        </BrowserRouter>
        </>
    )

}