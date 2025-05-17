# Sunmi Printers in LaBoutik

## Overview

LaBoutik now supports a wide range of Sunmi hardware for printing receipts and tickets. This integration allows you to use both integrated printers in Sunmi POS terminals and standalone Sunmi Cloud Printers.

## Supported Hardware

### Integrated Printers
- **Sunmi Integrated 57mm Printers**: Compact thermal printers built into Sunmi POS terminals
- **Sunmi Integrated 80mm Printers**: Standard-width thermal printers built into Sunmi POS terminals

### Cloud Printers
- **Sunmi Cloud Printer (NT311)**: Standalone network-connected thermal printers
  - More information: [Sunmi 80mm Kitchen Cloud Printer](https://www.sunmi.com/en-US/80-kitchen-cloud-printer/)

## Features

### Receipt Printing
LaBoutik now supports printing detailed receipts for customer purchases. These receipts include:
- Business information (name, address, SIRET, VAT number)
- Transaction details (date, time, receipt ID)
- Table and server information
- Itemized list of purchases with quantities and prices
- Tax breakdown
- Total amounts
- Payment method

### Z Ticket Printing
You can now print temporary Z tickets to verify your cash register balance without closing the register. This feature allows you to:
- Check the current sales totals
- Verify cash float and expected cash amount
- Review sales by payment method
- Perform mid-day cash audits without disrupting operations

## Configuration

### Admin Interface
Printers are configured in the admin interface under the "Printers" section:

1. **General Information**:
   - Name: A descriptive name for the printer
   - Printer Type: Select the appropriate Sunmi printer type

2. **Sunmi Integrated Printer Configuration**:
   - Host: Select the Sunmi terminal where the printer is located

3. **Sunmi Cloud Printer Configuration**:
   - Serial Number: Enter the serial number of your Sunmi Cloud Printer

### Printer Assignment
You can assign printers to specific product categories to control which printer receives which tickets:

1. Go to "Category Groups" in the admin interface
2. Assign a printer to each category group
3. When orders are placed, tickets will be sent to the appropriate printer based on the product categories

## Using Z Tickets

To print a temporary Z ticket:

1. Navigate to the Sales section in LaBoutik
2. Click on the "Z-Ticket" tab
3. Review the current sales information
4. Click "Print Temp Z Ticket" to print a verification ticket
5. When ready to close the register, click "Close all cash registers"

## Troubleshooting

If you encounter issues with Sunmi printers:

1. **Integrated Printers**:
   - Ensure the Sunmi terminal is connected to the network
   - Check that the correct host is selected in the printer configuration
   - Use the "Test Print" button in the admin interface to verify connectivity

2. **Cloud Printers**:
   - Verify the printer is powered on and connected to the internet
   - Confirm the serial number is entered correctly
   - Check that the APP_ID and APP_KEY are configured in the system settings
   - Use the "Test Print" button to verify connectivity