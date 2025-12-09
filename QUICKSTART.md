# CONFIGURACIÓN RÁPIDA - SUPABASE + VERCEL

## 🚀 PASOS RÁPIDOS (15 minutos)

### 1️⃣ SUPABASE (5 min)

```bash
1. Ve a https://supabase.com
2. Login con GitHub
3. "New Project":
   - Name: inmob-premium
   - Password: [genera una segura]
   - Region: [más cercana]
   - Plan: FREE
4. Espera 2-3 min
5. Settings → Database → Connection String (URI)
6. Copia la URL y guárdala
```

### 2️⃣ CONFIGURAR PROYECTO (3 min)

```bash
# Crear .env en la raíz del proyecto
cp .env.example .env

# Editar .env y agregar:
DATABASE_URL="postgresql://postgres:TU_PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:TU_PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"

# Generar secret para NextAuth
openssl rand -base64 32
# Copia el resultado y ponlo en NEXTAUTH_SECRET

# Aplicar schema a Supabase
npm install
npx prisma generate
npx prisma db push
```

### 3️⃣ VERIFICAR LOCAL (2 min)

```bash
npm run dev
# Abre http://localhost:3000
```

### 4️⃣ DESPLEGAR EN VERCEL (5 min)

```bash
1. Ve a https://vercel.com
2. Login con GitHub
3. "Add New Project" → Selecciona "inmob"
4. Branch: claude/premium-realestate-app-016aGdu3r2Q2BHFFDpbKSWiA
5. Agrega estas variables de entorno:

   DATABASE_URL=postgresql://postgres:PASSWORD@db.REF.supabase.co:5432/postgres
   DIRECT_URL=postgresql://postgres:PASSWORD@db.REF.supabase.co:5432/postgres
   NEXTAUTH_URL=https://TU_PROYECTO.vercel.app
   NEXTAUTH_SECRET=[tu secret de 32+ chars]
   NEXT_PUBLIC_WHATSAPP_NUMBER=+18095550100

6. Click "Deploy"
7. Espera 3-5 min
8. ¡Listo! Copia la URL de tu sitio
```

---

## 📋 CHECKLIST

- [ ] Proyecto Supabase creado
- [ ] DATABASE_URL copiada
- [ ] .env creado con todas las variables
- [ ] NEXTAUTH_SECRET generado
- [ ] `npx prisma db push` ejecutado exitosamente
- [ ] Tablas visibles en Supabase Table Editor
- [ ] `npm run dev` funciona en localhost:3000
- [ ] Proyecto desplegado en Vercel
- [ ] Variables configuradas en Vercel
- [ ] Sitio público funciona

---

## 🆘 PROBLEMAS COMUNES

**Error: Can't reach database**
→ Verifica que reemplazaste [YOUR-PASSWORD] y [PROJECT-REF] en DATABASE_URL

**Error: NEXTAUTH_SECRET missing**
→ Genera uno nuevo: `openssl rand -base64 32`

**Vercel build fails**
→ Asegúrate de agregar DATABASE_URL en Environment Variables

**Página en blanco**
→ Ve a Vercel → Deployments → View Function Logs

---

## ✅ LISTO

Una vez completado:
- Landing page: https://tu-proyecto.vercel.app
- Catálogo: https://tu-proyecto.vercel.app/propiedades
- Admin: https://tu-proyecto.vercel.app/admin

**Panel Supabase**: https://supabase.com/dashboard
**Panel Vercel**: https://vercel.com/dashboard

---

Para guía completa detallada, ve a: `DEPLOYMENT.md`
