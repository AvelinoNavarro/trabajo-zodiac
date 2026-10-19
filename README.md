# Archivo Zodiaco — Electron + React

Prototipo de escritorio para organizar un expediente documental sobre el caso del Asesino del Zodiaco. La interfaz utiliza una estructura neutra en escala de grises, con navegación por secciones y contenido introductorio en español.

## Requisitos
- Node.js LTS (incluye npm)
- Visual Studio Code recomendado

## Instalar y ejecutar
Abre esta carpeta en VS Code y, desde Terminal → New Terminal, ejecuta:

```bash
npm install
npm run dev
```

Para generar la versión web empaquetable:

```bash
npm run build
```

Para abrir la versión compilada con Electron, primero ejecuta `npm run build` y luego `npm start`.

## Secciones incluidas
- Resumen del caso
- Cronología
- Víctimas y ataques
- Cartas y mensajes
- Cifrados
- Sospechosos
- Fuentes

## Notas de rigor documental
- Los datos incluidos son un resumen introductorio y deben cotejarse con fuentes primarias antes de publicar.
- Las cifras reclamadas en cartas no deben tratarse como víctimas confirmadas.
- No se afirma que una persona sospechosa sea culpable.
- Las muestras gráficas de cifrados son marcadores visuales, no transcripciones fieles de los originales.
- La sección de fuentes enlaza al FBI Vault y a un archivo secundario para facilitar la investigación.
