---
sidebar_position: 35
slug: admin_duplicate_event
title: Duplicating Events
description: Learn how to duplicate events and understand the duplication process.
keywords: [billetterie, ticketing, event, duplicate, copy]
wiktags: [billetterie, ticketing, event, duplicate, copy]
authors: Jonas
---

# Duplicating Events

TiBillet allows you to easily duplicate existing events with different date options. This feature is particularly useful for recurring events or when you need to create similar events with minor modifications.

## How to Duplicate an Event

1. Log in to the administration page of your ticketing instance.
2. Navigate to the **Events** section in the left sidebar.
3. Find the event you want to duplicate in the list.
4. In the actions column on the right, you'll see three duplication options:
   - **Duplicate (day+1)**: Creates a copy of the event scheduled for the next day
   - **Duplicate (week+1)**: Creates a copy of the event scheduled for the next week
   - **Duplicate (month+1)**: Creates a copy of the event scheduled for the next month

![Event duplication buttons](/img/event_duplication_buttons.jpg)

## What Gets Duplicated

When you duplicate an event, the following elements are copied:

- All basic event information (name, description, capacity, etc.)
- Associated products
- Tags
- Form options (radio buttons and checkboxes)
- Carousel images
- **Child events of type ACTION** (volunteering opportunities)

## Important Notes About Duplicated Events

### 1. Event Name and Publication Status

- The duplicated event will have the same name as the original but with **[DUPLICATE]** prefix added
- **You should remove the [DUPLICATE] prefix** before publishing the event
- **Duplicated events are not published by default** - you need to edit them and check the "Publish" option

### 2. Child Events (Volunteering)

- Child events of type ACTION are automatically duplicated
- Unlike the parent event, child events are set to "Published" by default
- Their dates are adjusted according to the duplication option you selected (day+1, week+1, or month+1)

### 3. Limitations

- If an event with the same name and date already exists, the duplication will fail
- Reservations and tickets associated with the original event are not duplicated

## Editing a Duplicated Event

After duplicating an event, you should:

1. Edit the duplicated event to remove the **[DUPLICATE]** prefix from the name
2. Review all event details to ensure they are correct
3. Set the "Publish" option to make the event visible in the calendar
4. Save your changes

## Example Use Cases

- **Regular weekly events**: Use the "week+1" option to quickly create next week's event
- **Monthly meetups**: Use the "month+1" option for recurring monthly events
- **Multi-day festivals**: Use the "day+1" option to create events for consecutive days