---
sidebar_position: 2
slug: formbricks_settings
title: Connect your Formbricks forms
description: Create a new event in detail.
keywords: [billetterie, ticketing, event, free, formbricks]
wiktags: [billetterie, ticketing, event, free, formbricks]
authors: Axel
---

Here’s the English translation of your text:

---

# Configuring TiBillet

## 1. API Key

In the admin panel of your space ([https://yourstructure.lespass.tibillet.org/](https://yourstructure.lespass.tibillet.org/)):

1. Click on **"My Account"** at the top right.
2. Click on the red **"Administration"** button (key icon).
3. In the left-hand menu, scroll down and click on **"Formbricks"** then **"Configuration"**.

> **API Host** is the base address of your Formbricks account:
> - By default: [https://app.formbricks.com](https://app.formbricks.com)
> - If self-hosted: [https://yourstructure.formbricks.com](https://yourstructure.formbricks.com)

**In your Formbricks interface:**

1. Click on your logo at the bottom left, then go to **"Organization"** > **"API Keys"**.
2. Click on **"Add Production API Key"**.
3. Give it a name (in the label).
4. Under "Project Access", make sure the correct survey is selected, along with "Production" and "Read".
5. Check the "Read" box under "Organization Access" next to `environments.project.api_keys.access_control`.
Finally, copy the generated key (visible only once) after clicking "Add API Key".

:::danger
Make sure the **PRODUCTION** environment is selected under project access when creating the API key, or it will not work.
:::

**Back on TiBillet:**

1. Paste the key in the **"API KEY"** field.
2. Save.

If everything is correct, a green indicator will show **"API ok"**.

<video width="100%" controls src="/img/apiformbricks.mp4"></video>

---

## 2. Environment

**On Formbricks:**

1. Go to **"Configuration"** > **"Website & App Integration"**.
2. Scroll down to **"Your Environment Identifier"** and copy the key.

**On TiBillet:**

1. Click the **"+"** to add a new form.
2. Paste the key into the **"EnvironmentId"** field.
3. Enter the **"Trigger name"** (survey trigger):
   - In Formbricks, open your survey.
   - Go to **"Settings"** > **"Survey Triggers"**.
   - Remove old triggers if necessary.
   - Click **"Add Action"** > **"Capture New Action"**.
   - Fill in the required fields, especially **"What is your user doing?"**.
   - Create the action and copy the generated key.
4. Paste this key into **"Trigger name"** on TiBillet.

> **Product**: Select the products associated with this form (e.g. memberships, cart).

:::note
The **trigger** launches the Formbricks survey only after the TiBillet pre-form (name, surname, address) has been validated.
:::

<video width="100%" controls src="/img/envtriggerformbricks.mp4"></video>

---

# Configuring Formbricks

## 3. Making the survey persistent in TiBillet

1. Open your survey settings in Formbricks.
2. Enable the option **"Keep showing as long as conditions match"**.
3. Also check:
   - **"Ignore delay between surveys"**
   - **"Always show survey"**

> This ensures the survey remains visible as long as the conditions are met.

---

## 4. Layout and Display

1. Go to **"Survey Placement"**.
2. Enable the following options:
   - **"Placement Override"**
   - **"Centered Modal"**
   - **"Overlay Color"** (based on your preferences)
   - **"Do not allow"** (to prevent closing the survey by clicking outside)

:::danger
Make sure the **"Survey Placement in App"** is properly set to **"Centered Modal"** and **"Do not allow"** in **"Configuration"** > **"Look & Feel"**.
:::

---

## 5. Additional Features

### Autofill and Hidden Fields

TiBillet automatically sends certain information to Formbricks:

- `name`: User’s name  
- `email`: Email  
- `membership_uuid`: Membership number  
- `product_name`: Product name  
- `price_name`: Product price

**Using them in Formbricks:**

1. Go to the **"Questions"** section of your survey.
2. Add **hidden fields** for these values.
3. Use them in your questions with `@` (e.g., *Hello @name, you selected @product_name.*).

> Hidden fields allow for personalized surveys and more accurate tracking in results.

### Displaying Slugs

To display the hidden fields' values exactly as stored (spaces replaced by hyphens), especially in conditional logic, use **slugs**:

- `product_slug`
- `price_slug`

**To retrieve the slugs:**

1. In the TiBillet admin panel, go to **"Formbricks"**.
2. Open your form.
3. The slugs will be displayed in blue at the top of the page.

<video width="100%" controls src="/img/optionsformbricks.mp4"></video>
