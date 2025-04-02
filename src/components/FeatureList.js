// src/components/FeatureList.js
import React, { useState } from 'react';

const features = [
  {
    id: 1,
    title: "Amélioration de l'interface",
    description: "Refonte de l'interface pour une meilleure expérience utilisateur.",
    progress: 40,
    funding: 500,
    goal: 2000
  },
  {
    id: 2,
    title: "Intégration Stripe",
    description: "Ajout d'un module de paiement en ligne.",
    progress: 20,
    funding: 300,
    goal: 1500
  }
];

const FeatureList = () => {
  const [fundings, setFundings] = useState(
    features.reduce((acc, feature) => {
      acc[feature.id] = feature.funding;
      return acc;
    }, {})
  );

  const handleFunding = (id) => {
    const amount = prompt("Combien souhaitez-vous co-financer ?");
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      setFundings(prev => ({
        ...prev,
        [id]: prev[id] + parsedAmount
      }));
      alert(`Merci pour votre engagement de ${parsedAmount} € !`);
    }
  };

  return (
    <div>
      {features.map((feature) => (
        <details key={feature.id} className="border p-4 rounded-lg shadow-md mb-4">
          <summary className="cursor-pointer font-bold">{feature.title}</summary>
          <p className="mt-2">{feature.description}</p>
          <div className="mt-2">
            <p>Développement : {feature.progress}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${feature.progress}%` }}></div>
            </div>
          </div>
          <div className="mt-2">
            <p>Financement : {fundings[feature.id]}€ / {feature.goal}€</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(fundings[feature.id] / feature.goal) * 100}%` }}></div>
            </div>
          </div>
          <button onClick={() => handleFunding(feature.id)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            💰 Je co-finance
          </button>
        </details>
      ))}
    </div>
  );
};

export default FeatureList;
