import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AppRoutes from './Routes/AppRoutes';
import { FavoritesProvider } from './Context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
