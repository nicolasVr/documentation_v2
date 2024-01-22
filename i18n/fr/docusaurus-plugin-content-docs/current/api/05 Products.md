---
sidebar_position: 05
slug: products
title: Produits
description: Créez et listez les produits
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

## Lister les produits

```
GET /api/products/
```

```json
[
  {
    "uuid": "ac87a79f-792a-4c68-9ad3-2e04b417078e",
    "name": "Adhésion Asso",
    "short_description": null,
    "long_description": null,
    "terms_and_conditions_document": null,
    "publish": true,
    "img": "http://billetistan.django-local.org/media/images/300_CQusv1A.jpg",
    "categorie_article": "A",
    "send_to_cashless": true,
    "prices": [
      {
        "uuid": "989f53f7-7241-4b56-8c85-410edda76d2f",
        "short_description": null,
        "long_description": null,
        "name": "Tarif solidaires",
        "prix": 10.0,
        "vat": "NA",
        "stock": null,
        "max_per_user": 10,
        "subscription_type": "Y",
        "product": "ac87a79f-792a-4c68-9ad3-2e04b417078e",
        "adhesion_obligatoire": null
      },
      {
        "uuid": "9a719f4e-2d14-4e5c-8963-14d9d726bd79",
        "short_description": null,
        "long_description": null,
        "name": "Plein Tarif",
        "prix": 20.0,
        "vat": "NA",
        "stock": null,
        "max_per_user": 10,
        "subscription_type": "Y",
        "product": "ac87a79f-792a-4c68-9ad3-2e04b417078e",
        "adhesion_obligatoire": null
      }
    ]
  }
]
```

## Lister les tarifs

```
POST /api/prices/
```

```json
[
  {
    "uuid": "e4980a38-e8ec-4bca-ad8c-59f9a64646c2",
    "product": "bd8bcd60-0a5f-4fdb-bdb1-1fa12392d56a",
    "name": "Par mois",
    "short_description": "Payez au mois",
    "long_description": null,
    "prix": 30.0,
    "vat": "NA",
    "stock": null,
    "max_per_user": 10,
    "adhesion_obligatoire": null,
    "subscription_type": "M"
  },
  {
    "uuid": "6c2456d7-585c-4e33-9a4d-27ff38932481",
    "product": "bd8bcd60-0a5f-4fdb-bdb1-1fa12392d56a",
    "name": "A l'année Y",
    "short_description": "Payez à l'année",
    "long_description": null,
    "prix": 360.0,
    "vat": "NA",
    "stock": null,
    "max_per_user": 10,
    "adhesion_obligatoire": null,
    "subscription_type": "Y"
  }
]
```

## Création de produit

```
POST /api/products/
```

| Item              | type    | Requis | Exemple            |
| ----------------- | ------- | ------ | ------------------ |
| name              | text    | Y      | Billet             |
| categorie_article | text    | Y      | B                  |
| send_to_cashless  | boolean | N      | false              |
| img               | binary  | N      | /home/jojo/img.jpg |

send_to_cashless : Pour indiquer une adhésion associative enregistrée sur carte cashless TiBillet. Un seul produit
possible par instance.

### Type de produits possible

| Type                  | String |
| --------------------- | ------ |
| Billet                | B      |
| Pack d'objets         | P      |
| Recharge cashless     | R      |
| Vetement              | T      |
| Merchandasing         | M      |
| Abonnement / Adhésion | A      |
| Gratuit / Free        | F      |

## Création de tarif

```
POST /api/prices/
```

| Item                 | type    | Requis | Exemple       |
| -------------------- | ------- | ------ | ------------- |
| product              | int     | Y      | uuid4         |
| name                 | text    | Y      | Demi tarif    |
| prix                 | decimal | Y      | 5             |
| vat                  | decimal | N      | NA            |
| max_per_ser          | int     | N      | 10            |
| stock                | int     | N      | 300           |
| subscription_type    | text    | N      | Null / Y / M  |
| adhesion_obligatoire | text    | N      | uuid4 product |

### subscription_type

Y for years
M for Month

### adhesion_obligatoire

Exemple : Tarif abonné disponible uniquement si utilisateur connecté et ayant souscrit à l'abonnement correspondant.
