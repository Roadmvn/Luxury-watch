import React from 'react';
import { Watch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Watch className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-semibold">Élégance Horlogère</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link></li>
            <li><Link to="/collection" className="text-gray-600 hover:text-blue-600">Collection</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">À propos</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;