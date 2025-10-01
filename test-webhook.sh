#!/bin/bash

# Simple webhook test script
# This sends a test webhook to your local development server

echo "Testing Stripe webhook endpoint..."

# Make sure your development server is running first
echo "Make sure your Next.js dev server is running (npm run dev)"
echo "Press Enter to continue..."
read

# Test webhook endpoint
curl -X POST http://localhost:3000/api/webhook \
  -H "Content-Type: application/json" \
  -H "Stripe-Signature: t=1234567890,v1=test_signature" \
  -d '{
    "id": "evt_test_webhook",
    "object": "event",
    "api_version": "2024-06-20",
    "created": 1234567890,
    "data": {
      "object": {
        "id": "cs_test_123456789",
        "object": "checkout.session",
        "amount_total": 2000,
        "currency": "usd",
        "customer_details": {
          "email": "test@example.com",
          "name": "Test Customer"
        },
        "metadata": {
          "order_type": "digital",
          "product_ids": "[\"product_1\", \"product_2\"]"
        },
        "payment_status": "paid",
        "status": "complete"
      }
    },
    "livemode": false,
    "pending_webhooks": 1,
    "request": {
      "id": "req_test_123456789",
      "idempotency_key": null
    },
    "type": "checkout.session.completed"
  }'

echo ""
echo "Webhook test completed!"
echo "Check your terminal/console for any error messages."

