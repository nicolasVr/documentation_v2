---
title: User stories
description: >
  Adoni, Irene, Hamza: the fictional users of KindCity. Twelve persona for a better understanding of our overall UX needs.
keywords: [third places, volunteer, admin, customer, bar, festival, organizer, user stories, user persona]
tags: [third places, volunteer, admin, customer, bar, festival, organizer]
authors: [kaya]
---

# KindCity, a fictional TiBillet federation

Let's make a few personas based on [our user roles](user-roles.md) to keep going. They're using a collaborative, non-hierarchical third place called TiSpace, with a space for play, exhibitions and a bar. Some also work for a soup kitchen called PotoPotes. Together, they form a federation called KindCity.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Adoni](../assets/persona/adoni.png)

</div>
<figcaption markdown>

## Adoni, they/them

*Event planner for TiSpace*

</figcaption>
</figure>

Adoni is smart, serious and convinced of their good taste. They *will* make TiSpace into an avant-garde art and performance space.

#### Their stories

> *As* an even planner,  
  *I want to* access all the events, confirmed and otherwise,  
  *in order to* plan the upcoming cultural season (5 months).

??? example "Suggestions"
    - event publication status property
    - public list of published events
    - admin-only list of unpublished events
    - admin-only season graph of events, regardless of published status. Can be reordered and opened in new page to edit. Distance between event end and next event start written explicitely. Location + time overlap show warning.
    
    [Event planning UI](ui/event-planning.md){ .md-button } [Event API](api/event.md){ .md-button }

---

> *As* Adoni,  
  *I want to* promote specific events about TiSpace on social media  
  *in order to* show off.

---

> *As* a TiSpace admin,  
  *I want to* be able to limit the amount of tickets  
  *in order to* not let the space get too crowded and break regulations.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Irene](../assets/persona/irene.png)

</div>
<figcaption markdown>

## Irene, she/her

*Accountant and soup lady for PotoPotes*

</figcaption>
</figure>

Irene is always energetic and very involved in the soup kitchen she cofounded with Fezaar. She wants to expand the federation through her city so more volunteers come help.

#### Her stories

> *As* a soup kitchen cashier,  
  *I want to* easily record the name-your-price soup sales  
  *in order to* serve people better.

---

> *As* an accountant,  
  *I want to* export the operations into accounting software  
  *in order to* deal with taxes and declarations.

---

> *As* a volunteer,  
  *I want to* have a different kind of terminal  
  *in order to* be able to operate it when I'm wearing food gloves.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Hamza](../assets/persona/hamza.png)

</div>
<figcaption markdown>

## Hamza, he/him

*Aspiring rapper*

</figcaption>
</figure>

Hamza is the first in his family to speak fluently the language of this place. At 14, he dreams of making his way into the world and taking some of the burden off his parent's back. They all see a social worker at TiSpace on a regular basis (he translates). After hearing a few of his bars, he was invited to perform there by Adoni. His parents accepted with reservations, as he is a minor in a very adult space. They also don't like him working.

#### His stories

> *As* a rapper,  
  *I want* to get notified of open mic nights  
  *in order to* perform and get recognition.

---

> *As* Hamza,  
  *I want* to be able to bring my friends and pay soft drinks for them  
  *in order to* look cool.

---

> *As* a minor,  
  *I want* the HeartBits on my card to be of usable in shops by my parents  
  *in order to* help with household expenses.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![James](../assets/persona/james.png)

</div>
<figcaption markdown>

## James, he/him

*KindCity member*

</figcaption>
</figure>

James lives in a van and volunteers in the federation in exchange for HeartBits, which allows him to afford food and communal showers. He's trying to setup a non-profit local insurance that covers the neighbourhood.

#### His stories

> *As* a card holder,  
  *I want to* be able to read my card at a terminal  
  *in order to* not require a smartphone.

---

> *As* James,  
  *I want to* see a list of what I can afford  
  *in order to* next to my account balance.

---

> *As* a volunteer,  
  *I want to* have a place to speak and ask questions  
  *in order to* give a voice to my very specific needs.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Samia](../assets/persona/samia.png)

</div>
<figcaption markdown>

## Samia, she/they

*TiSpace usher and KindCity board advisor*

</figcaption>
</figure>

Working part-time at a supermarket, Samia is an avid music fan, always volunteering for concerts to happen. She also dreams of organizing a music festival in the city and joined the KindCity board for that purpose.

#### Their stories

> *As* an usher,  
  *I want to* have access to the bookings  
  *in order to* help people who lost their ticket.

---

> *As* a coordinator,  
  *I want to* see where HeartBits are circulating and where they're stagnating  
  *in order to* improve our presence in the city.

---

> *As* Samia,  
  *I want* reminders about my favorite artists  
  *in order to* volunteer when they get announced.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Raphael](../assets/persona/raphael.png)

</div>
<figcaption markdown>

## Raphael, he/him

*TiSpace bar customer*

</figcaption>
</figure>

Raphael just likes the vibe at TiSpace. He goes on dates there *a lot*. To him, TiBillet is a nice initiative, he just hasn't felt curious enough to go to a show or pay his tab in HeartBits.

Also, it's money, you know? You don't play with money.

#### His stories

> *As* a customer,  
  *I want* the cash register to work just as well as a regular one  
  *in order to* not be discouraged by new fancy tech.

---

