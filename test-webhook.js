#!/usr/bin/env node

/**
 * Simple webhook test script for Stripe
 * This simulates a webhook event to test your endpoint
 */

const crypto = require('crypto');

// Your webhook endpoint URL
const WEBHOOK_URL = 'http://localhost:3000/api/webhook';

// Sample webhook payload (checkout.session.completed event)
const payload = JSON.stringify({
  id: 'evt_test_webhook',
  object: 'event',
  api_version: '2024-06-20',
  created: Math.floor(Date.now() / 1000),
  data: {
    object: {
      id: 'cs_test_123456789',
      object: 'checkout.session',
      amount_total: 2000,
      currency: 'usd',
      customer_details: {
        email: 'test@example.com',
        name: 'Test Customer'
      },
      metadata: {
        order_type: 'digital',
        product_ids: '["product_1", "product_2"]'
      },
      payment_status: 'paid',
      status: 'complete'
    }
  },
  livemode: false,
  pending_webhooks: 1,
  request: {
    id: 'req_test_123456789',
    idempotency_key: null
  },
  type: 'checkout.session.completed'
});

// Create signature (you'll need to replace this with your actual webhook secret)
const webhookSecret = 'whsec_YOUR_WEBHOOK_SECRET_HERE';
const timestamp = Math.floor(Date.now() / 1000);
const signature = crypto
  .createHmac('sha256', webhookSecret)
  .update(`${timestamp}.${payload}`)
  .digest('hex');

const stripeSignature = `t=${timestamp},v1=${signature}`;

// Send the webhook
async function testWebhook() {
  try {
    console.log('Testing webhook endpoint...');
    console.log('URL:', WEBHOOK_URL);
    console.log('Payload:', JSON.stringify(JSON.parse(payload), null, 2));
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': stripeSignature
      },
      body: payload
    });

    const responseText = await response.text();
    
    console.log('Response Status:', response.status);
    console.log('Response Body:', responseText);
    
    if (response.ok) {
      console.log('✅ Webhook test successful!');
    } else {
      console.log('❌ Webhook test failed');
    }
  } catch (error) {
    console.error('❌ Error testing webhook:', error.message);
  }
}

// Run the test
testWebhook();

