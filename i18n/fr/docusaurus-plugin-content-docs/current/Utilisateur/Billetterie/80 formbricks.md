---
sidebar_position: 2
slug: formbricks_settings
title: Connecter ses formulaires Formbricks
description: Créer un nouvel évènement en détails.
keywords: [billetterie, ticketing, event, free, formbricks]
wiktags: [billetterie, ticketing, event, free, formbricks]
authors: Axel
---

# Paramétrer TiBillet

## 1. Clé API

Dans l'administration de votre espace ([https://votrestructure.lespass.tibillet.org/](https://votrestructure.lespass.tibillet.org/)) :

1. Cliquez sur **"Mon compte"** en haut à droite.
2. Cliquez sur le bouton rouge **"Administration"** (icône de clé).
3. Dans le menu de gauche, tout en bas, cliquez sur **"Formbricks"** puis **"Configuration"**.

> **API Host** est l'adresse de base de votre compte Formbricks :
> - Par défaut : [https://app.formbricks.com](https://app.formbricks.com)
> - Si auto-hébergé : [https://votrestructure.formbricks.com](https://votrestructure.formbricks.com)

:::note 

Si par défaut alors laisser https://app.formbricks.com/
Ne pas copier ce qui vient après le .com
:::

**Sur votre logiciel Formbricks :**

1. Allez dans **"Configuration"** > **"Clés API"**.
2. Cliquez sur **"Ajouter la clé API de production"**.
3. Donnez-lui un nom et copiez la clé générée (visible une seule fois).

**Retournez sur TiBillet :**

1. Collez la clé dans le champ **"API KEY"**.
2. Enregistrez.

Si tout est correct, un indicateur vert affichera **"API ok"**.

<video width="100%" controls src="/img/apiformbricks.mp4"></video>

---

## 2. Environnement

**Sur Formbricks :**

1. Allez dans **"Configuration"** > **"Connexion Site Web & Application"**.
2. Descendez jusqu'à **"Votre identifiant d'environnement"** et copiez la clé.

**Sur TiBillet :**

1. Rendez-vous de nouveau dans le menu "Formbricks" en bas à gauche de votre page d'administration.
2. Cliquez sur le **"+"** violet pour ajouter un nouveau formulaire.
3. Collez la clé dans le champ **"EnvironmentId"**.
4. Renseignez le **"Trigger name"** (déclencheur d'enquête) :
   - Sur Formbricks, ouvrez votre enquête.
   - Allez dans **"Paramètres"** > **"Déclencheur d'enquête"**.
   - Supprimez les anciens déclencheurs si nécessaire.
   - Cliquez sur **"Ajouter une action"** > **"Capturer une nouvelle action"** > **"Code"**.
   - Remplissez le champ obligatoire **"Que fait votre utilisateur ?"** (ce texte, bien qu'obligatoire n'a pas d'importance. Mettez ce que vou voulez).
   - Inscrivez une **"clé"** dans la case correspondante (par exemple le nom de votre formulaire). C'est cette clé qui nous sera utile, copiez la ou retenez la !
   - Validez en cliquant sur le bouton "créer une action".
5. Collez cette clé dans **"Trigger name"** sur TiBillet.

> **Product** : sélectionnez les produits associés à ce formulaire (ex : adhésions, panier).

:::note
Le **trigger** lance l'enquête Formbricks uniquement après validation du pré-formulaire TiBillet (nom, prénom, adresse).
:::

<video width="100%" controls src="/img/envtriggerformbricks.mp4"></video>

---

# Paramétrer Formbricks

## 3. Rendre l'enquête fixe dans TiBillet

1. Ouvrez les paramètres de votre enquête dans Formbricks.
2. Activez l'option **"Continuer à afficher tant que les conditions correspondent"**.
3. Cochez également :
   - **"Ignorer le temps d'attente entre les enquêtes"**
   - **"Afficher toujours l'enquête"**

> Cela permet à l'enquête de rester visible tant que les conditions sont remplies.

---

## 4. Mise en page et affichage

1. Allez dans **"Placement de l'enquête"**.
2. Activez les options suivantes :
   - **"Surcharge de placement"**
   - **"Modal centré"**
   - **"Couleur de la superposition"** (selon vos préférences)
   - **"Ne pas permettre"** (pour empêcher la fermeture de l'enquête en cliquant en dehors du cadre)

:::danger
Assurez-vous que le **"Placement de l'enquête dans l'application"** est bien configuré en **"Modal centré"** et **"Ne pas permettre"** dans **"Configuration"** > **"Apparence et sensation"**.
:::

---

## 5. Fonctionnalités supplémentaires

### Remplissage automatique et champs cachés

TiBillet transmet automatiquement certaines informations à Formbricks :

- `name` : Nom de l'utilisateur
- `email` : Email
- `membership_uuid` : Numéro d'adhésion
- `product_name` : Nom du produit
- `price_name` : Prix du produit
- `price_amount` : Montant du prix

**Utilisation dans Formbricks :**

1. Allez dans **"Questions"** de votre enquête.
2. Ajoutez des **champs cachés** pour ces données.
3. Utilisez-les dans vos questions avec `@` (ex : *Bonjour @name, vous avez choisi @product_name.*).

> Les champs cachés permettent de personnaliser l'enquête et d'assurer un suivi précis dans les résultats.

### Affichage des slugs

Pour que les valeurs des champs cachés apparaissent telles qu'elles sont stockées (espaces remplacés par des tirets), notamment dans les espaces conditionnels des enquêtes utilisez les **slugs** :

- `product_slug`
- `price_slug`

**Pour récupérer les slugs :**

1. Dans l'administration TiBillet, allez dans **"Formbricks"**.
2. Ouvrez votre formulaire.
3. Les slugs s'afficheront en bleu en haut de la page.

<video width="100%" controls src="/img/optionsformbricks.mp4"></video>

:::danger
Un problème de cache sur les serveurs Formbricks peut retarder l'affichage des modifications (~10 minutes).
:::
