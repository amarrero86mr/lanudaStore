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

test('findById debería devolver un producto conun ID existe', async () => {
    const allProducts = await productsModel.findAll();
    const id = allProducts[3].id
    const producto = await productsModel.findById(id);

    expect(producto).toBeDefined();
    expect(producto).not.toBeNull();
    expect(typeof producto).toBe('object');
    
    
    expect(producto.id).toBe(allProducts[3].id);
    expect(producto).toHaveProperty('name');
});

test('findById debe devolver null si el ID no existe', async () => {
    // Busqueda de un ID que no existe
    const producto = await productsModel.findById(9999);

    // Utilizacion de la aserción para Null
    expect(producto).toBeNull();
});