> *As* a someone who dates a lot,  
  *I want to* be able to split the bill however I see fit  
  *in order to* avoid an embarassing moment at the table.

---

> *As* Raphael,  
  *I want to* be able to have my HeartBits refunded  
  *in order to* feel safe.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Godfrey](../assets/persona/godfrey.png)

</div>
<figcaption markdown>

## Godfrey, he/them

*TiSpace bartender and KindCity member*

</figcaption>
</figure>

Godfrey's own community bar had its non-profit lease taken away when their neighboorhood gentrified. He invested himself in the new TiSpace project because its stability doesn't relies on public funding and the political whims of the city council. Having burned out, they've taken a step back from the organizing and are happy getting their needs met through "volunteer" bartending in exchange for HeartBits.

#### His stories

> *As* a volunteer,  
  *I want* to have a lot of organizational freedom  
  *in order to* not feel exploited.

---

> *As* Godfrey,  
  *I want to* have insight into of the decisions of the KindCity board  
  *in order to* trust them.

---

> *As* a card holder,  
  *I want to* be able to rely on KindCity's backing  
  *in order to* make significant purchases I can't afford on HeartBits.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Cynthia](../assets/persona/cynthia.png)

</div>
<figcaption markdown>

## Cynthia, she/her

*Community elder and KindCity board advisor*

</figcaption>
</figure>

Cynthia has lived in the neighboorhood for fifty years. Young people might not always want her advice, but she's gonna give it! Her hope is to revitalize the streets, small shops and former "village" vibe.

#### Her stories

> *As* a coordinator,  
  *I want* to be able to send invites to federation members  
  *in order to* check in and discuss points of order.

---

> *As* a community elder,  
  *I want* the will of my community to have weight in KindCity  
  *in order to* believe in its mission.

---

> *As* Cynthia,  
  *I want* be able to hold federation events  
  *in order to* feel togetherness.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Alastair](../assets/persona/alastair.png)

</div>
<figcaption markdown>

## Alastair, he/him

*Artist and performer at TiSpace*

</figcaption>
</figure>

Alastair has a vision, and a bigger-than-life attitude. Whether he's displaying his lastest chainsaw sculptures or performing as Mimi Zandry, he's giving it his all. He wants to encourage the federation's growth by accepting HeartBits for his performances and some of his art.

#### His stories

> *As* a featured artist,  
  *I want* to be able to show my pieces up for sale to people with HeartBits  
  *in order to* sell them.

---

> *As* Alastair,  
  *I want* to be able to operate my own Lespass and Laboutik from my smartphone  
  *in order to* get tips and manage my sales.

---

> *As* a performer,  
  *I want* be able to update my TiSpace events  
  *in order to* not let my voice get diluted by institution.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Shane](../assets/persona/shane.png)

</div>
<figcaption markdown>

## Shane, she/her

*Resident craftswoman at TiSpace*

</figcaption>
</figure>

After spending her twenties in sales, Shane left it all behind in order to pursue jewelry crafting. She has a little stall in the TiSpace courtyard, and an "arrangement" with the other members where she can drink on a tab as long as she makes it back in sales.

#### Her stories

> *As* resident,  
  *I want to* have a tab  
  *in order to* have more freedom with my income.

---

> *As* an craftswoman,  
  *I want* my jewelry to be claimed online but only paid on physical hand-off  
  *in order to* not have to deal with deliveries.

---

> *As* Shane,  
  *I want* to be able to ask for a minimum ratio of "real money" from my buyers  
  *in order to* help with rent.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Fezaar](../assets/persona/fezaar.png)

</div>
<figcaption markdown>

## Fezaar, he/them

*Co-creator of PotoPotes and TiSpace bartender*

</figcaption>
</figure>

Fezaar co-created PotoPotes but doesn't manage it anymore. They have instead invested their time in the TiSpace bar. As a recovered alcoholic, he understands the importance of sober-friendly spaces in his community and hold SoberUp, a mocktail bar, for the first half of every week at TiSpace.

#### His stories

> *As* a part of a vulnerable community,  
  *I want* to be able to voice my concerns and needs  
  *in order to* be safe in the federation spaces.

---

> *As* a former alcoholic,  
  *I want* to know in advance which events and going to be alcohol-free  
  *in order to* not show up at the wrong time.

---

> *As* a bartender,  
  *I want* be able to signal misbehaving members  
  *in order to* compare notes and have discussions with them / about them before incidents happen.

---

<figure style="display:flex; margin-left: 0; text-align:left" markdown>
<div style="width:8rem; margin-right:2rem" markdown>

![Pat](../assets/persona/pat.png)

</div>
<figcaption markdown>

## Pat, they/them

*Art curator and KindCity member*

</figcaption>
</figure>

Pat loooves the indie scene. They don't tend to go out much as they get really sick in crowds and have a ton of allergies. They turned an inherited sandwich shop into a gallery and they're hoping to find upcoming artists to exhibit there.

#### Their stories

> *As* someone fragile,  
  *I want* to be able to find detailed info on events  
  *in order to* not get sick in public.

---

> *As* an art curator,  
  *I want* a list of past events and exhibits  
  *in order to* see what I missed.

---

> *As* Pat,  
  *I want* to be reminded of the exhibitions that interest me  
  *in order to* attend them.

---

[Persona avatars](https://getavataaars.com) curtesy of Pablo Stanley & Fang-Pen Lin.
