---
sidebar_position: 2
slug: apikey
title: API Keys
description: Récuperez le token de connection.
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

:::caution
La documentation est en cours de rédaction.
N'hésitez pas à nous contacter par [mail](mailto:contact@tibillet.re),
sur [Rocket Chat](https://chat.communecter.org/channel/Tibillet/) ou sur [Discord](https://discord.gg/ecb5jtP7vY) si
vous avez la moindre question.
:::

Il est possible de gérerer une clé d'api pour certaines actions.

- Allez sur votre interface d'administration.

:::tip
Vous pouvez tester sur [https://demo.betabillet.tech/admin](https://demo.betabillet.tech/admin)

log / pass : adminou@tibillet.re / miaoumiaou
:::

- Allez dans le menu Api Keys
- Cliquez sur le bouton en haut à droite : "AJOUTER API KEY"
- Donnez-lui un nom en rapport à l'application voulue.
- Choisissez le niveau d'autorisation que vous souhaitez.
- Entrez l'adresse ip source des futures requetes.
- Activez la case "Créer / Révoquer"
- Enregistrez

La clé appaitra dans un bandeau. Copiez-la et stockez-la en lieu sûr. Elle est stockée chiffrée coté serveur.

## Testez la clé d'api.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="wget" label="wget">

```bash
wget --quiet \
  --method GET \
  --header 'Authorization: Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW' \
  --output-document \
  - http://demo.betabillet.tech/api/user/keytest/
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl --request GET \
  --url https://demo.betabillet.tech/admin/api/user/keytest/ \
  --header 'Authorization: Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW'
```

</TabItem>

<TabItem value="py" label="Python">

```py
import requests

url = "https://demo.betabillet.tech/api/user/keytest/"

payload = ""
headers = {"Authorization": "Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW"}

response = requests.request("GET", url, data=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="js" label="Javascript">

```js
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://demo.betabillet.tech/api/user/keytest/");
xhr.setRequestHeader("Authorization", "Api-Key Map0K71T.rcs82Q66NuCUCuyTmnjVhmwhfl0VnOsW");

xhr.send(data);
```

</TabItem>
</Tabs>

Doit rendre :

```json title=json response
{
	"auth": "event",
	"ip_request": "12.34.56.78",
	"ip_valid": true
}
```

"ip_valid" est à true si l'ip source de la requête est la même que celle renseignée dans l'administration
