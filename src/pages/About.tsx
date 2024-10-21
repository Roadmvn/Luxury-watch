import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-serif font-bold text-center mb-8">À propos d'Élégance Horlogère</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <p className="text-lg">
          Fondée en 2010, Élégance Horlogère est née de la passion pour l'horlogerie de luxe et le désir de rendre ces chefs-d'œuvre accessibles aux amateurs du monde entier.
        </p>
        <p className="text-lg">
          Notre mission est de proposer une sélection soigneusement choisie de montres de luxe, alliant tradition horlogère et innovation technique. Chaque pièce de notre collection est sélectionnée pour sa qualité exceptionnelle, son design unique et son histoire fascinante.
        </p>
        <p className="text-lg">
          Chez Élégance Horlogère, nous croyons que chaque montre raconte une histoire. C'est pourquoi nous nous efforçons non seulement de vendre des montres, mais aussi de partager notre passion et nos connaissances avec nos clients.
        </p>
        <p className="text-lg">
          Que vous soyez un collectionneur chevronné ou à la recherche de votre première montre de luxe, notre équipe d'experts est là pour vous guider et vous conseiller dans votre choix.
        </p>
      </div>
    </div>
  );
};

export default About;