#!/usr/bin/env node
/**
 * Servidor HTTP simple para la aplicación de Cotizaciones MV Natural
 * Requiere: npm install http-server -g
 * Ejecutar con: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    let parsedUrl;
    try {
        parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Solicitud inválida', 'utf-8');
        return;
    }

    let requestPath;
    try {
        requestPath = decodeURIComponent(parsedUrl.pathname);
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Ruta inválida', 'utf-8');
        return;
    }

    // Parsear URL sin querystring para que funcionen rutas cache-busted.
    const routePath = requestPath === '/' ? '/index.html' : requestPath;
    const filePath = path.resolve(__dirname, `.${routePath}`);
    if (!filePath.startsWith(`${__dirname}${path.sep}`)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Acceso denegado', 'utf-8');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Error del servidor: ${error.code}`, 'utf-8');
            }
        } else {
            // CORS headers para html2canvas
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            res.end(req.method === 'HEAD' ? undefined : content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log(`📱 Abre tu navegador en la URL anterior`);
    console.log(`\n⚠️  Para detener el servidor, presiona Ctrl+C\n`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`\n❌ Error: El puerto ${PORT} ya está en uso.`);
        console.log(`💡 Intenta con otro puerto o cierra la aplicación que lo está usando.\n`);
    } else {
        console.log(`\n❌ Error: ${err.message}\n`);
    }
});
