---
title: Intégration
description: Integrer vos réservations sur votre site web.
keywords: [ ticketing, billetterie, webhook, api ]
tags: [ ticketing, billetterie, webhook, api ]
authors: [Jonas]
---

Vous pouvez intégrer la billetterie à votre site web en utilisant une balise iframe en modifiant la route adéquate.

Exemple :

- lien de l'évènenement : https://demo.betabillet.tech/event/concert-sly-sugar-090626-2114/
- lien embed : https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/

Exemple :

- lien embed : https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/

```html title="iframe"
<iframe src="https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/" width="100%" height="1000px"
        frameborder="0"></iframe>
```

<iframe src="https://demo.betabillet.tech/event/embed/concert-sly-sugar-090626-2114/" width="100%" height="1000px"
        frameborder="0"></iframe>

??? note "Documentation technique"
    Dans "../Front/src/router/routes.js", 2 possibilités :

    ### 1 - route existante, ajouter un alias :

    ``` js
    {
        path: '/event/:slug',
        // si iframe
        alias: '/event/embed/:slug',
        name: 'Event',
        component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
    }
    ```

    ### 2 - nouvelle route :

    ``` js
    {
        path: '/event/embed/:slug',
        name: 'Event',
        component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
    }
    ```

    ### Attention :

    Toutes les urls contenant le mot "embed" sont à utiliser uniquement dans un "iframe".
