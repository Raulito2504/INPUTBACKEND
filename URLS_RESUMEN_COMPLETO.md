# 🎯 RESUMEN DE TODAS LAS URLs - RENDER & VERCEL

## 📍 URLs QUE VAS A USAR

### 🔵 Backend (Render)
```
https://inputbackend.onrender.com
```
*(o el nombre que elijas para tu Web Service)*

### 🟢 Frontend (Vercel) 
```
https://examen-segurida-crud.vercel.app
```
*(ya lo tienes desplegado)*

### 🟣 Base de Datos (Render PostgreSQL)
```
Internal: dpg-xxxxxxxxxxxxx-a
External: dpg-xxxxxxxxxxxxx-a.oregon-postgres.render.com
```
*(la Internal es la que usas en el backend)*

---

## 🔧 VARIABLES DE ENTORNO

### 📦 En RENDER (Backend):

```env
# Servidor
PORT=4000
NODE_ENV=production

# Base de Datos (de Render)
DB_HOST=dpg-xxxxxxxxxxxxx-a
DB_USER=crud_seguro_user
DB_PASSWORD=tu_password_aqui
DB_NAME=crud_seguro
DB_PORT=5432
DB_SSL=true

# Frontend URLs
FRONTEND_ADMIN_URL=https://examen-segurida-crud.vercel.app
FRONTEND_PUBLIC_URL=https://examen-segurida-crud.vercel.app
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app

# Backend URL
BACKEND_URL=https://inputbackend.onrender.com

# JWT
JWT_SECRET=tu_jwt_secret_aqui
JWT_EXPIRES_IN=1h
```

### 🎨 En VERCEL (Frontend):

```env
VITE_API_URL=https://inputbackend.onrender.com/api
VITE_ENV=production
```

---

## ⚡ COPY-PASTE RÁPIDO

### Para Render (reemplaza los xxx):

| Variable | Valor |
|----------|-------|
| `NODE_ENV` | `production` |
| `PORT` | `4000` |
| `DB_SSL` | `true` |
| `DB_HOST` | `dpg-xxxxxxxxxxxxx-a` |
| `DB_USER` | `crud_seguro_user` |
| `DB_PASSWORD` | (de Render) |
| `DB_NAME` | `crud_seguro` |
| `DB_PORT` | `5432` |
| `FRONTEND_ADMIN_URL` | `https://examen-segurida-crud.vercel.app` |
| `FRONTEND_PUBLIC_URL` | `https://examen-segurida-crud.vercel.app` |
| `FRONTEND_VERCEL_URL` | `https://examen-segurida-crud.vercel.app` |
| `BACKEND_URL` | `https://inputbackend.onrender.com` |
| `JWT_SECRET` | (tu secret) |
| `JWT_EXPIRES_IN` | `1h` |

### Para Vercel:

| Variable | Valor |
|----------|-------|
| `VITE_API_URL` | `https://inputbackend.onrender.com/api` |
| `VITE_ENV` | `production` |

---

## 🔄 ENDPOINTS QUE FUNCIONARÁN

### Backend:
- `https://inputbackend.onrender.com/` → Info de la API
- `https://inputbackend.onrender.com/health` → Health check
- `https://inputbackend.onrender.com/api/items` → CRUD items

### Frontend:
- `https://examen-segurida-crud.vercel.app` → Tu app

---

## ✅ CHECKLIST FINAL

- [ ] PostgreSQL Database creada en Render
- [ ] `database.sql` ejecutado en la BD
- [ ] Web Service creado en Render
- [ ] Variables de entorno agregadas en Render
- [ ] Backend funcionando: `https://inputbackend.onrender.com/`
- [ ] Variables de entorno actualizadas en Vercel
- [ ] Frontend redeployado en Vercel
- [ ] Test completo: Frontend → Backend → Database ✅

---

## 📁 ARCHIVOS DE REFERENCIA

- `DEPLOY_RESUMEN.md` - Resumen super rápido
- `RENDER_DEPLOY.md` - Guía completa paso a paso
- `RENDER_URLS_QUICK.md` - Quick reference de URLs
- `DATABASE_URL_GUIDE.md` - Cómo parsear la Database URL
- `.env.render.template` - Template para copiar variables
- `.env.production.example` - Ejemplo de producción

---

**⏱️ Tiempo estimado de deploy: 10-15 minutos**

¡A desplegar! 🚀
