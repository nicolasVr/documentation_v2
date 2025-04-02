// src/components/FeatureList.js
import React, { useState } from 'react';

const features = [
  {
    id: 1,
    title: "Station autonome de recharge sans contact",
    description: "Station pour recharger des cartes sans contact de manière autonome.",
    progress: 10,
    funding: 100,
    goal: 1000
  },
  {
    id: 2,
    title: "Lecteur NFC externe (pour utilisation avec des smartphones anciens)",
    description: "Permet de lire des cartes NFC via des smartphones anciens.",
    progress: 15,
    funding: 150,
    goal: 1200
  },
  {
    id: 3,
    title: "Monnaie locale existante MLCC (Doume, Graine, Ti4Sous, Eusko, Soudicy...)",
    description: "Support pour des monnaies locales existantes comme Doume, Graine, etc.",
    progress: 20,
    funding: 200,
    goal: 1500
  },
  {
    id: 4,
    title: "Monnaie libre et cryptomonnaie (June, ether, etc...)",
    description: "Support pour des monnaies libres et cryptomonnaies comme June ou Ether.",
    progress: 25,
    funding: 250,
    goal: 2000
  },
  {
    id: 5,
    title: "Boitier pour Tireuses à bière en libre-service",
    description: "Installation d'un système pour tireuse à bière en libre-service.",
    progress: 30,
    funding: 300,
    goal: 2500
  },
  {
    id: 6,
    title: "TPE carte bancaire liée au point de vente",
    description: "Intégration d'un TPE (Terminal de Paiement Électronique) lié au point de vente.",
    progress: 35,
    funding: 350,
    goal: 3000
  },
  {
    id: 7,
    title: "Gestion de stock",
    description: "Système de gestion de stock pour les produits vendus.",
    progress: 40,
    funding: 400,
    goal: 3500
  },
  {
    id: 8,
    title: "Export comptabilité Odoo & Dokos",
    description: "Export des données comptables vers Odoo et Dokos.",
    progress: 45,
    funding: 450,
    goal: 4000
  },
  {
    id: 9,
    title: "Balance connectée / Vente en vrac et gestion des stocks",
    description: "Intégration d'une balance connectée pour la vente en vrac.",
    progress: 50,
    funding: 500,
    goal: 4500
  },
  {
    id: 10,
    title: "Vente en ligne, Click & Collect",
    description: "Mise en place de la vente en ligne avec le système Click & Collect.",
    progress: 55,
    funding: 550,
    goal: 5000
  },
  {
    id: 11,
    title: "Buzzer de table",
    description: "Système de buzzer pour signaler que la commande est prête.",
    progress: 60,
    funding: 600,
    goal: 5500
  },
  {
    id: 12,
    title: "Prise de commande et paiement par le client à la table / Système QRCode",
    description: "Permet aux clients de prendre commande et de payer directement à la table via un QR Code.",
    progress: 65,
    funding: 650,
    goal: 6000
  },
  {
    id: 13,
    title: "Terminal autonome de prise de commande",
    description: "Terminal autonome pour la prise de commande dans les lieux de restauration.",
    progress: 70,
    funding: 700,
    goal: 6500
  },
  {
    id: 14,
    title: "Badges d'entrée/sortie",
    description: "Système de badges pour gérer l'entrée et la sortie des membres.",
    progress: 75,
    funding: 750,
    goal: 7000
  },
  {
    id: 15,
    title: "Crowdfunding, Dons, Pourboires",
    description: "Mise en place de systèmes de financement participatif, dons et pourboires.",
    progress: 80,
    funding: 800,
    goal: 7500
  },
  {
    id: 16,
    title: "Newsletter & blog (Ghost)",
    description: "Création d'une newsletter et d'un blog avec Ghost.",
    progress: 85,
    funding: 850,
    goal: 8000
  },
  {
    id: 17,
    title: "Export Dokos",
    description: "Export des données vers Dokos.",
    progress: 90,
    funding: 900,
    goal: 8500
  },
  {
    id: 18,
    title: "Agenda participatif",
    description: "Création d'un agenda participatif permettant aux utilisateurs d'ajouter des événements.",
    progress: 95,
    funding: 950,
    goal: 9000
  },
  {
    id: 19,
    title: "Réservation avec validation préalable",
    description: "Système de réservation d'événements nécessitant une validation préalable.",
    progress: 100,
    funding: 1000,
    goal: 9500
  },
  {
    id: 20,
    title: "Réservation d'espaces (co-working)",
    description: "Réservation d'espaces comme des salles de réunion ou des bureaux pour du co-working.",
    progress: 100,
    funding: 1050,
    goal: 10000
  },
  {
    id: 21,
    title: "Covoiturage",
    description: "Système de covoiturage intégré pour faciliter les déplacements vers les événements.",
    progress: 100,
    funding: 1100,
    goal: 10500
  },
  {
    id: 22,
    title: "Agrégateur d’événements externes sur un territoire (Facebook, Fediverse, etc.)",
    description: "Agrégateur pour afficher les événements provenant de plateformes externes comme Facebook ou Fediverse.",
    progress: 100,
    funding: 1150,
    goal: 11000
  },
  {
    id: 23,
    title: "Badge inter-lieux",
    description: "Système de badges utilisables entre plusieurs lieux partenaires.",
    progress: 100,
    funding: 1200,
    goal: 11500
  }
];


const FeatureList = () => {
    const [fundings, setFundings] = useState(
      features.reduce((acc, feature) => {
        acc[feature.id] = feature.funding;
        return acc;
      }, {})
    );
  
    const [openFeature, setOpenFeature] = useState(null); // État pour gérer quelle feature est ouverte
  
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
  
    const handleToggleFeature = (id) => {
      // Si la feature est déjà ouverte, on la ferme, sinon on l'ouvre
      setOpenFeature(openFeature === id ? null : id);
    };
  
    return (
      <div>
        {features.map((feature) => (
          <div key={feature.id}>
            <details className="border p-4 rounded-lg shadow-md mb-4" onClick={() => handleToggleFeature(feature.id)}>
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
  
            {/* Ajouter un séparateur seulement si la fonctionnalité est dépliée */}
            {openFeature === feature.id && <hr className="my-4" />}
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureList;