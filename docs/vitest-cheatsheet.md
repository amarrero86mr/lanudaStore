# ASERCIONES
### Métodos para el método `expect()`

Se utiliza para crear afirmaciones. En este contexto de **assertions**, existen funciones que pueden ser llamadas como una afirmación para comparar datos/resultados.

---

### 1. Igualdad Básica (Primitivos)
Se usan para comparar números, strings o booleanos.
    
- **.toBe(valor):** Compara igualdad estricta (`===`). Ideal para números, booleanos o strings.
    ```javascript
    expect(resultado).toBe(4);
    expect(producto.stock).toBe(50);
    ```
- **.not.toBe(valor):** Lo opuesto. Verifica que no sea igual.
    ```javascript
    expect(producto.category).not.toBe('electronica');
    ```

### 2. Igualdad Estructural (Objetos y Arrays)

⚠️ En JavaScript, dos objetos o arrays con los mismos datos no son iguales para `toBe()` porque apuntan a lugares distintos de la memoria. Para comparar su contenido, usás `toEqual`.

- **.toEqual(objeto):** Compara el contenido de arrays o propiedades de objetos a fondo (*deep equality*).
    ```javascript
    // Esto da VERDE con toEqual, pero rompería con toBe
    expect(productosModel.findById(1)).toEqual({ id: 1, name: 'Lana' });
    ```
- **.toStrictEqual(objeto):** Igual que `.toEqual()`, pero más estricto (revisa que tengan los mismos métodos o elementos `undefined`). Es el más seguro para objetos complejos.

### 3. Verificaciones de Existencia y Booleanos

Ideales para validar si una función devolvió algo o si un campo vino vacío.

- **.toBeNull():** Verifica que el valor sea exactamente `null`.
    ```javascript
    // Si buscás un ID que no existe, debería dar null
    const producto = await productsModel.findById(999);
    expect(producto).toBeNull();
    ```
- **.toBeUndefined():** Verifica que sea `undefined`.
- **.toBeDefined():** Verifica que el valor sí exista (que no sea `undefined`).
- **.toBeTruthy():** Verifica que el valor sea considerado "verdadero" en JavaScript (un número distinto de 0, un string lleno, un objeto, etc.).
- **.toBeFalsy():** Verifica que sea un valor "falso" (`0`, `""`, `null`, `false`, `undefined`).

### 4. Números

Ideales para lógicas de stock, precios o paginaciones.

- **.toBeGreaterThan(n):** Mayor que n ($>$).
    ```javascript
    expect(productos.length).toBeGreaterThan(0);
    ```
- **.toBeGreaterThanOrEqual(n):** Mayor o igual que n ($\ge$).
- **.toBeLessThan(n):** Menor que n ($<$).
    ```javascript
    // Espera un valor de precio menor que 10000
    expect(producto.price).toBeLessThan(10000);
    ```
- **.toBeLessThanOrEqual(n):** Menor o igual que n ($\le$).

### 5. Strings

Para validar nombres de productos, mensajes de error o descripciones.

- **.toContain(subcadena):** Verifica que un texto contenga otra palabra adentro.
    ```javascript
    expect(producto.name).toContain('Cashmilon');
    ```
- **.toMatch(regex):** Verifica que el texto cumpla con una Expresión Regular (ej. validar un email o un formato de fecha).

### 6. Arrays y Colecciones

Para revisar listas de productos o categorías.

- **.toContain(elemento):** Verifica si un elemento específico está dentro del array (para primitivos).
    ```javascript
    const categorias = ['lanas', 'agujas', 'hebillas'];
    expect(categorias).toContain('lanas');
    ```
- **.toContainEqual(objeto):** Verifica si un objeto con ciertas características está dentro del array.
- **.toHaveLength(número):** Atajo para revisar el `.length` de un array o string.
    ```javascript
    expect(productos).toHaveLength(20);
    ```

### 7. Estructura de Objetos

Para chequear que un objeto cumpla con la forma esperada sin importar sus valores exactos.

- **.toHaveProperty(propiedad):** Revisa si el objeto tiene esa clave.
    ```javascript
    expect(producto).toHaveProperty('stock');
    ```
- **.toHaveProperty(propiedad, valorOpcional):** Revisa si tiene la clave y si además coincide con el valor.
    ```javascript
    expect(producto).toHaveProperty('category', 'lanas');
    ```

### 8. Tipos de Datos y Clases

- **.toBeInstanceOf(Clase):** Verifica si el objeto es una instancia de una clase particular (como `Array`, `Date`, o tus propias clases).
    ```javascript
    expect(productos).toBeInstanceOf(Array);
    ```

### 9. Control de Errores (Excepciones)

Para asegurar que tu backend devuelva los errores correctos cuando alguien hace algo indebido (ej. querer comprar sin stock).

- **.toThrow():** Verifica que una función tire un error.
- **.toThrowError(mensaje):** Verifica que la función tire un error y que el mensaje contenga un texto específico.
    ```javascript
    // Esperamos que falle si el precio es negativo
    expect(() => productosModel.create({ price: -100 })).toThrowError('Precio inválido');
    ```