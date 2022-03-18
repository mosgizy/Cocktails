import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Error from './pages/Error';
import CocktailDetails from './components/CocktailDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/cocktail/:id' element={<CocktailDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
