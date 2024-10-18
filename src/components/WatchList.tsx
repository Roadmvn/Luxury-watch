import React from 'react';
import WatchCard from './WatchCard';

const watches = [
  { id: 1, name: 'Classique Élégance', price: 1299, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Sportif Dynamique', price: 899, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Luxe Intemporel', price: 2499, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Minimaliste Chic', price: 799, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
];

const WatchList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {watches.map((watch) => (
        <WatchCard key={watch.id} watch={watch} />
      ))}
    </div>
  );
};

export default WatchList;