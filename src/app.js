import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuracion de direccion
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public estatico
app.use(express.static(path.join(__dirname, '../public')));

// Ruta de prueba para el navegador
app.get('/ping', (req, res) => {
    res.json({ message: 'pong', status: 'OK' });
});

export default app;