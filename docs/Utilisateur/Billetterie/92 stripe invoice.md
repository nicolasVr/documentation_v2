---
sidebar: 92
slug: stripe-invoice
title: Stripe Invoices
Description: Managing Stripe invoices for your transactions
keywords: [ticketing, event, invoice, stripe]
wiktags: [ticketing, event, invoice, stripe]
authors: Adrienne
---

# Stripe Invoices

**Simplify your billing process!** TiBillet allows you to automatically generate and send Stripe invoices to your customers for their purchases.

## Enabling Stripe Invoices

To enable the Stripe invoice functionality:

1. Go to the **Administration** panel
2. Navigate to **Configuration**
3. In the **Stripe** section, check the box for **"Send a stripe invoice"**
4. Save your changes

![Configuration des factures Stripe](/img/stripe_invoice_config.jpg)

When this option is enabled, TiBillet will automatically create a Stripe invoice for each payment transaction (excluding subscriptions).

## How It Works

When a customer makes a purchase and the Stripe invoice feature is enabled:

1. The system creates a standard Stripe checkout session
2. The invoice creation parameter is added to the checkout session
3. After successful payment, Stripe automatically generates an invoice
4. The invoice is sent to the customer's email address
5. The invoice is also stored in your Stripe dashboard for record-keeping

## Benefits of Stripe Invoices

- **Professional Documentation**: Provide customers with official payment records
- **Automatic Delivery**: Invoices are automatically sent to customers
- **Compliance**: Meet legal requirements for transaction documentation
- **Record Keeping**: All invoices are stored in your Stripe account
- **Customization**: Invoices include your organization's details

## Viewing Invoices

You can view all generated invoices in your Stripe Dashboard under the "Invoices" section

Each invoice includes details such as:
- Customer information
- Items purchased
- Prices and quantities
- Taxes (if applicable)
- Total amount
- Payment date

## Customer Experience

Your customers will receive an email with their invoice attached as a PDF after their purchase is complete. They can also access their invoices through their Stripe customer portal if you have enabled this feature.

---

**Note**: The Stripe invoice feature is only available for one-time payments, not for subscription payments which have their own recurring invoice system.