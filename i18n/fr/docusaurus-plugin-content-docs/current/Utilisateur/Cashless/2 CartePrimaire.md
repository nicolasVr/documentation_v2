---
sidebar_position: 2
slug: admin_add_primary
title: Carte primaire
description: Ajouter une ou plusieurs cartes primaires.
keywords: [cashless, android, Primary, Cards]
wiktags: [cashless, android, Primary, Cards]
authors: Axel, Adrienne
---

Les cartes primaires sont nécessaires pour ouvrir un point de vente (Android ou terminal). Elles déterminent le niveau d'autorisation disponible pour l'utilisateur : 
Par exemple, vous pouvez autoriser l'accès à un point de vente « BAR » sans donner accès au point de vente « CASHLESS » qui permet les recharges. 

Préférez toujours ajouter des cartes primaires nominatives (liées à un utilisateur). 
De cette manière, vous pourrez tracer plus précisément chaque transaction.
Le responsable du point de vente est visible à chaque paiement.

Pour rendre une carte "primaire" deux solutions : 
-Utiliser une des cartes fournies par TiBillet déjà entrée dans le système. Dans ce cas commencez  directement à [L'étape 3a](#etape-3a)

ou

-Utiliser une carte qui n'est pas proposée par TiBillet (badge, bracelet, carte NFC ou RFID). 
Si vous choississez cette option il faudra au préalable l'ajouter manuellement dans le système en suivant les étape 1, 2 et 3.


## 1- Trouver l'UID de sa Carte NFC
Munissez-vous d'un tag NFC ou RFID (ex : carte, badge d'immeuble, bracelet...).
Téléchargez l'application "Mifare Classic Tool" sur un store.
- Allumez le NFC sur votre smartphone
- Ouvrez l'application
- Scannez votre tag en le passant près du lecteur NFC de votre téléphone.
Votre téléphone devrait vibrer et afficher "Nouveau tag trouvé UID : XXXXXXXX" en notification en bas de l'application.
! [image UID carte](/img/imageUIDcarte.png)

- Allez dans « Outils » puis "Afficher les informations du "tag"
- Notez l’UID : suite de 8 chiffres et lettres (si votre tag est compatible).
! [UID 2](/img/UID2.png)


 ## 2- Ajouter une carte cashless
Dans l’interface admin :
Cliquez sur « Carte Cashless » puis sur le bouton en haut à droite « ajouter une carte cashless ».

Indiquez l’UID de l’étape précédente dans la case RFID TagID.

! [Ajout Carte](/img/ajoutcarte.png)

Si votre carte NFC physique a un numéro imprimé, indiquez le dans la case correspondante, cela permettra un identification plus facile.
Cliquez sur enregistrer : dans le tableau votre nouvelle carte apparait et la colonne membre est vide.
Notez le « numéro imprimé ».


## 3- Enregistrer un nouveau membre responsable (si vous n'utilisez pas une carte tibillet NFC/RFID)

::::danger 
Si vous utilisez une carte fournie par TiBillet, ignorez cette section et rendez-vous l'étape 3a.

Si vous utilisez une carte qui n'est pas proposée par TiBillet (ex : votre propre carte NFC/RFID), continuer de suivre les étapes ci-dessous.
:::

- Cliquez sur la catégorie « Membres responsables » dans la colonne de gauche.
- Cliquez sur le bouton « Ajouter membre responsable » en haut à droite.
- Renseigner les informations du membre
- Sélectionnez le « numéro imprimé » noté précédemment dans la case « nouvelle carte cashless »


![membre responsable](/img/membre-responsable.png)
- Enregistrez
![membre responsable](/img/membre-responsable-bis.png)

## 3a- Enregistrer un nouveau membre responsable (si vous utilisez une carte fournie par tibillet) {#etape-3a}

Allumez votre caisse enregistreuse, 
Cliquez sur le bouton vert correspondant à votre lieu et lorsque le message "Attente Carte Primaire" s'affiche **scannez la carte que vous souhaitez rendre primaire**. Vous aurez un message d'erreur mais le carte sera désormais reconnue par le système.

- Cliquez sur la catégorie « Membres responsables » dans la colonne de gauche.
- Cliquez sur le bouton « Ajouter membre responsable » en haut à droite.
- Renseigner les informations du membre
- Sélectionnez le numéro indiqué au dos de votre carte dans la case « nouvelle carte cashless »


![membre responsable](/img/membre-responsable.png)
- Enregistrez
![membre responsable](/img/membre-responsable-bis.png)


## 4- Rendre la carte "primaire".

- Cliquez sur la catégorie « Carte primaire » dans le menu de gauche.
- Cliquez sur le bouton « Ajouter une carte primaire » en haut à droite.
![Ajout Primaire](/img/memajoutprimaire.png)    
- Sélectionner le « numéro imprimé » de la carte dans la liste « Carte ».
- Désignez les points de vente contrôlés ou non par cette carte. Si vous n'avez pas encore de point de vente, vous pouvez en créé un en suivant ce guide : [Créer un point de vente](../Cashless/admin_add_pos).
     - Déterminez ici le niveau d'autorisation de votre utilisateur.
- Activez le mode gestionnaire si vous le souhaitez.
     - Le « mode gestionnaire » vous permet de supprimer une commande déjà passée, même si elle est payée. C'est un super pouvoir qui demande de grandes responsabilités :
- Enregistrez.

<video width="100%" controls src="/img/CartePrimaire.mp4"></video>

:::info 
Un membre peut avoir plusieurs cartes primaires. 
:::


## 5- Tester la carte dans un point de vente

- Lancez l'application TiBillet sur un terminal ou un smartphone équipé d'un lecteur NFC.
     - Suivez la [procédure d'appairage] (cf. application Android) si ce n'est pas déjà fait.
- Scannez la carte lorsque vous y êtes invité **"Attente carte primaire"**, cela vous permettra de rendre la carte primaire visible sur l'admin.
- Si vous ne voyez pas votre point de vente, vérifiez que les points de vente sont associés à la carte.
- Vous pouvez maintenant accéder à vos produits.

![tpe-primary card request](/img/tpe1.png)
![tpe-I place my primary card on the reader](/img/tpe2.png)
![tpe-product access](/img/tpe3.png)

### Sur le téléphone :

![tpe-phone nfc](/img/phone-nfc.png)

Le capteur NFC des smartphones est généralement situé :

- Sur les iPhones : en haut à droite ou en haut à gauche du téléphone.
- Sur les téléphones Android : souvent au centre, au dos de l'appareil.

Lorsque vous utilisez une carte NFC, pensez à la positionner au bon endroit pour une lecture optimale.