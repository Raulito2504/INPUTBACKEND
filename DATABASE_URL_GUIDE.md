# 🗄️ CÓMO PARSEAR LA DATABASE URL DE RENDER

## Render te da esta URL:

```
postgresql://crud_user_abc:aBc123XyZ456@dpg-ct1a2b3c4d5e6f7g8h9i-a/crud_seguro
```

## Divídela así:

```
postgresql://  crud_user_abc  :  aBc123XyZ456  @  dpg-ct1a2b3c4d5e6f7g8h9i-a  /  crud_seguro
              ↓               ↓               ↓                                  ↓
            DB_USER       DB_PASSWORD      DB_HOST                          DB_NAME
```

## Variables de Entorno en Render:

```env
DB_HOST=dpg-ct1a2b3c4d5e6f7g8h9i-a
DB_USER=crud_user_abc
DB_PASSWORD=aBc123XyZ456
DB_NAME=crud_seguro
DB_PORT=5432
DB_SSL=true
```

## ⚠️ IMPORTANTE:

- **NO uses la External URL para el backend** (la que termina en `.oregon-postgres.render.com`)
- **USA la Internal URL** (la más corta, que termina en `-a`)
- **DB_SSL=true** es OBLIGATORIO en Render
- **DB_PORT=5432** siempre es el puerto por defecto

## Ejemplo Completo:

### Render te da:
```
Internal Database URL:
postgresql://exampleuser:examplepass123@dpg-abc123def456-a/exampledb
```

### Tú configuras:
```env
DB_HOST=dpg-abc123def456-a
DB_USER=exampleuser
DB_PASSWORD=examplepass123
DB_NAME=exampledb
DB_PORT=5432
DB_SSL=true
```

## 🔍 Dónde encontrar la URL en Render:

1. Ve a tu **PostgreSQL Database** en Render
2. Pestaña **"Info"**
3. Busca **"Internal Database URL"**
4. Click en **"Copy"** o revela el password con el ícono del ojo 👁️
5. Copia la URL completa
6. Parsea según el esquema de arriba

## ✅ Verificar:

El `DB_HOST` debe verse así:
- ✅ `dpg-xxxxxxxxxxxxx-a`
- ❌ `dpg-xxxxxxxxxxxxx-a.oregon-postgres.render.com` (esto es External, no lo uses)

¡Listo! Con esto tu backend se conectará perfecto a la base de datos. 🚀
