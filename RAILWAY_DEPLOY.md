# Deploy en Railway

## Variables de Entorno para Railway

```env
NODE_ENV=production
PORT=4000

DB_HOST=tu-postgres-host.railway.app
DB_USER=postgres
DB_PASSWORD=tu-password-railway
DB_NAME=railway
DB_PORT=5432
DB_SSL=true

FRONTEND_ADMIN_URL=http://localhost:5173
FRONTEND_PUBLIC_URL=http://localhost:3000
FRONTEND_VERCEL_URL=https://examen-segurida-crud.vercel.app

BACKEND_URL=https://tu-backend.up.railway.app

JWT_SECRET=765a7627bd03680b7929b718a4557b30e6f2e4e2b5b6169e2a988a18a80eaa7819c4dfb2d3f45cc595a1792030bca0ba6dd55a3ee28242a0ca8e8bb5076fbd47
JWT_EXPIRES_IN=1h

SUPER_ADMIN_SECRET=Q.9+/%29P;AtKxqxMbLkW*Swt0sxJH
ALLOW_SUPER_ADMIN_CREATION=false

MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=application/pdf,image/jpeg,image/png,image/webp
```

## Pasos de Despliegue

1. Crear proyecto en Railway
2. Conectar repositorio de GitHub
3. Agregar servicio PostgreSQL
4. Copiar variables de entorno arriba al Dashboard de Railway
5. Actualizar `BACKEND_URL` con la URL de Railway
6. Deploy automático
