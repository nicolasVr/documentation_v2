---
title: Webhooks
description: Send a POST for each confirmed booking.
keywords: [ticketing, billetterie, webhook, api]
tags: [ticketing, billetterie, webhook, api]
authors: [Jonas]
---

It is possible to create webhooks after each event carried out on the ticket office in the administration interface.

example : [https://demo.betabillet.tech/adminBaseBillet/webhook/](https://demo.betabillet.tech/adminBaseBillet/webhook/)

The webhook is triggered each time a free or paid reservation is validated, at the same time as the tickets are sent by email.

It is possible to see the last response to the query in the "Last response" field.

``` python title="Reservation"
# Celery task : Billetterie/DjangoFiles/BaseBillet/tasks.py

json = {
    "object": "reservation",
    "uuid": f"{reservation.uuid}",
    "state": f"{reservation.status}",
    "datetime": f"{reservation.datetime}",
}
```

It is then possible to retrieve more information about the reservation via the standard API [:link:](/en/api/bookings)
