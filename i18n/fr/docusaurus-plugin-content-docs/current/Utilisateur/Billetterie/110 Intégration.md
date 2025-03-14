---
sidebar_position: 41
slug: iframe
title: Integration
description: Integrate your membership and events on your website.
keywords: [ ticketing, billetterie, webhook, api, reservations, booking ]
wiktags: [ ticketing, billetterie, webhook, api, reservations, booking ]
image: https://tibillet.org/img/embed.jpg
authors: Jonas
---

Vous pouvez intégrer vos évènements et vos adhésions dans votre site web à l'aide d'une balise iframe en modifiant la route appropriée.

Exemple :

- Memberships : [https://lespass.demo.tibillet.org/memberships/embed/](https://lespass.demo.tibillet.org/memberships/embed/)
- Events : [https://lespass.demo.tibillet.org/event/embed/](https://lespass.demo.tibillet.org/event/embed/)

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