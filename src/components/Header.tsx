import React, { useState } from 'react';
import { Watch, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Watch className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-serif font-semibold">Élégance Horlogère</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/collection" className="text-gray-600 hover:text-primary transition-colors">Collection</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 animate-fade-in">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/collection" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Collection</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>À propos</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;