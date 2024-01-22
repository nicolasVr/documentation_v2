---
sidebar_position: 10
slug: events
title: Évènements
description: Créez un évènement avec entrée libre.
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

:::caution
La documentation est en cours de rédaction.

N'hésitez pas à venir discuter avec nous sur **[Discord](https://discord.gg/7FJvtYx)** pour avoir plus d'informations !
:::

```
POST /api/events/
```

| Item              | type     | Requis | Exemple                                       |
|-------------------|----------|--------|-----------------------------------------------|
| datetime          | datetime | Y      | 2029-12-21T18:30                              |
| name              | text     | Y      | 42ème anniversaire d'Adam                     |
| short_description | text     | N      | Pas de panique !                              |
| long_description  | text     | N      | Un dernier restaurant avant la fin du monde ? |
| img_url           | url      | N      | https://picsum.photos/1920/1080               |
| category          | string   | N      | LIV                                           |
| max_per_ser       | int      | N      | 10                                            |
| tags              | list     | N      | ["Rock","Déguisé"]                            |
| artists           | list     | N      | ["uuid4","uuid4"]                             |
| products          | list     | N      | ["uuid4","uuid4"]                             |
| options_radio     | list     | N      | ["uuid4","uuid4"]                             |
| options_checkbox  | list     | N      | ["uuid4","uuid4"]                             |

liste des catégories disponibles : 

```python
    CONCERT = "LIV" #Default
    FESTIVAL = "FES"
    REUNION = "REU"
    CONFERENCE = "CON"
    RESTAURATION = "RES"
```

#### Tips :

- Si aucun **products** :  l'évènement sera considéré comme entrée libre.
- Si **artist** :  les informations de l'évènement seront automatiquement complétées avec les informations de l'artiste, pas besoin de renseigner **name**, **short_description**, **long_description** et **img_url**.
- **options_radio** et **options_checkbox** :  uuid des options à ajouter à l'évènement. Les options peuvent être créées au préalable via l'api ou l'administration.
  - radio : une option à choix unique parmis plusieurs ( ex : taille de t-shirt, etc... )
  - checkbox : une option à choix multiple parmis plusieurs ( ex : repas végétarien, newsletter, etc... )
- **tags** :  liste de tags à ajouter à l'évènement. Renseignez le nom du tag. Les tags sont créés automatiquement si ils n'existent pas déjà.
- **max_per_user** : Défaut à 10 si non renseigné. Si == 1, et si tarifs == 1 alors le champs nom/premon sera automatiquement affiché lors de la commande et il n'y aura pas de choix de quantité.


## Évènement sans artiste avec entrée libre

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Python" label="Python">

```python
import requests

url = "https://demo.betabillet.tech/api/events/"

data = {
    "datetime": "2029-12-21T18:30",
    "name": "42ème anniversaire d'Adam",
    "short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",
    "long_description": "J'adore les dates limites. J'aime le son qu'elles font lorsque on les dépasse à toute allure.",
    "img_url": "https://picsum.photos/1920/1080"
}
headers = {
    "Authorization": "Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=data, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="Javascript" label="json">

```json title="Json (Postman body)"
{
    "datetime": "{{random_date}}T18:30",
    "name": "{{$randomWords}}",
    "short_description": "{{$randomLoremSentence}}",
    "long_description": "{{$randomLoremParagraph}}",
    "img_url": "https://picsum.photos/1920/1080"
}
```

</TabItem>
</Tabs>


Exemple de réponse :

```json title="HTTP Response (json)"
{
	"uuid": "24b96716-c676-43e8-904f-baa93f66968a",
	"name": "42ème anniversaire d'Adam",
	"slug": "42eme-anniversaire-dadam-122129-1830",
	"short_description": "Pas de panique ! Un dernier restaurant avant la fin du monde ?",
	"long_description": "J'adore les dates limites. J'aime le son qu'elles font lorsque on les dépasse à toute allure.",
	"event_facebook_url": null,
	"datetime": "2029-12-21T18:30:00+04:00",
	"products": [
		{
			"uuid": "06948793-da03-47c4-9d56-6350b7e87034",
			"name": "Reservation",
			"short_description": null,
			"long_description": null,
			"terms_and_conditions_document": null,
			"publish": false,
			"img": null,
			"categorie_article": "F",
			"send_to_cashless": false,
			"prices": [
				{
					"uuid": "b4086a22-fee6-4a85-81bb-3b85a8e19d74",
					"short_description": null,
					"long_description": null,
					"name": "gratuite",
					"prix": 0.0,
					"vat": "NA",
					"stock": null,
					"max_per_user": 10,
					"subscription_type": "N",
					"product": "06948793-da03-47c4-9d56-6350b7e87034",
					"adhesion_obligatoire": null
				}
			]
		}
	],
	"options_radio": [],
	"options_checkbox": [],
	"img_variations": {
		"fhd": "/media/images/c371b9a0d21391a6998150ec49e6c833.fhd.png",
		"hdr": "/media/images/c371b9a0d21391a6998150ec49e6c833.hdr.png",
		"med": "/media/images/c371b9a0d21391a6998150ec49e6c833.med.png",
		"thumbnail": "/media/images/c371b9a0d21391a6998150ec49e6c833.thumbnail.png"
	},
	"reservations": 0,
	"complet": false,
	"artists": [],
	"url": "https://demo.betabillet.tech/event/42eme-anniversaire-dadam-122129-1830/",
	"place": "DemoStène"
}
```