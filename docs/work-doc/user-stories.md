---
sidebar_position: 1
slug: user-stories
title: User stories
keywords: [third places, volunteer, admin, customer, bar, festival, organizer, user stories, user persona]
tags: [third places, volunteer, admin, customer, bar, festival, organizer]
authors: kaya
---

# User stories

One of the straight-forward ways to define features is through user stories. I'm not gonna make a tutorial about it, [go find some](https://ddg.gg/?q=user-story+tutorial)!

## Who uses TiBillet?

Different roles use each engine.

|Role|Engines|Device|Requirements|
|----|-------|------|-------|
|Cashiers|LaBoutik|🔢 Register|- hold the LaBoutik register<br/>- have an understanding of sales, stocks and the LaBoutik register app<br/>- interact with Buyers, Card Holders and Accountants|
|Accountants|LaBoutik|💻 Laptop|- survey cash and cashless flow<br/>- have an understanding of money regulations, budget and LaBoutik transaction history<br/>- interact with Cashiers, Event Planners and Coordinators|
|Buyers|LaBoutik|🔢 Register|- buy cash articles<br/>- hear about cashless cards and benefits for volunteers<br/>- interact with Cashiers|
|Card Holders|LaBoutik, Lespass|💻📱 Laptop and smartphone|- suscribers, collective members or cashless buyers<br/>- have an understanding of their cashless wallet, Lespass navigation and events<br/>- interact with Cashiers and Ushers|
|Ushers|Lespass|📱 Smarthphone|- open and check in for events<br/>- understand Card Holder profiles, Lespass events and bookings<br/>- interact with Card Holders and Event Planners|
|Event Planners|Lesspass|💻 Laptop|- organize events plan for use of a specific Lespass space<br/>- have an understanding or planning, cultural networks, the Lespass calendar and ticket pricing<br/>- interact with Accountants, Ushers and Coordinators|
|Coordinators|Fedow|💻 Laptop|- consult with spaces, federations and the general population to reach consensus on what is federated where and how<br/>- have an understanding of horizontal organizing, mediation, local economics and the Fedow administration<br/>- interact with Accountants, Event Planners and anyone with a opinion|

![](/img/roles-diagram.png)

:::note[First draft]
This is a first attempt at defining the user roles that TiBillet has to account for. Feel free to correct or add to them, this work document will be better for it!
:::

{/* the mermaid ext doesn't work but you can generate the diagram in the live editor on the mermaid website following this code:

graph LR
    
    a <--> c & e & o
    c <--> b & h
    h & e <--> u
    o <--> e

    h[Card Holders 💻📱]

    subgraph LaBoutik
        a[Accountants 💻];  b[Buyers 🖥️]; c[Cashiers 🖥️]
    end

    subgraph Lespass
        u[Ushers 📱];  e[Event Planners 💻]
    end

    subgraph Fedow
        o[Coordinators 💻]
    end
*/}

## KindCity, a fictional TiBillet federation

Let's make a few personas based on these roles to keep going. They're using a collaborative, non-hierarchical third place called TiSpace, with a space for play, exhibitions and a bar. Some also work for a soup kitchen called PotoPotes. Together, they form a federation called KindCity.

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Adoni](/img/persona/adoni.png)

</div>
<figcaption>

### Adoni, they/them, event planner for TiSpace

</figcaption>

</figure>
<div>

Adoni is smart, serious and convinced of their good taste. They *will* make TiSpace into an avant-garde art and performance space.

#### Their stories

> *As* an even planner,  
> *I want to* access all the events, confirmed and otherwise,  
> *in order to* plan the upcoming cultural season (5 months).

> *As* Adoni,  
> *I want to* promote specific events about TiSpace on social media  
> *in order to* show off.

> *As* a TiSpace admin,  
> *I want to* be able to limit the amount of tickets  
> *in order to* not let the space get too crowded and break regulations.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Irene](/img/persona/irene.png)

</div>
<figcaption>

### Irene, she/her, accountant and soup lady for PotoPotes

</figcaption>
</figure>
<div>

Irene is always energetic and very involved in the soup kitchen she cofounded with Fezaar. She wants to expand the federation through her city so more volunteers come help.

#### Her stories

