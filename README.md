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

- ✅ Catálogo de 108 productos basado en `preciosnew.pdf`
- ✅ Cálculo automático de precios por volumen
- ✅ Carrito de compras interactivo
- ✅ Generación de cotización en formato JPEG
- ✅ Integración con WhatsApp
- ✅ Diseño responsivo (móvil y desktop)
- ✅ Persistencia de datos (localStorage)
- ✅ Búsqueda en tiempo real

## 📋 Fuente oficial de precios

`preciosnew.pdf` es la fuente principal y vigente para productos, precios y reglas. Cualquier lista anterior de precios o catálogo anterior fue retirada para evitar confusión.

## 📋 Reglas de Precios

- **1-9 piezas:** Precio unitario normal
- **10-29 piezas:** Precio de mayoreo 10 (productos variados permitidos)
- **30-49 piezas:** Precio de mayoreo 30 (productos variados permitidos)
- **50-99 piezas:** Precio de mayoreo 50 (productos variados permitidos)
- **100+ piezas:** Precio de mayoreo 100 (productos variados permitidos)

Reglas adicionales del documento oficial:
- No vender a menor costo que el establecido.
- Se puede pedir producto variado para alcanzar precios de mayoreo.

## 🚚 Envío

- El envío y el seguro se cotizan por separado.
- Una vez entregado el pedido a paquetería, cualquier situación se trata directamente con la paquetería.

## 📞 Contacto

**Magdy Valencia**  
WhatsApp: +526621200412

## 🐛 Solución de Problemas

### El logo no aparece
- Verifica tu conexión a internet (el logo se carga desde Cloudinary)
- Si estás offline, necesitarás descargar el logo localmente

### Imagen de producto faltante
- Las imágenes locales agregadas al catálogo están en `assets/products/`.
- `assets/products/sources.json` conserva la página e imagen oficial usada como referencia.
- Si no hay una referencia confiable en los sitios oficiales, el producto queda sin imagen para evitar asignaciones incorrectas.

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
- El CDN de html2canvas se carga desde internet
- El logo y algunas imágenes existentes se cargan desde Cloudinary
- Las nuevas imágenes verificadas se guardan localmente en `assets/products/`

## 📄 Licencia

MIT License

---

**Desarrollado para MV Natural (By Magdy)** 🌿
