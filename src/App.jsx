import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import './index.css';

export default function App() {
  return (
    <Router>
      <nav className="sticky top-0 bg-white shadow-md z-50 px-4 py-3 flex justify-between items-center">
        <span className="font-heading text-xl text-primary">Hong Kong Express</span>
        <div className="space-x-4">
          <Link to="/" className="text-secondary hover:text-primary">Home</Link>
          <Link to="/menu" className="text-secondary hover:text-primary">Menu</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}