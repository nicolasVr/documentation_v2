---
sidebar_position: 20
slug: wallets
title: Wallets
description: Manipulez les wallets
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

Api de manipulation de Wallet.

## Checkout Stripe

Cette API permet d'obtenir une URL de paiement Stripe pour recharger un portefeuille via une adresse e-mail spécifiée.

```
# Create Stripe refill checkout :
POST /api/wallet/get_stripe_checkout_with_email/
```

### **Headers**

| Nom               | Type   | Description                          |
|--------------------|--------|--------------------------------------|
| `Authorization`   | String | Le token d'autorisation au format `Bearer <token fourni>`. Veillez à utiliser un token valide. |
| `Content-Type`    | String | Doit être défini sur `application/json`. |


### Exemple de corps de la requête :

```json
{
  "email": "adresse_email@example.com"
}
```

| Nom   | Type   | Obligatoire | Description                              |
|-------|--------|-------------|------------------------------------------|
| `email` | String | Oui         | L'adresse e-mail de l'utilisateur pour lequel générer l'URL de paiement. |

## **Réponse**

La réponse contient l'URL de paiement Stripe permettant à l'utilisateur associé de recharger son portefeuille.

### Exemple de réponse :

```json
{
  "stripe_checkout_url": "https://checkout.stripe.com/c/pay/cs_test_bWppYWB3dic%2FcXdwYHgl"
}
```

### **Notes importantes**

1. Veillez à utiliser une adresse e-mail valide dans le corps de la requête.
2. N'oubliez pas d'inclure le token d'autorisation dans l'en-tête de la requête.
3. L'URL générée est spécifique à la session Stripe et ne peut être utilisée qu'une seule fois.