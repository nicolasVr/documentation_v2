---
sidebar_position: 41
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

- Page adhésion : [https://lespass.demo.tibillet.org/memberships/embed/](https://lespass.demo.tibillet.org/memberships/embed/)
- Page évènement : [https://lespass.demo.tibillet.org/event/embed/](https://lespass.demo.tibillet.org/event/embed/)

```html title="iframe"
<iframe src="https://lespass.demo.tibillet.org/event/embed/" width="100%" height="1000px"
        frameborder="0"></iframe>
```

<iframe src="https://lespass.demo.tibillet.org/memberships/?embed=true" width="100%" height="1000px"
        frameborder="0"></iframe>

