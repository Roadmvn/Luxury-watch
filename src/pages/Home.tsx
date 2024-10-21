import React from 'react';
import WatchList from '../components/WatchList';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Bienvenue chez Élégance Horlogère</h1>
          <p className="text-xl text-center mb-8">Découvrez notre collection de montres de luxe</p>
          <div className="flex justify-center">
            <a href="#collection" className="bg-secondary text-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">
              Voir la collection
            </a>
          </div>
        </div>
      </div>
      <div id="collection" className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">Nos montres en vedette</h2>
        <WatchList />
      </div>
    </div>
  );
};

export default Home;