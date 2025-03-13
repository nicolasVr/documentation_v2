---
sidebar_position: 110
slug: iframe
title: Intégration
description: Integrer vos réservations sur votre site web.
keywords: [ ticketing, billetterie, webhook, api ]
wiktags: [ ticketing, billetterie, webhook, api ]
image: https://tibillet.org/img/embed_email.jpg

authors: Jonas
---

Vous pouvez intégrer les pages d'adhésion et de billetterie à votre site web.

Utilisez une balise iframe en modifiant la route adéquate.

Exemple :

- lien de la page adhésion : [https://lespass.demo.tibillet.org/memberships/](https://lespass.demo.tibillet.org/memberships/)
- lien embed : [https://lespass.demo.tibillet.org/memberships/?embed=true](https://lespass.demo.tibillet.org/memberships/?embed=true)

```html title="iframe"
<iframe src="https://lespass.demo.tibillet.org/memberships/?embed=true" width="100%" height="1000px"
        frameborder="0"></iframe>
```

<iframe src="https://lespass.demo.tibillet.org/memberships/?embed=true" width="100%" height="1000px"
        frameborder="0"></iframe>

