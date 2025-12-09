# GUÍA DE CONFIGURACIÓN: SUPABASE + VERCEL (100% GRATIS)

## 📋 PASO 1: Crear Proyecto en Supabase (5 minutos)

### 1.1 Crear Cuenta
1. Ve a https://supabase.com
2. Click en "Start your project"
3. Login con GitHub (recomendado)

### 1.2 Crear Proyecto
1. Click en "New Project"
2. Configuración:
   - **Name**: inmob-premium
   - **Database Password**: [Genera una contraseña segura - GUÁRDALA]
   - **Region**: Closest to you (elige el más cercano)
   - **Pricing Plan**: FREE (0$/month)
3. Click "Create new project"
4. Espera 2-3 minutos mientras se crea la base de datos

### 1.3 Obtener Connection String
1. En el proyecto, ve a **Settings** (⚙️ en sidebar)
2. Click en **Database**
3. En la sección "Connection string", selecciona **URI**
4. Copia el string que se ve así:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
5. Reemplaza `[YOUR-PASSWORD]` con la contraseña que creaste
6. **GUARDA ESTA URL** - la necesitarás

---

## 📋 PASO 2: Configurar el Proyecto Localmente

### 2.1 Actualizar Variables de Entorno

Crea el archivo `.env` en la raíz del proyecto con este contenido:

```bash
# Database (IMPORTANTE: Usa la URL de Supabase que copiaste)
DATABASE_URL="postgresql://postgres:TU_PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="genera-un-secret-random-aqui-min-32-chars"

# Cloudinary (OPCIONAL - déjalos así por ahora)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Email (OPCIONAL)
RESEND_API_KEY=""
EMAIL_FROM="noreply@yourdomain.com"

# SMS (OPCIONAL)
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_PHONE_NUMBER=""

# WhatsApp (OBLIGATORIO - usa tu número)
NEXT_PUBLIC_WHATSAPP_NUMBER="+18095550100"

# Mapbox (OPCIONAL)
NEXT_PUBLIC_MAPBOX_TOKEN=""

# Instagram (OPCIONAL)
INSTAGRAM_ACCESS_TOKEN=""
```

### 2.2 Generar NEXTAUTH_SECRET

Ejecuta en terminal:
```bash
openssl rand -base64 32
```
Copia el resultado y úsalo en `NEXTAUTH_SECRET`

### 2.3 Instalar y Configurar Prisma

```bash
# Instalar Prisma CLI globalmente
npm install -g prisma

# Generar cliente de Prisma
npx prisma generate

# Crear tablas en Supabase
npx prisma db push
```

Si todo funciona, verás:
```
✔ Generated Prisma Client
✔ Applied migration
```

### 2.4 Verificar en Supabase

1. Ve a tu proyecto Supabase
2. Click en **Table Editor** (📊 en sidebar)
3. Deberías ver todas las tablas creadas:
   - User
   - Property
   - PropertyImage
   - SavedProperty
   - Appointment
   - Document
   - Lead
   - Testimonial

---

## 📋 PASO 3: Probar Localmente

```bash
# Instalar dependencias (si no lo hiciste)
npm install

# Correr en desarrollo
npm run dev
```

Abre http://localhost:3000 - ¡Deberías ver la landing page!

---

## 📋 PASO 4: Desplegar en Vercel (10 minutos)

### 4.1 Preparar Variables de Entorno para Producción

Copia tu archivo `.env` y crea `.env.production`:

```bash
# IMPORTANTE: Cambia NEXTAUTH_URL a tu dominio de Vercel
DATABASE_URL="postgresql://postgres:PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"
NEXTAUTH_URL="https://tu-proyecto.vercel.app"
NEXTAUTH_SECRET="el-mismo-secret-que-usaste"
NEXT_PUBLIC_WHATSAPP_NUMBER="+18095550100"
```

### 4.2 Desplegar en Vercel

#### Opción A: Desde el Dashboard de Vercel (Más Fácil)

1. Ve a https://vercel.com
2. Login con GitHub
3. Click "Add New..." → "Project"
4. Selecciona tu repositorio `inmob`
5. Configuración:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next
   - **Install Command**: npm install

6. **IMPORTANTE - Environment Variables**:
   Click en "Environment Variables" y agrega UNA POR UNA:

   ```
   Key: DATABASE_URL
   Value: postgresql://postgres:PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres

   Key: NEXTAUTH_URL
   Value: https://TU_PROYECTO.vercel.app (lo actualizarás después)

   Key: NEXTAUTH_SECRET
   Value: [tu secret de 32+ caracteres]

   Key: NEXT_PUBLIC_WHATSAPP_NUMBER
   Value: +18095550100
   ```

