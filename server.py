#!/usr/bin/env python3
"""
Servidor HTTP simple para la aplicación de Cotizaciones MV Natural
Ejecutar con: python3 server.py
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Permitir CORS para que funcione con html2canvas
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Reducir verbosidad de los logs
        return

def main():
    # Cambiar al directorio donde está el script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 Servidor iniciado en http://localhost:{PORT}")
            print(f"📱 Abriendo navegador...")
            print(f"\n⚠️  Para detener el servidor, presiona Ctrl+C\n")
            
            # Abrir navegador automáticamente
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Servir archivos
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Servidor detenido")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"\n❌ Error: El puerto {PORT} ya está en uso.")
            print(f"💡 Intenta con otro puerto o cierra la aplicación que lo está usando.\n")
        else:
            print(f"\n❌ Error: {e}\n")

if __name__ == "__main__":
    main()

