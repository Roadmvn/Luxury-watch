import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">À propos d'Élégance Horlogère</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          Fondée en 2010, Élégance Horlogère est née de la passion pour l'horlogerie de luxe et le désir de rendre ces chefs-d'œuvre accessibles aux amateurs du monde entier.
        </p>
        <p className="mb-4">
          Notre mission est de proposer une sélection soigneusement choisie de montres de luxe, alliant tradition horlogère et innovation technique. Chaque pièce de notre collection est sélectionnée pour sa qualité exceptionnelle, son design unique et son histoire fascinante.
        </p>
        <p className="mb-4">
          Chez Élégance Horlogère, nous croyons que chaque montre raconte une histoire. C'est pourquoi nous nous efforçons non seulement de vendre des montres, mais aussi de partager notre passion et nos connaissances avec nos clients.
        </p>
        <p>
          Que vous soyez un collectionneur chevronné ou à la recherche de votre première montre de luxe, notre équipe d'experts est là pour vous guider et vous conseiller dans votre choix.
        </p>
      </div>
    </div>
  );
};

export default About;