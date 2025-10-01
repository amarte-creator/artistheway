# Configuración de Stripe para Producción - Artistheway

## Pasos para Configurar Stripe en Producción

### 1. Obtener las Claves de Producción

1. Ve a tu [Dashboard de Stripe](https://dashboard.stripe.com/)
2. Cambia el toggle de "Test mode" a "Live mode" (esquina superior derecha)
3. Ve a "Developers" > "API keys"
4. Copia tu **Publishable key** (pk_live_...) y **Secret key** (sk_live_...)

### 2. Configurar Variables de Entorno

Actualiza tu archivo `.env.local` con las claves de producción:

```bash
# Stripe API Keys - PRODUCTION
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_TU_CLAVE_PUBLICA_AQUI
STRIPE_SECRET_KEY=sk_live_TU_CLAVE_SECRETA_AQUI

# Base URL para producción
NEXT_PUBLIC_BASE_URL=https://artistheway.vercel.app

# Webhook secret para producción
STRIPE_WEBHOOK_SECRET=whsec_TU_WEBHOOK_SECRET_AQUI

# Configuración adicional para producción
NODE_ENV=production
```

### 3. Configurar Webhooks en Producción

1. En el Dashboard de Stripe, ve a "Developers" > "Webhooks"
2. Haz clic en "Add endpoint"
3. URL del endpoint: `https://artistheway.vercel.app/api/webhook`
4. Selecciona los siguientes eventos:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `invoice.payment_succeeded` (opcional, para futuras suscripciones)
   - `customer.subscription.created` (opcional, para futuras suscripciones)

5. Copia el **Signing secret** (whsec_...) y actualízalo en `.env.local`

### 4. Configurar Dominio en Stripe

1. Ve a "Settings" > "Branding"
2. Agrega tu dominio: `artistheway.vercel.app`
3. Sube tu logo para personalizar el checkout

### 5. Configurar Información de la Empresa

1. Ve a "Settings" > "Business settings"
2. Completa toda la información requerida:
   - Nombre de la empresa
   - Dirección
   - Información fiscal
   - Información bancaria para recibir pagos

### 6. Configurar Métodos de Pago

1. Ve a "Settings" > "Payment methods"
2. Habilita los métodos de pago que quieres aceptar:
   - Tarjetas de crédito/débito
   - PayPal (opcional)
   - Apple Pay / Google Pay (opcional)

### 7. Configurar Impuestos (Opcional)

Si necesitas calcular impuestos automáticamente:

1. Ve a "Settings" > "Tax"
2. Configura las reglas de impuestos según tu ubicación
3. En el código, cambia `automatic_tax.enabled` a `true` en `/app/api/checkout/route.ts`

### 8. Configurar Monedas

Por defecto está configurado en USD. Para cambiar:

1. Ve a "Settings" > "General"
2. Selecciona tu moneda principal
3. Actualiza `currency: "usd"` en el código si es necesario

### 9. Pruebas en Producción

⚠️ **IMPORTANTE**: Antes de ir a producción completa:

1. Haz pruebas con montos pequeños ($0.50 - $1.00)
2. Verifica que los webhooks funcionen correctamente
3. Prueba el flujo completo de checkout
4. Verifica que los emails de confirmación se envíen

### 10. Monitoreo y Logs

1. Configura alertas en Stripe para:
   - Pagos fallidos
   - Errores de webhook
   - Disputas de clientes

2. Monitorea los logs de tu aplicación para errores de Stripe

### 11. Cumplimiento y Seguridad

1. Configura HTTPS (ya está en Vercel)
2. Implementa rate limiting para las APIs
3. Configura CSP (Content Security Policy)
4. Mantén las claves seguras (nunca las subas a Git)

### 12. Backup y Recuperación

1. Guarda una copia de seguridad de tu configuración
2. Documenta todos los webhooks y eventos
3. Ten un plan de recuperación en caso de problemas

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Verificación Final

Antes de lanzar a producción, verifica:

- [ ] Claves de producción configuradas
- [ ] Webhook configurado y funcionando
- [ ] Información de empresa completa
- [ ] Métodos de pago habilitados
- [ ] Pruebas realizadas con montos pequeños
- [ ] Logs monitoreados
- [ ] HTTPS configurado
- [ ] Backup de configuración realizado

## Soporte

Si tienes problemas:

1. Revisa los logs de Stripe Dashboard
2. Verifica los logs de tu aplicación
3. Consulta la [documentación de Stripe](https://stripe.com/docs)
4. Contacta al soporte de Stripe si es necesario

---

**Nota**: Este archivo contiene información sensible. No lo subas a repositorios públicos.
