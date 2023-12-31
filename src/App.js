import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Herosection from './components/HeroSection';
import Cards from './components/Cards';
import AllProduct from './components/AllProducts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/Products'} element={<AllProduct />} />
      </Routes>
      <Herosection />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
