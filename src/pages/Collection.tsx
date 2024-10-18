import React from 'react';
import WatchList from '../components/WatchList';

const Collection: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Notre Collection</h1>
      <WatchList />
    </div>
  );
};

export default Collection;