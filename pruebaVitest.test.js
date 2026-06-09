import { test, expect } from 'vitest';

// Test 1: Una función matemática simple que debería pasar
test('Suma básica de prueba', () => {
    const resultado = 2 + 2;
    expect(resultado).toBe(4); // "Espero que el resultado sea 4"
});

// Test 2: Simulemos un error para ver cómo falla Vitest
test('Prueba de error intencional', () => {
    const precioProducto = 1500;
    expect(precioProducto).toBe(2000); // Esto va a fallar porque 1500 no es 2000
});