> *As* a soup kitchen cashier,  
> *I want to* easily record the name-your-price soup sales  
> *in order to* serve people better.

> *As* an accountant,  
> *I want to* export the operations into accounting software  
> *in order to* deal with taxes and declarations.

> *As* a volunteer,  
> *I want to* have a different kind of terminal  
> *in order to* be able to operate it when I'm wearing food gloves.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Hamza](/img/persona/hamza.png)

</div>
<figcaption>

### Hamza, he/him, aspiring rapper

</figcaption>
</figure>
<div>

Hamza is the first in his family to speak fluently the language of this place. At 14, he dreams of making his way into the world and taking some of the burden off his parent's back. They all see a social worker at TiSpace on a regular basis (he translates). After hearing a few of his bars, he was invited to perform there by Adoni. His parents accepted with reservations, as he is a minor in a very adult space. They also don't like him working.

#### His stories

> *As* a rapper,  
> *I want* to get notified of open mic nights  
> *in order to* perform and get recognition.

> *As* Hamza,  
> *I want* to be able to bring my friends and pay soft drinks for them  
> *in order to* look cool.

> *As* a minor,  
> *I want* the HeartBits on my card to be of usable in shops by my parents  
> *in order to* help with household expenses.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![James](/img/persona/james.png)

</div>
<figcaption>

### James, he/him, KindCity member

</figcaption>
</figure>
<div>

James lives in a van and volunteers in the federation in exchange for HeartBits, which allows him to afford food and communal showers. He's trying to setup a non-profit local insurance that covers the neighbourhood.

#### His stories

> *As* a card holder,  
> *I want to* be able to read my card at a terminal  
> *in order to* not require a smartphone.

> *As* James,  
> *I want to* see a list of what I can afford  
> *in order to* next to my account balance.

> *As* a volunteer,  
> *I want to* have a place to speak and ask questions  
> *in order to* give a voice to my very specific needs.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Samia](/img/persona/samia.png)

</div>
<figcaption>

### Samia, she/they, TiSpace usher and KindCity board advisor

</figcaption>
</figure>
<div>

Working part-time at a supermarket, Samia is an avid music fan, always volunteering for concerts to happen. She also dreams of organizing a music festival in the city and joined the KindCity board for that purpose.

#### Their stories

> *As* an usher,  
> *I want to* have access to the bookings  
> *in order to* help people who lost their ticket.

> *As* a coordinator,  
> *I want to* see where HeartBits are circulating and where they're stagnating  
> *in order to* improve our presence in the city.

> *As* Samia,  
> *I want* reminders about my favorite artists  
> *in order to* volunteer when they get announced.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Raphael](/img/persona/raphael.png)

</div>
<figcaption>

### Raphael, he/him, TiSpace bar customer

</figcaption>
</figure>
<div>

Raphael just likes the vibe at TiSpace. He goes on dates there *a lot*. To him, TiBillet is a nice initiative, he just hasn't felt curious enough to go to a show or pay his tab in HeartBits.

Also, it's money, you know? You don't play with money.

#### His stories

> *As* a customer,  
> *I want* the cash register to work just as well as a regular one  
> *in order to* not be discouraged by new fancy tech.

> *As* a someone who dates a lot,  
> *I want to* be able to split the bill however I see fit  
> *in order to* avoid an embarassing moment at the table.

> *As* Raphael,  
> *I want to* be able to have my HeartBits refunded  
> *in order to* feel safe.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Godfrey](/img/persona/godfrey.png)

</div>
<figcaption>

### Godfrey, he/them, TiSpace bartender and KindCity member

</figcaption>
</figure>
<div>

Godfrey's own community bar had its non-profit lease taken away when their neighboorhood gentrified. He invested himself in the new TiSpace project because its stability doesn't relies on public funding and the political whims of the city council. Having burned out, they've taken a step back from the organizing and are happy getting their needs met through "volunteer" bartending in exchange for HeartBits.

#### His stories

> *As* a volunteer,  
> *I want* to have a lot of organizational freedom  
> *in order to* not feel exploited.

> *As* Godfrey,  
> *I want to* have insight into of the decisions of the KindCity board  
> *in order to* trust them.

> *As* a card holder,  
> *I want to* be able to rely on KindCity's backing  
> *in order to* make significant purchases I can't afford on HeartBits.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Cynthia](/img/persona/cynthia.png)

