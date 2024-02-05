---
sidebar_position: 41
slug: iframe
title: Integration
description: Integrate your reservations on your website.
keywords: [ ticketing, billetterie, webhook, api, reservations, booking ]
wiktags: [ ticketing, billetterie, webhook, api, reservations, booking ]
image: https://tibillet.org/img/embed_email.jpg

authors: Jonas
---

You can integrate ticketing into your website using an iframe tag by modifying the appropriate route.

Example :

- event link : https://demo.betabillet.tech/event/concert-sly-sugar-090626-2114/
- embed link : https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/

Example :

- embed link : https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/

```html title="iframe"
<iframe src="https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/" width="100%" height="1000px"
        frameborder="0"></iframe>
```

<iframe src="https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/" width="100%" height="1000px"
        frameborder="0"></iframe>

<details>
<summary>Documentation technique</summary>
In "../Front/src/router/routes.js", 2 possibilities :

### 1 - existing route, add alias :

```
{
    path: '/event/:slug',
    // si iframe
    alias: '/event/embed/:slug',
    name: 'Event',
    component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
}
```

### 2 - new route :

```
{
    path: '/event/embed/:slug',
    name: 'Event',
    component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
}
```

### Attention :

All urls containing the word "embed" are to be used only in an "iframe".
</details>
