#!/bin/bash
# Script de inicio rápido para la aplicación MV Natural

echo "🛍️  Aplicación de Cotizaciones MV Natural"
echo "=========================================="
echo ""

# Verificar si Python está disponible
if command -v python3 &> /dev/null; then
    echo "✅ Python encontrado"
    echo "🚀 Iniciando servidor..."
    echo ""
    python3 server.py
elif command -v python &> /dev/null; then
    echo "✅ Python encontrado"
    echo "🚀 Iniciando servidor..."
    echo ""
    python server.py
elif command -v node &> /dev/null; then
    echo "✅ Node.js encontrado"
    echo "🚀 Iniciando servidor..."
    echo ""
    node server.js
else
    echo "❌ Error: No se encontró Python ni Node.js"
    echo ""
    echo "💡 Opciones:"
    echo "   1. Instala Python: https://www.python.org/downloads/"
    echo "   2. Instala Node.js: https://nodejs.org/"
    echo "   3. O usa: npx http-server . -p 8000 -c-1 --cors"
    echo ""
    exit 1
fi