</div>
<figcaption>

### Cynthia, community elder and KindCity board advisor

</figcaption>
</figure>
<div>

Cynthia has lived in the neighboorhood for fifty years. Young people might not always want her advice, but she's gonna give it! Her hope is to revitalize the streets, small shops and former "village" vibe.

#### Her stories

> *As* a coordinator,  
> *I want* to be able to send invites to federation members  
> *in order to* check in and discuss points of order.

> *As* a community elder,  
> *I want* the will of my community to have weight in KindCity  
> *in order to* believe in its mission.

> *As* Cynthia,  
> *I want* be able to hold federation events  
> *in order to* feel togetherness.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Alastair](/img/persona/alastair.png)

</div>
<figcaption>

### Alastair, he/him, artist and performer at TiSpace

</figcaption>
</figure>
<div>

Alastair has a vision, and a bigger-than-life attitude. Whether he's displaying his lastest chainsaw sculptures or performing as Mimi Zandry, he's giving it his all. He wants to encourage the federation's growth by accepting HeartBits for his performances and some of his art.

#### His stories

> *As* a featured artist,  
> *I want* to be able to show my pieces up for sale to people with HeartBits  
> *in order to* sell them.

> *As* Alastair,  
> *I want* to be able to operate my own Lespass and Laboutik from my smartphone  
> *in order to* get tips and manage my sales.

> *As* a performer,  
> *I want* be able to update my TiSpace events  
> *in order to* not let my voice get diluted by institution.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Shane](/img/persona/shane.png)

</div>
<figcaption>

### Shane, she/her, resident craftswoman at TiSpace

</figcaption>
</figure>
<div>

After spending her twenties in sales, Shane left it all behind in order to pursue jewelry crafting. She has a little stall in the TiSpace courtyard, and an "arrangement" with the other members where she can drink on a tab as long as she makes it back in sales.

#### Her stories

> *As* resident,  
> *I want to* have a tab  
> *in order to* have more freedom with my income.

> *As* an craftswoman,  
> *I want* my jewelry to be claimed online but only paid on physical hand-off  
> *in order to* not have to deal with deliveries.

> *As* Shane,  
> *I want* to be able to ask for a minimum ratio of "real money" from my buyers  
> *in order to* help with rent.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Fezaar](/img/persona/fezaar.png)

</div>
<figcaption>

### Fezaar, he/them, co-creator of PotoPotes and SoberUp bartender

</figcaption>
</figure>
<div>

Fezaar co-created PotoPotes but doesn't manage it anymore. They have instead invested their time in the TiSpace bar. As a recovered alcoholic, he understands the importance of sober-friendly spaces in his community and hold SoberUp, a mocktail bar, half of every week.

#### His stories

> *As* a part of a vulnerable community,  
> *I want* to be able to voice my concerns and needs  
> *in order to* be safe in the federation spaces.

> *As* a former alcoholic,  
> *I want* to know in advance which events and going to be alcohol-free  
> *in order to* not show up at the wrong time.

> *As* a bartender,  
> *I want* be able to signal misbehaving members  
> *in order to* compare notes and have discussions with them / about them before incidents happen.

</div>
</article>

---

<article style={{ display: 'flex' }}>
<figure style={{ width: '18rem' }}>
<div style={{ height: '16rem', width: '15rem', marginBottom: '1rem' }}>

![Pat](/img/persona/pat.png)

</div>
<figcaption>

### Pat, they/them, art curator and KindCity member

</figcaption>
</figure>
<div>

Pat loooves the indie scene. They don't tend to go out much as they get really sick in crowds and have a ton of allergies. They turned an inherited sandwich shop into a gallery and they're hoping to find upcoming artists to exhibit there.

#### Their stories

> *As* someone fragile,  
> *I want* to be able to find detailed info on events  
> *in order to* not get sick in public.

> *As* an art curator,  
> *I want* a list of past events and exhibits  
> *in order to* see what I missed.

> *As* Pat,  
> *I want* to be reminded of the exhibitions that interest me  
> *in order to* attend them.

</div>
</article>

---


[Random avatars](https://getavataaars.com) curtesy of Pablo Stanley & Fang-Pen Lin.
