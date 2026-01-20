# 🛍️ Aplicación de Cotizaciones MV Natural

Aplicación web para crear y gestionar cotizaciones de productos MV Natural con integración a WhatsApp.

## 🚀 Inicio Rápido

### ⚡ Opción Más Rápida (Auto-detecta Python o Node.js)

```bash
# En macOS/Linux
./start.sh

# O si no tiene permisos
bash start.sh
```

Este script detecta automáticamente si tienes Python o Node.js y usa el servidor apropiado.

### Opción 1: Servidor Python (Recomendado - Más Simple)

**Requisitos:** Python 3.x (viene preinstalado en macOS y Linux)

```bash
# Ejecutar el servidor
python3 server.py
```

El servidor se iniciará en `http://localhost:8000` y abrirá automáticamente tu navegador.

### Opción 2: Servidor Node.js

**Requisitos:** Node.js instalado

```bash
# Si tienes http-server instalado globalmente
npm run serve

# O usar el servidor personalizado
node server.js
```

### Opción 3: Servidor HTTP con npx (Sin instalación)

```bash
# Instalar y ejecutar en un solo comando
npx http-server . -p 8000 -c-1 --cors
```

### Opción 4: Abrir directamente (Limitado)

⚠️ **Nota:** Abrir `index.html` directamente puede tener problemas con:
- CORS (html2canvas puede fallar)
- localStorage (funciona)
- Recursos externos (CDN funciona)

**Para desarrollo básico puedes:**
- Hacer doble clic en `index.html` para abrirlo
- O usar `open index.html` en la terminal (macOS)

## 📦 Despliegue en Producción

### Netlify (Recomendado - Gratis)

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra y suelta la carpeta del proyecto
3. ¡Listo! Tu app estará online

**O con Git:**
```bash
# Conectar repositorio Git a Netlify
# Netlify detectará automáticamente el archivo netlify.toml
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### GitHub Pages

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/`
4. Tu app estará en `https://tuusuario.github.io/mvvfactura`

## 🛠️ Características

- ✅ Catálogo de 93 productos
- ✅ Cálculo automático de precios por volumen
- ✅ Carrito de compras interactivo
- ✅ Generación de cotización en formato JPEG
- ✅ Integración con WhatsApp
- ✅ Diseño responsivo (móvil y desktop)
- ✅ Persistencia de datos (localStorage)
- ✅ Búsqueda en tiempo real

## 📋 Reglas de Precios

- **1-9 piezas:** Precio unitario normal
- **10-29 piezas:** Precio de mayoreo 10 (productos variados permitidos)
- **30-49 piezas:** Precio de mayoreo 30 (mismo producto requerido)
- **50-99 piezas:** Precio de mayoreo 50 (mismo producto requerido)
- **100+ piezas:** Precio de mayoreo 100 (mismo producto requerido)

## 🚚 Costos de Envío

- **1-29 piezas:** $165 MXN
- **30-49 piezas:** $235 MXN
- **50+ piezas:** $300 MXN

## 📞 Contacto

**Magdy Valencia**  
WhatsApp: +526621200412

## 🐛 Solución de Problemas

### El logo no aparece
- Verifica tu conexión a internet (el logo se carga desde Cloudinary)
- Si estás offline, necesitarás descargar el logo localmente

### html2canvas no funciona
- Asegúrate de usar un servidor HTTP (no abrir archivo directamente)
- Verifica que los headers CORS estén configurados

### Puerto ya en uso
- Cambia el puerto en `server.py` o `server.js`
- O cierra la aplicación que está usando el puerto 8000

### localStorage no guarda datos
- Verifica que tu navegador permita cookies/localStorage
- Algunos navegadores en modo privado bloquean localStorage

## 📝 Notas Técnicas

- La aplicación es 100% cliente (no requiere backend)
- Usa localStorage para persistir datos del cliente
- Los CDNs de html2canvas y jsPDF se cargan desde internet
- El logo se carga desde Cloudinary

## 📄 Licencia

MIT License

---

**Desarrollado para MV Natural (By Magdy)** 🌿

