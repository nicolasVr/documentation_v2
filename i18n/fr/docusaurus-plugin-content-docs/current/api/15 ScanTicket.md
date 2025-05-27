---
sidebar_position: 15
slug: scan-ticket
title: API de Scan de Billets
description: API pour scanner et valider les billets à l'aide d'appareils mobiles.
keywords: [billetterie, scan, mobile, API, QR code, appairage]
wiktags: [billetterie, scan, mobile, API, QR code, appairage]
authors: jonas
---

# API de Scan de Billets

L'API de Scan de Billets vous permet de scanner et de valider des billets à l'aide d'appareils mobiles. Cette API est conçue pour être utilisée avec l'application mobile de scan TiBillet.

## Points de Terminaison

### Appairer un Appareil

```
GET /api/scan/{token}/pair
```

Ce point de terminaison est utilisé pour appairer un appareil mobile avec le système TiBillet. Le token est généré lors de la création d'un nouvel appareil de scan dans l'interface d'administration.

#### Réponse

```json
{
  "success": true,
  "message": "Device successfully paired",
  "api_key": "VOTRE_CLE_API",
  "device_uuid": "12345678-1234-5678-1234-567812345678",
  "device_name": "Scanner Entrée"
}
```

### Tester la Connexion API

```
GET /api/scan/test_api/
```

Ce point de terminaison est utilisé pour tester si la clé API est valide et si la connexion au serveur fonctionne.

#### En-têtes

| Nom | Requis | Description |
|-----|--------|-------------|
| Authorization | Oui | Clé API au format : `Api-Key VOTRE_CLE_API` |

#### Réponse

```json
{
  "success": true,
  "message": "API key is valid",
  "device_info": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "name": "Scanner Entrée",
    "claimed": true,
    "archived": false
  },
  "server_info": {
    "tenant": "Organisation Exemple",
    "domain": "exemple.tibillet.org",
    "timestamp": "2023-06-15T14:30:45.123456+00:00"
  }
}
```

### Vérifier le Statut d'un Billet

```
POST /api/scan/check_ticket/
```

Ce point de terminaison est utilisé pour vérifier le statut d'un billet sans le scanner.

#### En-têtes

| Nom | Requis | Description |
|-----|--------|-------------|
| Authorization | Oui | Clé API au format : `Api-Key VOTRE_CLE_API` |
| Content-Type | Oui | Doit être `application/json` |

#### Corps de la Requête

```json
{
  "qrcode_data": "DONNEES_ENCODEES_BASE64:SIGNATURE"
}
```

#### Réponse

```json
{
  "success": true,
  "message": "Ticket information retrieved",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valide et non scanné",
    "is_scanned": false,
    "event": "Événement Exemple",
    "first_name": "Jean",
    "last_name": "Dupont",
    "price": "Entrée Générale",
    "product": "Billet de Concert",
    "scanned_by": null
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

### Scanner un Billet

```
POST /api/scan/ticket/
```

Ce point de terminaison est utilisé pour scanner et valider un billet.

#### En-têtes

| Nom | Requis | Description |
|-----|--------|-------------|
| Authorization | Oui | Clé API au format : `Api-Key VOTRE_CLE_API` |
| Content-Type | Oui | Doit être `application/json` |

#### Corps de la Requête

```json
{
  "qrcode_data": "DONNEES_ENCODEES_BASE64:SIGNATURE"
}
```

#### Réponse (Succès)

```json
{
  "success": true,
  "message": "Ticket successfully scanned",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valide et scanné",
    "event": "Événement Exemple",
    "first_name": "Jean",
    "last_name": "Dupont",
    "price": "Entrée Générale",
    "product": "Billet de Concert"
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

#### Réponse (Déjà Scanné)

```json
{
  "success": false,
  "message": "Ticket already scanned",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valide et scanné",
    "event": "Événement Exemple",
    "first_name": "Jean",
    "last_name": "Dupont",
    "price": "Entrée Générale",
    "product": "Billet de Concert",
    "scanned_by": "98765432-9876-5432-9876-543298765432"
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

## Exemples de Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Appairer un Appareil

<Tabs>
<TabItem value="bash" label="Bash">

```bash
# Le token est obtenu à partir du QR code dans l'interface d'administration
TOKEN="votre_token_ici"

curl -X GET "https://exemple.tibillet.org/api/scan/${TOKEN}/pair"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Le token est obtenu à partir du QR code dans l'interface d'administration
const token = "votre_token_ici";

fetch(`https://exemple.tibillet.org/api/scan/${token}/pair`, {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

# Le token est obtenu à partir du QR code dans l'interface d'administration
token = "votre_token_ici"

url = f"https://exemple.tibillet.org/api/scan/{token}/pair"

response = requests.get(url)
print(response.json())
```

</TabItem>
</Tabs>

### Tester la Connexion API

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="votre_cle_api_ici"

curl -X GET "https://exemple.tibillet.org/api/scan/test_api/" \
  -H "Authorization: Api-Key ${API_KEY}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "votre_cle_api_ici";

fetch('https://exemple.tibillet.org/api/scan/test_api/', {
  method: 'GET',
  headers: {
    'Authorization': `Api-Key ${apiKey}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "votre_cle_api_ici"

url = "https://exemple.tibillet.org/api/scan/test_api/"
headers = {
    "Authorization": f"Api-Key {api_key}"
}

response = requests.get(url, headers=headers)
print(response.json())
```

</TabItem>
</Tabs>

### Vérifier le Statut d'un Billet

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="votre_cle_api_ici"
QRCODE_DATA="donnees_encodees_base64:signature"

curl -X POST "https://exemple.tibillet.org/api/scan/check_ticket/" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"qrcode_data\": \"${QRCODE_DATA}\"}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "votre_cle_api_ici";
const qrcodeData = "donnees_encodees_base64:signature";

fetch('https://exemple.tibillet.org/api/scan/check_ticket/', {
  method: 'POST',
  headers: {
    'Authorization': `Api-Key ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    qrcode_data: qrcodeData
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "votre_cle_api_ici"
qrcode_data = "donnees_encodees_base64:signature"

url = "https://exemple.tibillet.org/api/scan/check_ticket/"
headers = {
    "Authorization": f"Api-Key {api_key}",
    "Content-Type": "application/json"
}
data = {
    "qrcode_data": qrcode_data
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

</TabItem>
</Tabs>

### Scanner un Billet

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="votre_cle_api_ici"
QRCODE_DATA="donnees_encodees_base64:signature"

curl -X POST "https://exemple.tibillet.org/api/scan/ticket/" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"qrcode_data\": \"${QRCODE_DATA}\"}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "votre_cle_api_ici";
const qrcodeData = "donnees_encodees_base64:signature";

fetch('https://exemple.tibillet.org/api/scan/ticket/', {
  method: 'POST',
  headers: {
    'Authorization': `Api-Key ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    qrcode_data: qrcodeData
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "votre_cle_api_ici"
qrcode_data = "donnees_encodees_base64:signature"

url = "https://exemple.tibillet.org/api/scan/ticket/"
headers = {
    "Authorization": f"Api-Key {api_key}",
    "Content-Type": "application/json"
}
data = {
    "qrcode_data": qrcode_data
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

</TabItem>
</Tabs>