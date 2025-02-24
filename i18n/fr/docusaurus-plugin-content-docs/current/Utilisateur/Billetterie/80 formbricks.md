---
sidebar_position: 2
slug: formbricks_settings
title: Connecter ses formulaires Formbricks
description: Créer un nouvel évènement en détails.
keywords: [billetterie, ticketing, event, free, formbricks]
wiktags: [billetterie, ticketing, event, free, formbricks]
authors: Axel
header : ![formbricks_header](/img/headerfombricks.JPG)
---


## Paramétrer TiBillet

#### 1. Clé API
Dans l'administration de votre espace (https://votrestructure.lespass.tibillet.org/)
- Cliquez sur "Mon compte" en haut à droite
- Bouton rouge "administration" avec le symbole de clé
- Cliquez sur "Formbricks" tout en bas dans le menu de gauche puis "Configuration"

> Api host est l'adresse de base de votre compte formbricks (https://app.formbricks.com) sauf si vous l'hébergez vous-même (adresse url de votre Formbricks : https://votrestructure.formbricks.com).

Avant d'enregistrer rendez-vous sur votre logiciel Formbricks :
  - Dans le menu "Configuration" cliquez sur "Clés API" et "ajouter la clé api de production".
  - Donnez-lui un nom et copiez la clé qui est apparu en dessous (elle n'est visible qu'une seule fois).
  - Retournez sur votre espace TiBillet et collez la clé dans "API KEY".

Enregistrez

Si tout fonctionne bien, un bouton vert devrait indiquer "Api ok".

<video width="100%" controls src="/img/apiformbricks.mp4"></video>



#### 2. Environnement
Sur le logiciel Formbricks :
- Allez dans configuration
- "Connexion Site Web & Application"
- Descendez jusqu'à "Votre identifiant d'environnement"

Copiez la clé

Retournez dans votre administration (lespass) tibillet :
- Cliquez sur le + en haut à droite pour ajouter un nouveau formulaire
- Collez la clé dans "EnvironmentId"
- "Trigger name" correspond au déclencheur d'enquète dans Formbricks. Pour le retrouvez :
  - Sur Formbricks dans votre enquête (cliquez sur modifier si elle est déjà postée)
  - Allez dans Paramètres
  - Puis "Déclencheur d'enquète"
  - Supprimez ce qui existe déjà si c'est la première fois.
  - "ajouter une action"
  - Capturer une nouvelle action
  - Code
  - Ajoutez une clé (n'importe quel texte)
  - Remplissez la case obligatoire "Que fait votre utilisateur ?" pour définir l'action.
  - Cliquez sur "Créer une action"

C'est cette clé qui est à renseigner dans votre administration TiBillet après "Trigger name".

>Product sont les produits auxquels ce formulaire s'applique : dans votre cas cela peut-être les adhésions ou un panier par exemple.
- Enregistrez

:::note
Le trigger sert à déclencher l'enquête Formbricks seulement quand le premier pré formulaire tibillet est validé (nom prénom adresse).
:::


<video width="100%" controls src="/img/envtriggerformbricks.mp4"></video>


## Paramétrer Formbricks

#### 3. Rendre l'enquête fixe dans la page tibillet

Dans les paramètres de votre enquête sur le logiciel Formbricks :
- Option de recontact 
- Choisir "Continuer à afficher tant que les conditions correspondent"

>Cela permet à l'enquête d'être réouverte à chaque fois

- Cochez "Ignorer le temps d'attente entre les enquêtes" et "afficher toujours l'enquête" (sinon elle ne s'affiche qu'une fois).

#### 4. Mise en page et affichage 

Toujours dans les paramètres Formbricks de votre enquête :
- Cliquez sur "Placement de l'enquête".
- Activez "Surcharge de placement", "Modal centré", "Couleur de la superposition" selon votre envie et surtout "Ne pas permettre" (sinon l'enquête se ferme quand on clique en dehors du cadre).

**Autres :**

Certains éléments sont déjà récupérés par TiBillet lors de pré formulaire comme : 
- « Name » (nom)
- « email » (mail)
- « membership_uuid » (numéro d’adhésion)
- « product_name » (nom du produit)
- « price_name » (prix du produit)

Vous pouvez les ajouter aux "Champs cachés" dans la partie "Questions" de votre enquête Formbricks et y faire appel avec des "@".

Ils permettent de faire des rappels de leur sélections aux utilisateurs mais aussi de s’assurer que les réponses seront bien catégorisées.

<video width="100%" controls src="/img/optionsformbricks.mp4"></video>


:::danger
Assurez-vous aussi que le "Placement de l'enquête dans l'application" est bien "Modal centré" et "Ne pas permettre" dans le menu Configuration puis "Apparence et sensation" de votre logiciel Formbricks.
:::

Il y a pour l'instant un problème de cache sur les serveurs Formbricks et toutes modifications apportées à votre instance mettra 10 minutes à apparaitre sur TiBillet.
