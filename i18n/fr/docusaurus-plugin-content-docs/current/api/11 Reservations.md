---
sidebar_position: 11
slug: reservations
title: Réservations et billets
description: Créez un évènement avec entrée libre.
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

## Reservations

Une reservation peut avoir plusieurs billets.

```
# List all :
GET /api/reservations/
# Retrieve one :
GET /api/reservations/<uuid>
```

```python title="Reservations state"

# several possible states for one reservation
CANCELED, CREATED, UNPAID, FREERES, FREERES_USERACTIV, PAID, PAID_ERROR, PAID_NOMAIL, VALID, = 'C', 'R', 'U', 'F', 'FA', 'P', 'PE', 'PN', 'V',
TYPE_CHOICES = [
    (CANCELED, _('Annulée')),
    (CREATED, _('Crée')),
    (UNPAID, _('Non payée')),
    (FREERES, _('Mail non vérifié')),
    (FREERES_USERACTIV, _('Mail user vérifié')),
    (PAID, _('Payée')),
    (PAID_ERROR, _('Payée mais mail non valide')),
    (PAID_NOMAIL, _('Payée mais mail non envoyé')),
    (VALID, _('Validée')),
]
```

| Python Variable   | String | Traduction                 |
|-------------------|--------|----------------------------|
| CANCELED          | C      | Annulée                    |
| CREATED           | R      | Crée                       |
| UNPAID            | U      | Non payée                  |
| FREERES           | F      | Mail non vérifié           |
| FREERES_USERACTIV | FA     | Mail user vérifié          |
| PAID              | P      | Payée                      |
| PAID_ERROR        | PE     | Payée mais mail non valide |
| PAID_NOMAIL       | PN     | Payée mais mail non envoyé |
| VALID             | V      | Validée                    |


```json title="Reservations"
[
	{
		"uuid": "8b375e71-52b2-422a-ab2d-5f1b4b2b12ac",
		"datetime": "2022-10-18T10:05:31.985512+04:00",
		"user_mail": "jturbeaux@pm.me",
		"event": "17dc4020-521b-4a74-a823-df65229eb724",
		"status": "V",
		"options": [
			"0fba6d07-555a-40d3-94aa-9edd97d1487c",
			"da35d52a-39fe-4674-b879-995fc50ea970"
		],
		"tickets": [
			"d875a95b-24f8-4f5a-b910-1e59ea52b615"
		],
		"paiements": [
			"db55449c-5edd-4c89-bb18-0f3da867d6fa"
		]
	},
	{
		"uuid": "e8ac055b-ab50-42db-8989-a36bec9e6862",
		"datetime": "2022-10-18T09:44:42.388278+04:00",
		"user_mail": "jturbeaux@pm.me",
		"event": "a4b5f5e2-a6e7-4162-bb06-0fe58647dd64",
		"status": "V",
		"options": [],
		"tickets": [
			"41d7fd2e-bc3b-440d-a75b-172be06c6d90"
		],
		"paiements": []
	}
]
```

## Billet

Un billet par personne.

```
# List all ticket for the current event : datetime.now().date() :
GET /api/ticket/
# Retrieve one :
GET /api/ticket/<uuid>
```

```python title="ticket state"
# several possible states for one ticket
CREATED, NOT_ACTIV, NOT_SCANNED, SCANNED = 'C', 'N', 'K', 'S'
SCAN_CHOICES = [
    (CREATED, _('Crée')),
    (NOT_ACTIV, _('Non actif')),
    (NOT_SCANNED, _('Non scanné')),
    (SCANNED, _('scanné')),
]
```

```json title="Billet"
[
  {
    "uuid": "d875a95b-24f8-4f5a-b910-1e59ea52b615",
    "first_name": "Terry",
    "last_name": "Pratchett",
    "status": "K",
    "seat": "L",
    "options": [
      "Fosse",
      "Je viens avec mon gobelin"
    ]
  }
]
```