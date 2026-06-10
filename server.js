import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor encendido de forma profesional`);
    // rutea la direccion de prueba en app.js
    console.log(`🔗 Probá la API en vivo ingresando a: http://localhost:${PORT}/ping`);
});