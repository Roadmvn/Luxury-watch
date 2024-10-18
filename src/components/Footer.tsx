import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de nous</h3>
            <p className="text-gray-300">Élégance Horlogère est votre destination pour des montres de luxe et élégantes. Nous proposons une sélection soigneusement choisie pour tous les styles.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white">Collection</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <p className="text-gray-300">Email: info@elegancehorlogere.com</p>
            <p className="text-gray-300">Téléphone: +33 1 23 45 67 89</p>
            <p className="text-gray-300">Adresse: 123 Rue de l'Horloge, 75001 Paris, France</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Élégance Horlogère. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;