7. Click "Deploy"
8. Espera 2-5 minutos

### 4.3 Actualizar NEXTAUTH_URL

1. Una vez desplegado, Vercel te da una URL como: `inmob-abc123.vercel.app`
2. Ve a **Settings** → **Environment Variables**
3. Edita `NEXTAUTH_URL` y ponle: `https://inmob-abc123.vercel.app`
4. Haz un nuevo deploy: **Deployments** → click en el último → "Redeploy"

#### Opción B: Desde la Terminal (Avanzado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Seguir las instrucciones y seleccionar:
# - Set up and deploy? Y
# - Scope: Tu cuenta
# - Link to existing project? N
# - Project name: inmob-premium
# - Directory: ./
# - Override settings? N

# Configurar variables de entorno
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER

# Deploy a producción
vercel --prod
```

---

## 📋 PASO 5: Verificar que Funciona

### 5.1 Probar el Sitio

Visita tu URL de Vercel (ej: https://inmob-premium.vercel.app)

Deberías ver:
- ✅ Landing page con todas las secciones
- ✅ Navegación a /propiedades
- ✅ Navegación a /propiedades/1
- ✅ Navegación a /agendar
- ✅ Navegación a /login
- ✅ WhatsApp button flotante

### 5.2 Probar la Base de Datos

1. Ve a `/login`
2. Aunque no funcione el login real (falta configurar NextAuth completamente)
3. Ve a Supabase → Table Editor → tabla `User`
4. Click "Insert row" y agrega un usuario manualmente

---

## 🎯 COMANDOS RÁPIDOS DE REFERENCIA

```bash
# DESARROLLO LOCAL
npm run dev              # Correr servidor desarrollo
npx prisma studio        # Ver base de datos en navegador
npx prisma db push       # Aplicar cambios al schema
npx prisma generate      # Re-generar cliente Prisma

# DESPLIEGUE
vercel                   # Deploy preview
vercel --prod            # Deploy a producción
vercel logs              # Ver logs en tiempo real
```

---

## 🔧 TROUBLESHOOTING

### Error: "PrismaClient is unable to connect"
- Verifica que DATABASE_URL esté correcta
- Asegúrate de reemplazar [YOUR-PASSWORD] con tu contraseña real
- Verifica que la IP esté permitida en Supabase (Settings → Database → Connection pooling)

### Error: "NEXTAUTH_SECRET must be provided"
- Genera un nuevo secret: `openssl rand -base64 32`
- Agrégalo a `.env` y a Vercel Environment Variables

### Página en blanco en Vercel
- Ve a Vercel → tu proyecto → "Deployments" → click en el último
- Click en "View Function Logs" para ver errores
- Usualmente es por variables de entorno faltantes

### Las imágenes no cargan
- Es normal, estamos usando URLs de Unsplash de ejemplo
- En producción real, configurarías Cloudinary

---

## ✅ CHECKLIST FINAL

Antes de dar por terminado, verifica:

- [ ] Proyecto creado en Supabase
- [ ] DATABASE_URL configurada correctamente
- [ ] `npx prisma db push` ejecutado sin errores
- [ ] Tablas visibles en Supabase Table Editor
- [ ] `npm run dev` funciona localmente
- [ ] Proyecto desplegado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] NEXTAUTH_URL actualizada con dominio de Vercel
- [ ] Sitio accesible públicamente
- [ ] Landing page se ve correctamente

---

## 🎉 ¡LISTO!

Tu aplicación inmobiliaria premium está:
- ✅ Con base de datos PostgreSQL en Supabase (gratis)
- ✅ Desplegada en Vercel (gratis)
- ✅ Accesible públicamente
- ✅ Lista para agregar propiedades reales

**URL de tu aplicación**: https://tu-proyecto.vercel.app

**Panel de Supabase**: https://supabase.com/dashboard/project/[tu-proyecto-id]

---

## 📊 PRÓXIMOS PASOS (Opcional)

1. **Agregar Propiedades Reales**:
   - Ve a Supabase → Table Editor → Property
   - Click "Insert row" y agrega propiedades manualmente
   - O crea un script de seed con `npx prisma db seed`

2. **Configurar Dominio Personalizado**:
   - Vercel → Settings → Domains
   - Agrega tu dominio (ej: premiumrealestate.com)

3. **Habilitar Servicios Opcionales**:
   - Cloudinary para imágenes reales
   - Resend para emails
   - Mapbox para mapas
   - Instagram API para feed social

---

¿Necesitas ayuda con algún paso? ¡Dime donde te quedaste! 🚀
