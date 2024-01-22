---
sidebar_position: 03
slug: tenants
title: Tenants
description: Créez et listez les instances de votre serveur multi-tenant
keywords: [cashless, billetterie, ticketing, cli, curl, python, tenant, saas]
wiktags: [cashless, billetterie, ticketing, curl, python, tenant, saas]
authors: jonas
---

## Base de données partagée, schémas distincts.

TiBillet est construit autour d'une architecture multi-tenant. Il s'agit d'une fonctionnalité essentielle pour toute
application de type "Software-as-a-Service".

C'est une approche semi-isolée : Base de données partagée, schémas distincts. Une base de données pour tous les
locataires, mais un schéma par locataire.

Pour plus d'information : https://django-tenants.readthedocs.io/

## Catégories

Nous avons défini plusieurs catégories de tenant qui determinent les comportements et templates.

### Lieu

Une salle de spectacle, un café concert, un tiers lieux...

- Un nom.
- Un lieu.
- Une scène.
- Un ou plusieurs artistes par soir.

```python
categorie = "S"
```

### Festival

- Un nom.
- Un ou plusieurs lieux.
- Une ou plusieurs scènes.
- Un ou plusieurs artistes par soir.

```python
categorie = "F"
```

### Projet

- Un nom.
- Plusieurs lieux et scènes sur plusieurs dates.

```python
categorie = "A"
```

### Producteurs

Ex : Boite de production, agent, compagnie de théatre, tourneur

- Plusieurs projets.
- Plusieurs lieux et scènes.

```python
categorie = "P"
```

### Meta : L'agenda fédéré

Plusieurs instances se fédèrent pour créer un agenda évènementiel commun.

- Plusieurs lieux
- Plusieurs projets

```python
categorie = "M"
```

### Root

Une seule instance par serveur.
Gère les tables communes à tous les tenants :

- Cartes NFC
- Utilisateurs
- Super-users
- Gestion des domaines principaux et sous domaines multi tenant.

```python
categorie = "R"
```

## Données initiales

Lors de l'installation d'un nouveau serveur Django, une instance ROOT et une META sont déja présente.

S'il ne peut y avoir qu'un seul ROOT, plusieurs instances META sont possibles pour un agenda fédéré autour d'une
communauté interne.

La première META initalement créée est utile pour lister toutes les autres instances du serveur Django. Le sous domaine
par defauilt est "meta". Il est possible de changer l'adresse avant l'installation : modifiez le fichier .env présent à
la racine du docker-compose. Il est aussi possible de changer l'adresse post install dans l'administration ROOT.

## Lister les tenants

À lancer sur la première META.

Aucune autorisation n'est nécéssaire pour lister les tenants d'un serveur.

```text
# all tenant :
GET https://meta.<domain>/api/place/

# retrieve one tenant :
GET https://meta.<domain>/api/place/<uuid>
```

## Création de nouveau tenant

:::note

BETA en cours : En plus de l'autorisation spéficifique de la clé d'Api, l'utilisateur enregistré doit avoir une
autorisation spéciale pour la création de tenant. La case "Peux créer des tenants" doit être coché dans l'interface d'administration ROOT : ```https://www.<domain>/admin/```.

:::

```
POST https://meta.<domain>/api/place/
```

| Item              | type    | Requis |
|-------------------|---------|--------|
| organisation      | text    | Y      |
| short_description | text    | Y      |
| long_description  | decimal | Y      |
| phone             | int     | Y      |
| email             | email   | Y      |
| site_web          | url     | Y      |
| postal_code       | text    | Y      |
| img_url           | url     | Y      |
| logo_url          | url     | Y      |
| categorie         | text    | Y      |
| adress            | text    | N      |
| city              | text    | N      |

## example

```python
import requests

url = "http://meta.tibillet.local/api/place/"

payload = {
    "organisation": "Le Bisik",
    "short_description": " Le lieu des musiques actuelles de Saint-Benoît",
    "long_description": "ACTER (Agir pour la Culture et le Tourisme dans l’Est de La Réunion) est née il y cinq ans de la volonté farouche de porter un projet culturel populaire et de créer un lieu de diffusion original de Musiques Actuelles dans l’Est de La Réunion. Avec le Bisik nous avons inventé un tiers-lieu original, un espace de convivialité pluriel qui pourrait préfigurer une Scène De Musiques Actuelles adaptée au territoire souhaitée par notre équipe et d’ores et déjà par nombre de nos partenaires avec qui nous signerons prochainement un conventionnement pluriannuel.",
    "phone": "0692929292",
    "email": "contact+bisik@tibillet.re",
    "site_web": "http://bisik.re",
    "postal_code": "97410",
    "img_url": "http://bisik.re/wp-content/uploads/2019/01/MayaBisik.jpg",
    "logo_url": "http://bisik.re/wp-content/uploads/2017/05/logo-Bisik.png",
    "categorie": "S"
}
headers = {
    "Content-Type": "application/json",
    "Authorization": "Api-Key  NvGv0CHV.aQGS09HOQuF14sqfez8132jhEd8UAcBsp"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```json title="HTTP json response"
{
	"uuid": "1cf9889c-3414-4a39-bdde-1a36e1f97b96",
	"organisation": "Le Bisik",
	"slug": "le-bisik",
	"short_description": "Le lieu des musiques actuelles de Saint-Benoît",
	"long_description": "ACTER (Agir pour la Culture et le Tourisme dans l’Est de La Réunion) est née il y cinq ans de la volonté farouche de porter un projet culturel populaire et de créer un lieu de diffusion original de Musiques Actuelles dans l’Est de La Réunion. Avec le Bisik nous avons inventé un tiers-lieu original, un espace de convivialité pluriel qui pourrait préfigurer une Scène De Musiques Actuelles adaptée au territoire souhaitée par notre équipe et d’ores et déjà par nombre de nos partenaires avec qui nous signerons prochainement un conventionnement pluriannuel.",
	"adress": null,
	"postal_code": 97410,
	"city": null,
	"phone": "0692929292",
	"email": "contact@tibillet.re",
	"site_web": "http://bisik.re",
	"legal_documents": null,
	"twitter": null,
	"facebook": null,
	"instagram": null,
	"adhesion_obligatoire": false,
	"button_adhesion": false,
	"map_img": null,
	"carte_restaurant": null,
	"img_variations": {
		"fhd": "/media/images/MayaBisik_shOX4fO.fhd.jpg",
		"hdr": "/media/images/MayaBisik_shOX4fO.hdr.jpg",
		"med": "/media/images/MayaBisik_shOX4fO.med.jpg",
		"thumbnail": "/media/images/MayaBisik_shOX4fO.thumbnail.jpg"
	},
	"logo_variations": {
		"fhd": "/media/images/MayaBisik_shOX4fO.fhd.jpg",
		"hdr": "/media/images/MayaBisik_shOX4fO.hdr.jpg",
		"med": "/media/images/MayaBisik_shOX4fO.med.jpg",
		"thumbnail": "/media/images/MayaBisik_shOX4fO.thumbnail.jpg"
	},
	"categorie": "S"
}
```
