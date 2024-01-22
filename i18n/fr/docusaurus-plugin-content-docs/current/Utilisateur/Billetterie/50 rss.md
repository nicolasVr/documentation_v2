---
sidebar_position: 50
slug: rss
title: Flux RSS
description: Syndication par flux RSS, suivez les derniers évènements.
keywords: [ticketing, billetterie, rss,]
wiktags: [ticketing, billetterie, rss,]
authors: Jonas
---


Un flux RSS est créé par Tenant. Il liste les 5 derniers évènements créés.

```
<tenant url>/rss/latest/feed
```
Example :
 [https://demo.betabillet.tech/rss/latest/feed](https://demo.betabillet.tech/rss/latest/feed).


Il est structuré de cette façon :

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Demo : Derniers évènements créés</title>
        <link>https://demo.betabillet.tech/rss/latest/feed/</link>
        <description>Derniers évènements créés</description>
        <atom:link href="http://example.com/rss/latest/feed/" rel="self"></atom:link>
        <language>fr-fr</language>
        <lastBuildDate>Thu, 11 Aug 2022 12:26:00 +0000</lastBuildDate>
        <item>
            <title>Practical initiatives foreground : 05/15/27 14:30</title>
            <link>https://demo.betabillet.tech/event/practical-initiatives-foreground-051527-1830/</link>
            <description>Vel cum dicta deserunt. - Sit velit et. Dolorum perspiciatis magnam mollitia libero amet
                corrupti consectetur sit. Nemo cupiditate vel architecto alias dolores dolor quisquam perferendis
                voluptates. Impedit ut alias pariatur temporibus.
            </description>
            <pubDate>Thu, 11 Aug 2022 12:25:58 +0000</pubDate>
            <guid>https://demo.betabillet.tech/event/practical-initiatives-foreground-051527-1830/</guid>
            <enclosure length="166737" type="image/jpg"
                       url="https://demo.betabillet.tech/media/images/1080_pEFtyVm.med"></enclosure>
        </item>
        <item>
            <title>system TCP Functionality Account bypass : 06/26/23 14:30</title>
            <link>https://demo.betabillet.tech/event/system-tcp-functionality-account-bypass-062623-1830/</link>
            <description>Dicta quae enim quia placeat error fugiat neque. - Aspernatur ut esse ducimus. Quae nam
                blanditiis natus reiciendis vitae harum. Assumenda dolor animi. Et assumenda sapiente blanditiis fuga
                aut est magni. Ullam dicta quia dolorum pariatur sint fugiat aliquid similique rerum.
            </description>
            <pubDate>Thu, 11 Aug 2022 12:25:56 +0000</pubDate>
            <guid>https://demo.betabillet.tech/event/system-tcp-functionality-account-bypass-062623-1830/</guid>
            <enclosure length="38085" type="image/jpg"
                       url="https://demo.betabillet.tech/media/images/1080_Yx3xFuJ.med"></enclosure>
        </item>
    </channel>
</rss>
```