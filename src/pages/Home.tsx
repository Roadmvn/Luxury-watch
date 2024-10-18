import React from 'react';
import WatchList from '../components/WatchList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Bienvenue chez Élégance Horlogère</h1>
      <p className="text-center mb-8">Découvrez notre collection de montres de luxe</p>
      <WatchList />
    </div>
  );
};

export default Home;