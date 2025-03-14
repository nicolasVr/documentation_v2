---
sidebar_position: 110
slug: iframe
title: Intégration
description: Integrer vos adhésions et évènements sur votre site web.
keywords: [ ticketing, billetterie, webhook, api ]
wiktags: [ ticketing, billetterie, webhook, api ]
image: https://tibillet.org/img/embed.jpg
authors: Jonas
---

Vous pouvez intégrer les pages d'adhésion et de billetterie à votre site web.

Utilisez une balise iframe en modifiant la route adéquate.

Exemple :

- Page adhésion : [https://lespass.demo.tibillet.org/memberships/embed/](https://lespass.demo.tibillet.org/memberships/embed/)
- Page évènement : [https://lespass.demo.tibillet.org/event/embed/](https://lespass.demo.tibillet.org/event/embed/)

```html title="iframe event"
<iframe src="https://lespass.demo.tibillet.org/event/embed/" width="100%" height="1000px"
        frameborder="0"></iframe>
```
<iframe src="https://lespass.demo.tibillet.org/event/embed/" width="100%" height="1000px" frameborder="0"></iframe>

```html title="iframe membership"
<iframe src="https://lespass.demo.tibillet.org/memberships/embed/" width="100%" height="1000px"
        frameborder="0"></iframe>
```

<iframe src="https://lespass.demo.tibillet.org/memberships/embed/" width="100%" height="1000px" frameborder="0"></iframe>