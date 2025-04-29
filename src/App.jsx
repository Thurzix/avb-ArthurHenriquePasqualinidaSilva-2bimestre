import './App.css';
import LoginCard from './Components/LoginCard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

     
      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

function App2() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

     
      <main className="flex-grow">
        <LoginCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
