---
sidebar_position: 15
slug: scan-ticket
title: Ticket Scanning API
description: API for scanning and validating tickets using mobile devices.
keywords: [ticketing, scanning, mobile, API, QR code, pairing]
wiktags: [ticketing, scanning, mobile, API, QR code, pairing]
authors: jonas
---

# Ticket Scanning API

The Ticket Scanning API allows you to scan and validate tickets using mobile devices. This API is designed to be used with the TiBillet mobile scanning application.

## Endpoints

### Pair a Device

```
GET /scan/{token}/pair
```

This endpoint is used to pair a mobile device with the TiBillet system. The token is generated when creating a new scanning device in the admin interface.

#### Response

```json
{
  "success": true,
  "message": "Device successfully paired",
  "api_key": "YOUR_API_KEY",
  "device_uuid": "12345678-1234-5678-1234-567812345678",
  "device_name": "Entrance Scanner"
}
```

### Test API Connection

```
GET /scan/test_api/
```

This endpoint is used to test if the API key is valid and the connection to the server is working.

#### Headers

| Name | Required | Description |
|------|----------|-------------|
| Authorization | Yes | API key in the format: `Api-Key YOUR_API_KEY` |

#### Response

```json
{
  "success": true,
  "message": "API key is valid",
  "device_info": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "name": "Entrance Scanner",
    "claimed": true,
    "archived": false
  },
  "server_info": {
    "tenant": "Example Organization",
    "domain": "example.tibillet.org",
    "timestamp": "2023-06-15T14:30:45.123456+00:00"
  }
}
```

### Check Ticket Status

```
POST /scan/check_ticket/
```

This endpoint is used to check the status of a ticket without scanning it.

#### Headers

| Name | Required | Description |
|------|----------|-------------|
| Authorization | Yes | API key in the format: `Api-Key YOUR_API_KEY` |
| Content-Type | Yes | Must be `application/json` |

#### Request Body

```json
{
  "qrcode_data": "BASE64_ENCODED_DATA:SIGNATURE"
}
```

#### Response

```json
{
  "success": true,
  "message": "Ticket information retrieved",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valid and not scanned",
    "is_scanned": false,
    "event": "Example Event",
    "first_name": "John",
    "last_name": "Doe",
    "price": "General Admission",
    "product": "Concert Ticket",
    "scanned_by": null
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

### Scan Ticket

```
POST /scan/ticket/
```

This endpoint is used to scan and validate a ticket.

#### Headers

| Name | Required | Description |
|------|----------|-------------|
| Authorization | Yes | API key in the format: `Api-Key YOUR_API_KEY` |
| Content-Type | Yes | Must be `application/json` |

#### Request Body

```json
{
  "qrcode_data": "BASE64_ENCODED_DATA:SIGNATURE"
}
```

#### Response (Success)

```json
{
  "success": true,
  "message": "Ticket successfully scanned",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valid and scanned",
    "event": "Example Event",
    "first_name": "John",
    "last_name": "Doe",
    "price": "General Admission",
    "product": "Concert Ticket"
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

#### Response (Already Scanned)

```json
{
  "success": false,
  "message": "Ticket already scanned",
  "ticket": {
    "uuid": "12345678-1234-5678-1234-567812345678",
    "status": "Valid and scanned",
    "event": "Example Event",
    "first_name": "John",
    "last_name": "Doe",
    "price": "General Admission",
    "product": "Concert Ticket",
    "scanned_by": "98765432-9876-5432-9876-543298765432"
  },
  "reservation": {
    "uuid": "87654321-8765-4321-8765-432187654321",
    "tickets_count": 2
  }
}
```

## Code Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Pairing a Device

<Tabs>
<TabItem value="bash" label="Bash">

```bash
# The token is obtained from the QR code in the admin interface
TOKEN="your_token_here"

curl -X GET "https://example.tibillet.org/scan/${TOKEN}/pair"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// The token is obtained from the QR code in the admin interface
const token = "your_token_here";

fetch(`https://example.tibillet.org/scan/${token}/pair`, {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

# The token is obtained from the QR code in the admin interface
token = "your_token_here"

url = f"https://example.tibillet.org/scan/{token}/pair"

response = requests.get(url)
print(response.json())
```

</TabItem>
</Tabs>

### Testing API Connection

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="your_api_key_here"

curl -X GET "https://example.tibillet.org/scan/test_api/" \
  -H "Authorization: Api-Key ${API_KEY}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "your_api_key_here";

fetch('https://example.tibillet.org/scan/test_api/', {
  method: 'GET',
  headers: {
    'Authorization': `Api-Key ${apiKey}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "your_api_key_here"

url = "https://example.tibillet.org/scan/test_api/"
headers = {
    "Authorization": f"Api-Key {api_key}"
}

response = requests.get(url, headers=headers)
print(response.json())
```

</TabItem>
</Tabs>

### Checking Ticket Status

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="your_api_key_here"
QRCODE_DATA="base64_encoded_data:signature"

curl -X POST "https://example.tibillet.org/scan/check_ticket/" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"qrcode_data\": \"${QRCODE_DATA}\"}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "your_api_key_here";
const qrcodeData = "base64_encoded_data:signature";

fetch('https://example.tibillet.org/scan/check_ticket/', {
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
.catch(error => console.error('Error:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "your_api_key_here"
qrcode_data = "base64_encoded_data:signature"

url = "https://example.tibillet.org/scan/check_ticket/"
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

### Scanning a Ticket

<Tabs>
<TabItem value="bash" label="Bash">

```bash
API_KEY="your_api_key_here"
QRCODE_DATA="base64_encoded_data:signature"

curl -X POST "https://example.tibillet.org/scan/ticket/" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"qrcode_data\": \"${QRCODE_DATA}\"}"
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const apiKey = "your_api_key_here";
const qrcodeData = "base64_encoded_data:signature";

fetch('https://example.tibillet.org/scan/ticket/', {
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
.catch(error => console.error('Error:', error));
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

api_key = "your_api_key_here"
qrcode_data = "base64_encoded_data:signature"

url = "https://example.tibillet.org/scan/ticket/"
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