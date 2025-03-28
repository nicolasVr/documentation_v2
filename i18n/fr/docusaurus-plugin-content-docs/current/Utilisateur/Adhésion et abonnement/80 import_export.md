---
sidebar_position: 75
slug: import_export
title: Importez vos données
description: Depuis un fichier csv
keywords: [billetterie, ticketing, membership]
wiktags: [billetterie, ticketing,  membership]
authors: Jonas
---


# Importer ses données d'adhésion.

Vous pouvez importer vos données d'adhésion depuis un fichier csv.
Vous pouvez créer ce fichier via un tableur.

CSV veut dire : valeur séparée par des virgules.
La première ligne de ce fichier doit indiquer ce que chaque ligne suivante sera.

### Créer la premiere ligne :

```csv
email,first_name,last_name,last_contribution,contribution_value,product_name,price_name,option_generale,commentaire
```

Chaque ligne suivante doit contenir les informations correspondantes suivant cet exemple :

```csv
jj@jj.com,jojo,juju,01/01/2025,15.20,Adhésion (Le Tiers-Lustre),Annuelle,Végétarien;Orwellien;Guide du routard galactique,Habite au 42 Rue Adams
```

Remarques :
- Le format de la date doit etre scrupuleusement de type : 31/12/1999
- Le montant de la cotisation doit être soit avec une virgule, mais entre double guillemet. ex "15,20", soit avec un point. ex : 15.20
- Le product_name et le price_name doivent correspondre exactement aux nom des produits et tarif de l'adhésion souhaité.
- Vous pouvez remplir plusieurs objets options. Il faut alors les séparer avec des ; et non pas des virgules. Si l'option n'existe pas, elle sera créée.

 
Configurer l'import de cette façon :

![](/img/import_csv.jpg)


# Exporter ses données d'adhésions.

Attention a la façon dont on exporte les données avec Libre Office :

  - UTF8
  - Cocher uniquement "commande" -> c'est la virgule qui sépare les champs.

![export adhésion](/img/exportadhesion.png)