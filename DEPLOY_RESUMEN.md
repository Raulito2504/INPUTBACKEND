# ⚡ DEPLOY RÁPIDO EN RENDER

## 🎯 URLs QUE VAS A USAR

### 1. Backend en Render:
```
https://inputbackend.onrender.com
```
*(o el nombre que le pongas al servicio)*

### 2. Frontend en Vercel (ya lo tienes):
```
https://examen-segurida-crud.vercel.app
```

### 3. Base de Datos PostgreSQL:
Render te da esta URL cuando creas la BD:
```
postgresql://usuario:password@dpg-xxxxx-a/database
```

## 📝 VARIABLES DE ENTORNO PARA RENDER

### Copia esto en Render → Environment Variables:

```env
NODE_ENV=production
PORT=4000
DB_SSL=true

# Cuando crees la BD en Render, parsea la Internal URL:
DB_HOST=dpg-xxxxxxxxxxxxx-a
DB_USER=crud_seguro_user
DB_PASSWORD=tu_password_de_render
DB_NAME=crud_seguro
DB_PORT=5432

# URLs Frontend (la tuya de Vercel)
FRONTEND_ADMIN_URL=https://examen-segurida-crud.vercel.app
FRONTEND_PUBLIC_URL=https://examen-segurida-crud.vercel.app
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app

# URL Backend (la que Render te asigne)
BACKEND_URL=https://inputbackend.onrender.com

# JWT (genera uno nuevo si quieres)
JWT_SECRET=765a7627bd03680b7929b718a4557b30e6f2e4e2b5b6169e2a988a18a80eaa7819c4dfb2d3f45cc595a1792030bca0ba6dd55a3ee28242a0ca8e8bb5076fbd47
JWT_EXPIRES_IN=1h
```

## 🔄 PASOS:

1. **Render → New PostgreSQL** → Guarda la Internal Database URL
2. **Ejecutar database.sql** en la BD (usa Shell en Render)  
3. **Render → New Web Service** → Conecta tu repo de GitHub
   - Build: `npm install`
   - Start: `npm start`
4. **Agregar Environment Variables** (las de arriba)
5. **Vercel → Settings → Environment Variables**:
   ```
   VITE_API_URL=https://inputbackend.onrender.com/api
   ```
   Luego hacer **Redeploy**

## ✅ LISTO!

Tu app funcionará a la primera con estas URLs. El CORS ya está configurado correctamente.

**Tiempo total: ~10-15 minutos** ⏱️
