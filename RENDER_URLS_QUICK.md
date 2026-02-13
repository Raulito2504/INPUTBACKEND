# 🎯 URLS PARA CONFIGURAR EN RENDER - QUICK REFERENCE

## 📍 Variables de Entorno en Render (Backend)

### 🔗 URLs del Frontend (CORS)
```
FRONTEND_ADMIN_URL=https://examen-segurida-crud.vercel.app
FRONTEND_PUBLIC_URL=https://examen-segurida-crud.vercel.app
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app
```

### 🔗 URL del Backend (Después de crear el servicio)
```
BACKEND_URL=https://inputbackend.onrender.com
```
⚠️ **Reemplaza "inputbackend" con el nombre real de tu servicio en Render**

### 🗄️ Base de Datos PostgreSQL (De Render)

Cuando crees la base de datos en Render, te dará una URL como:
```
Internal: postgresql://USER:PASSWORD@dpg-xxxxxxxxxxxxx-a/DB_NAME
```

**Parsea esta URL así:**
```
DB_HOST=dpg-xxxxxxxxxxxxx-a          (la parte del medio)
DB_USER=crud_seguro_user              (después de postgresql://)
DB_PASSWORD=TuPasswordAqui            (entre : y @)
DB_NAME=crud_seguro                   (después del último /)
DB_PORT=5432                          (puerto por defecto)
DB_SSL=true                           (OBLIGATORIO en Render)
```

---

## 📍 Variables de Entorno en Vercel (Frontend)

Después de desplegar el backend, actualiza en Vercel:

```
VITE_API_URL=https://inputbackend.onrender.com/api
VITE_ENV=production
```

⚠️ **No olvides el `/api` al final**

---

## 🚀 Checklist Rápido

### En Render:

1. **Crear PostgreSQL Database**
   - Name: `inputbackend-db`
   - Region: Oregon (US West) u otro cercano
   - Guarda la Internal Database URL

2. **Ejecutar database.sql**
   - Ve a Shell en el dashboard de la BD
   - Copia y pega el contenido de `database.sql`

3. **Crear Web Service**
   - Conecta tu repo de GitHub
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
   - Name: `inputbackend` (o el que prefieras)

4. **Agregar Variables de Entorno**
   - Copia del archivo `.env.render.template`
   - Actualiza con tus valores reales

### En Vercel (Frontend):

1. **Actualizar Environment Variables**
   ```
   VITE_API_URL=https://[tu-servicio-render].onrender.com/api
   ```

2. **Hacer Redeploy**
   - Deployments → ... → Redeploy

---

## 📋 Resumen de Todas las URLs

| Servicio | URL | Dónde se usa |
|----------|-----|--------------|
| Backend Render | `https://inputbackend.onrender.com` | `BACKEND_URL` en Render + `VITE_API_URL` en Vercel |
| Frontend Vercel | `https://examen-segurida-crud.vercel.app` | `FRONTEND_*_URL` en Render (CORS) |
| DB Internal | `dpg-xxxxxxxxxxxxx-a` | `DB_HOST` en Render |
| DB External | `dpg-xxx.oregon-postgres.render.com` | Para conectarte desde tu PC |

---

## ⚡ Orden de Despliegue

1. ✅ **Base de Datos** → Guardar credenciales
2. ✅ **Ejecutar SQL** → Crear tablas
3. ✅ **Backend** → Configurar variables de entorno
4. ✅ **Probar Backend** → `https://tu-backend.onrender.com/`
5. ✅ **Frontend** → Actualizar `VITE_API_URL` en Vercel
6. ✅ **Test completo** → Frontend → Backend → BD

---

## 🔍 URLs de Prueba

### Verificar Backend:
```
https://inputbackend.onrender.com/
https://inputbackend.onrender.com/api/items
```

### Verificar Frontend:
```
https://examen-segurida-crud.vercel.app
```

---

**⏱️ Primera vez que arranca puede tomar ~1 min (plan free de Render)**

¡Todo listo para desplegar! 🚀
