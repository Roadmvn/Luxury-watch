import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Watch {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WatchCardProps {
  watch: Watch;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
      <img src={watch.image} alt={watch.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-serif font-semibold mb-2">{watch.name}</h2>
        <p className="text-gray-600 mb-4">{watch.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
        <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center w-full hover:bg-opacity-90 transition-colors">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default WatchCard;