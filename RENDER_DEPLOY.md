# 🚀 Guía de Despliegue en Render

## 📋 Preparación Rápida

### 1️⃣ Crear PostgreSQL Database en Render

1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Click en **"New +"** → **"PostgreSQL"**
3. Configura:
   - **Name**: `inputbackend-db` (o el nombre que prefieras)
   - **Database**: `crud_seguro`
   - **User**: `crud_seguro_user` (se genera automáticamente)
   - **Region**: Oregon (US West) o el más cercano a ti
   - **Plan**: Free (para empezar)

4. **GUARDA ESTAS URLs** que Render te da (las necesitarás para el .env):
   - **Internal Database URL**: `postgresql://crud_seguro_user:...@dpg-xxx-a/crud_seguro`
   - **External Database URL**: `postgresql://crud_seguro_user:...@dpg-xxx-a.oregon-postgres.render.com/crud_seguro`

### 2️⃣ Ejecutar SQL en la Base de Datos

1. En el dashboard de tu base de datos en Render, ve a la pestaña **"Shell"** o **"Connect"**
2. Usa `psql` para conectarte
3. Ejecuta el contenido del archivo `database.sql` para crear las tablas

O puedes usar un cliente como **DBeaver** o **pgAdmin** con la External URL.

### 3️⃣ Crear Web Service en Render

1. Click en **"New +"** → **"Web Service"**
2. Conecta tu repositorio de GitHub/GitLab
3. Configura:
   - **Name**: `inputbackend` (tu URL será: https://inputbackend.onrender.com)
   - **Region**: Mismo que la base de datos
   - **Branch**: `main` o `master`
   - **Root Directory**: Si está en la raíz, déjalo vacío
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (para empezar)

### 4️⃣ Variables de Entorno (.env en Render)

Copia estas variables en la sección **"Environment Variables"** de Render:

```env
# Configuración del Servidor
PORT=4000
NODE_ENV=production

# Base de Datos (USA LA INTERNAL DATABASE URL DE RENDER)
DB_HOST=dpg-xxxxxxxxxxxxx-a
DB_USER=crud_seguro_user
DB_PASSWORD=xxxxxxxxxxxxxxxxxxxxx
DB_NAME=crud_seguro
DB_PORT=5432
DB_SSL=true

# URLs del Frontend (ACTUALIZA CON TU URL DE VERCEL)
FRONTEND_ADMIN_URL=https://examen-segurida-crud.vercel.app
FRONTEND_PUBLIC_URL=https://examen-segurida-crud.vercel.app
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app

# URL del Backend (SE ACTUALIZA DESPUÉS DEL DEPLOY)
BACKEND_URL=https://inputbackend.onrender.com

# JWT Secret (GENERA UNO NUEVO PARA PRODUCCIÓN)
JWT_SECRET=765a7627bd03680b7929b718a4557b30e6f2e4e2b5b6169e2a988a18a80eaa7819c4dfb2d3f45cc595a1792030bca0ba6dd55a3ee28242a0ca8e8bb5076fbd47
JWT_EXPIRES_IN=1h
```

## 🔗 URLs que Vas a Usar

### Backend en Render:
Después de crear el servicio, tu URL será:
```
https://[tu-nombre-de-servicio].onrender.com
```
Ejemplo: `https://inputbackend.onrender.com`

### Frontend en Vercel (Ya lo tienes):
```
https://examen-segurida-crud.vercel.app
```

### Base de Datos PostgreSQL:
Render te da DOS URLs:
- **Internal URL**: Úsala en `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`
- **External URL**: Para conectarte desde tu computadora con pgAdmin/DBeaver

## 📝 Proceso Paso a Paso

### Paso 1: Crear la Base de Datos
1. New + → PostgreSQL
2. Guardar las credenciales que te da Render

### Paso 2: Ejecutar database.sql
1. Conectarte a la BD (Shell en Render o pgAdmin)
2. Copiar y pegar el contenido de `database.sql`

### Paso 3: Crear el Web Service
1. New + → Web Service
2. Conectar repo de GitHub
3. Configurar build y start commands

### Paso 4: Configurar Variables de Entorno
1. En Environment Variables, agregar todas las variables del .env
2. **IMPORTANTE**: 
   - `DB_SSL=true` (obligatorio para Render)
   - `NODE_ENV=production`
   - Parsear la Internal Database URL de Render para obtener:
     - `DB_HOST`: La parte después de @ hasta el primer /
     - `DB_USER`: La parte después de postgresql://
     - `DB_PASSWORD`: Entre : y @
     - `DB_NAME`: Después del último /
     - `DB_PORT`: 5432 (por defecto)

### Paso 5: Actualizar Frontend
Después de que tu backend esté desplegado, actualiza en tu frontend:

**En Vercel → Settings → Environment Variables:**
```
VITE_API_URL=https://inputbackend.onrender.com/api
VITE_ENV=production
```

Después haz un **redeploy** en Vercel.

## ⚡ Tips para que Funcione a la Primera

### ✅ Checklist Pre-Despliegue

- [ ] El archivo `package.json` tiene `"start": "node server.js"`
- [ ] El `database.sql` está listo para ejecutarse
- [ ] Tienes GitHub repo con todo el código subido
- [ ] SSL está habilitado en la configuración de BD (`DB_SSL=true`)
- [ ] CORS incluye tu URL de Vercel en `app.js`

### ⚙️ Configuración de CORS

Tu CORS ya está bien configurado en `app.js`, acepta:
- `https://examen-segurida-crud.vercel.app`
- Y otras URLs configuradas en las variables de entorno

### 🔒 Seguridad

- Genera un nuevo `JWT_SECRET` para producción (puedes usar: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
- No compartas las credenciales de la base de datos

## 🐛 Troubleshooting

### Error: "Database connection failed"
- Verifica que `DB_SSL=true`
- Asegúrate de usar la **Internal Database URL** correctamente parseada
- Verifica que la base de datos esté activa en Render

### Error: "CORS not allowed"
- Verifica que la URL de tu frontend esté en las variables de entorno
- Check que `FRONTEND_VERCEL_URL` sea exactamente igual a la URL de Vercel

### Error: "Cannot find module"
- Asegúrate de que Build Command sea `npm install`
- Verifica que todas las dependencias estén en `package.json`

### Service no inicia
- Revisa los logs en Render Dashboard
- Verifica que Start Command sea `npm start`
- Check que el puerto sea el correcto (Render usa la variable PORT automáticamente)

## 📊 Después del Despliegue

1. Prueba la API: `https://tu-backend.onrender.com/`
2. Verifica la conexión a BD en los logs
3. Prueba endpoints: `https://tu-backend.onrender.com/api/items`
4. Actualiza frontend en Vercel con la nueva URL
5. Test completo frontend → backend → base de datos

## 🎯 Resumen de URLs para Render

### Variables de Entorno Principales:
```
BACKEND_URL=https://[tu-servicio].onrender.com
FRONTEND_ADMIN_URL=https://examen-segurida-crud.vercel.app
FRONTEND_PUBLIC_URL=https://examen-segurida-crud.vercel.app
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app
```

### En Vercel (Frontend):
```
VITE_API_URL=https://[tu-servicio].onrender.com/api
```

¡Listo! Con esto tu aplicación debería funcionar a la primera. 🚀
