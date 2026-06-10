import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Rutas al JSON - forma robusta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../../data/products.json');

export const productsModel = {
    
    // Metodo para obtener Todos los Productos
    findAll: async () => {
        try {
            // guarda los datos de archivo
            const rawData = await fs.readFile(dataPath, 'utf-8');
            
            // convertir en array
            return JSON.parse(rawData);
        } catch (error) {
            console.error('Error al leer el archivo de productos:', error);
            // si ocurre un error devolvemos un array vacío, evitamos romper el programa
            return [];
        }
    }

};