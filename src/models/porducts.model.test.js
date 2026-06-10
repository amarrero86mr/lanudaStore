import { test, expect } from 'vitest';
import { productsModel } from './products.model.js';

test('Traer una lista de productos no vacía', async () => {
    const productos = await productsModel.findAll();

    // Validamos la estructura general
    expect(productos).toBeInstanceOf(Array);
    expect(productos.length).toBeGreaterThan(0);
});

test('Estructura válida de la lista de productos', async () => {
    const productos = await productsModel.findAll();
    
    // Tomamos el primer elemento
    const primerProducto = productos[0];

    // Validamos de la existencia y el tipo de dato
    expect(primerProducto).toHaveProperty('id');
    expect(primerProducto).toHaveProperty('name');
    expect(primerProducto).toHaveProperty('category');
    expect(primerProducto).toHaveProperty('price');
    expect(primerProducto).toHaveProperty('stock');

    // Validacion de tipos de variables
    expect(typeof primerProducto.id).toBe('number');
    expect(typeof primerProducto.name).toBe('string');
    expect(typeof primerProducto.category).toBe('string');
    expect(typeof primerProducto.price).toBe('number');
    expect(typeof primerProducto.stock).toBe('number');
});