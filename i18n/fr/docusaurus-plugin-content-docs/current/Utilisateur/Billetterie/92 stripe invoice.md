---
sidebar: 92
slug: stripe-invoice
title: Factures Stripe
Description: Gestion des factures Stripe pour vos transactions
keywords: [billetterie, événement, facture, stripe]
wiktags: [billetterie, événement, facture, stripe]
authors: Adrienne
---

# Factures Stripe

**Simplifiez votre processus de facturation !** TiBillet vous permet de générer et d'envoyer automatiquement des factures Stripe à vos clients pour leurs achats.

## Activation des factures Stripe

Pour activer la fonctionnalité de facture Stripe :

1. Allez dans le panneau **Administration**
2. Naviguez vers **Configuration**
3. Dans la section **Stripe**, cochez la case **"Envoyer une facture stripe"**
4. Enregistrez vos modifications


![Configuration des factures Stripe](/img/stripe_invoice_config.jpg)

Lorsque cette option est activée, TiBillet créera automatiquement une facture Stripe pour chaque transaction de paiement (à l'exclusion des abonnements).

## Comment ça fonctionne

Lorsqu'un client effectue un achat et que la fonctionnalité de facture Stripe est activée :

1. Le système crée une session de paiement Stripe standard
2. Le paramètre de création de facture est ajouté à la session de paiement
3. Après un paiement réussi, Stripe génère automatiquement une facture
4. La facture est envoyée à l'adresse e-mail du client
5. La facture est également stockée dans votre tableau de bord Stripe pour la tenue des registres

## Avantages des factures Stripe

- **Documentation professionnelle** : Fournissez aux clients des justificatifs de paiement officiels
- **Livraison automatique** : Les factures sont automatiquement envoyées aux clients
- **Conformité** : Répondez aux exigences légales en matière de documentation des transactions
- **Tenue des registres** : Toutes les factures sont stockées dans votre compte Stripe
- **Personnalisation** : Les factures incluent les détails de votre organisation

## Consultation des factures

Vous pouvez consulter toutes les factures générées dans votre tableau de bord Stripe sous la section "Factures".

Chaque facture comprend des détails tels que :
- Informations sur le client
- Articles achetés
- Prix et quantités
- Taxes (le cas échéant)
- Montant total
- Date de paiement

## Expérience client

Vos clients recevront un e-mail avec leur facture jointe en PDF après la finalisation de leur achat. Ils peuvent également accéder à leurs factures via le portail client Stripe si vous avez activé cette fonctionnalité.

---

**Remarque** : La fonctionnalité de facture Stripe est uniquement disponible pour les paiements ponctuels, et non pour les paiements par abonnement qui disposent de leur propre système de facturation récurrente.