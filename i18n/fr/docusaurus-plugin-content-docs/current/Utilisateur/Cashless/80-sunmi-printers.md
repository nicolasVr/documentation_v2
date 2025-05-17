# Imprimantes Sunmi dans LaBoutik

## Aperçu

LaBoutik prend désormais en charge une large gamme de matériel Sunmi pour l'impression de tickets de caisse et de commandes. Cette intégration vous permet d'utiliser à la fois les imprimantes intégrées dans les terminaux Sunmi et les imprimantes Cloud Sunmi autonomes.

## Matériel pris en charge

### Imprimantes intégrées

- **Imprimantes Sunmi intégrées 57mm** : Imprimantes thermiques compactes intégrées aux terminaux Sunmi V2s, D3 mini
- **Imprimantes Sunmi intégrées 80mm** : Imprimantes thermiques de largeur standard intégrées aux terminaux Sunmi D3 ou V3 Mix 

### Imprimantes Cloud

- **Imprimante Cloud Sunmi (NT311)** : Imprimantes thermiques autonomes connectées au réseau
  - Plus d'informations : [Imprimante Cloud de cuisine Sunmi 80mm](https://www.sunmi.com/en-US/80-kitchen-cloud-printer/)

## Fonctionnalités

### Impression de tickets de caisse

LaBoutik prend désormais en charge l'impression de tickets de caisse détaillés pour les achats des clients. Ces tickets comprennent :

- Informations sur l'entreprise (nom, adresse, SIRET, numéro de TVA)
- Détails de la transaction (date, heure, numéro de ticket)
- Informations sur la table et le serveur
- Liste détaillée des achats avec quantités et prix
- Détail de la TVA
- Montants totaux
- Méthode de paiement

### Impression de tickets Z

Vous pouvez désormais imprimer des tickets Z temporaires pour vérifier l'état de votre caisse sans la fermer. Cette fonctionnalité vous permet de :

- Vérifier les totaux de ventes actuels
- Contrôler le fond de caisse et le montant d'espèces attendu
- Examiner les ventes par méthode de paiement
- Effectuer des audits de caisse en milieu de journée sans perturber les opérations

## Configuration

### Interface d'administration

Les imprimantes sont configurées dans l'interface d'administration sous la section "Imprimantes" :

1. **Informations générales** :
   
   - Nom : Un nom descriptif pour l'imprimante
   - Type d'imprimante : Sélectionnez le type d'imprimante Sunmi approprié

2. **Configuration d'imprimante Sunmi intégrée** :
   
   - Hôte : Sélectionnez le terminal Sunmi où se trouve l'imprimante

3. **Configuration d'imprimante Cloud Sunmi** :
   
   - Numéro de série : Entrez le numéro de série de votre imprimante Cloud Sunmi

### Attribution d'imprimante

Vous pouvez attribuer des imprimantes à des catégories de produits spécifiques pour contrôler quelle imprimante reçoit quels tickets :

1. Allez dans "Groupes de catégories" dans l'interface d'administration
2. Attribuez une imprimante à chaque groupe de catégories
3. Lorsque des commandes sont passées, les tickets seront envoyés à l'imprimante appropriée en fonction des catégories de produits

## Utilisation des tickets Z

Pour imprimer un ticket Z temporaire :

1. Naviguez vers la section Ventes dans LaBoutik
2. Cliquez sur l'onglet "Ticket Z"
3. Examinez les informations de vente actuelles
4. Cliquez sur "Imprimer un ticket Z temporaire" pour imprimer un ticket de vérification
5. Lorsque vous êtes prêt à fermer la caisse, cliquez sur "Fermer toutes les caisses"

## Dépannage

Si vous rencontrez des problèmes avec les imprimantes Sunmi :

1. **Imprimantes intégrées** :
   
   - Assurez-vous que le terminal Sunmi est connecté au réseau
   - Vérifiez que l'hôte correct est sélectionné dans la configuration de l'imprimante
   - Utilisez le bouton "Test d'impression" dans l'interface d'administration pour vérifier la connectivité

2. **Imprimantes Cloud** :
   
   - Vérifiez que l'imprimante est allumée et connectée à Internet
   - Confirmez que le numéro de série est saisi correctement
   - Vérifiez que l'APP_ID et l'APP_KEY sont configurés dans les paramètres du système
   - Utilisez le bouton "Test d'impression" pour vérifier la connectivité