# 🧶 Mi E-Commerce - Laneria Backend


¡Bienvenido! Este es un proyecto de desarrollo backend enfocado en las bases de JavaScript moderno aplicado al entorno del servidor. El objetivo principal es construir una API robusta, segura y escalable para gestionar el inventario de productos, priorizando las buenas prácticas de arquitectura, testing automatizado y un roadmap evolutivo.

---

## 🚀 Características Principales (Fase Actual)

* **Arquitectura MVC (Modelo-Vista-Controlador):** Separación estricta de responsabilidades para garantizar la mantenibilidad del código.
* **ES Modules (ESM):** Uso nativo de la sintaxis moderna de JavaScript (`import`/`export`) en Node.js de punta a punta.
* **Base de Datos en JSON (Mocking):** Manipulación segura del sistema de archivos (`fs` nativo) para simular la persistencia de datos de manera liviana antes de migrar a entornos relacionales.
* **Testing Unitario Automatizado:** Red de seguridad implementada con **Vitest** para garantizar que cada método y lógica de negocio funcione de manera aislada y correcta.
* **Pipeline de CI/CD:** Configuración con **GitHub Actions** para ejecutar la suite completa de pruebas en cada Pull Request, blindando la rama principal de código roto.

---

## 📁 Estructura del Proyecto

La arquitectura está organizada para mantener desacoplada la lógica del servidor, los datos y los archivos estáticos del frontend:

```text
mi-ecommerce/
│
├── .github/workflows/   # Automatización de GitHub Actions (CI/CD)
│   └── verify-tests.yml
│
├── data/
│   └── products.json    # Nuestra "Base de Datos" inicial (20+ ítems de mercería)
│
├── public/              # Capa de Presentación (Frontend Estático - A futuro)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js      # Lógica del cliente, fetches e interacciones del Header
│   └── img/
│
├── src/                 # Código Fuente del Servidor (Backend)
│   ├── controllers/     # Procesan los pedidos del cliente y coordinan las respuestas
│   │   └── products.controller.js
│   │
│   ├── models/          # Abstracción y manipulación de los datos (JSON / DB)
│   │   └── products.model.js
│   │
│   ├── routes/          # Definición de los endpoints y mapeo de URLs
│   │   └── products.routes.js
│   │
│   └── app.js           # Inicialización y configuración de Express (Middlewares)
│
├── server.js            # Punto de Entrada (Encendido del servidor en el puerto)
├── package.json         # Configuración del proyecto, scripts y dependencias
└── README.md            # Documentación del proyecto
```

### 🛠️ Tecnologías y Herramientas
Entorno de Ejecución: Node.js (v20+)

Framework Backend: Express.js

Suite de Tests: Vitest

Plataforma de CI/CD: GitHub Actions

### 🔄 Flujo de Trabajo (Git & Testing)
Para asegurar la calidad del software trabajando de forma individual, se implementa una estrategia de integración continua estricta:

+ Rama *DEV-module* : Todo el desarrollo de nuevas funciones, rutas y módulos se realiza de forma aislada en rama de desarrollo/tarea. Cada nueva funcionalidad debe incluir su archivo de pruebas .test.js correspondiente.

+ Pull Request (PR): Al finalizar una característica, se solicita la fusión de DEV hacia main.

+ Ejecución Automatizada: **GitHub Actions** detecta el PR, levanta un entorno virtual, instala las dependencias de desarrollo y ejecuta vitest run.

+ Protección de main: Si algún test falla (ya sea por un error en el nuevo módulo o por una regresión en código antiguo), el PR se bloquea automáticamente y no permite el merge hasta que el código sea corregido.

## 🏁 Hoja de Ruta Evolutiva (Roadmap)
Este proyecto está diseñado para crecer de manera continua, cerrando etapas de forma incremental y profesional:

### 📦 Fase 1: Arquitectura Base y Mocking (Etapa Actual)
> [x] Diseñar la estructura MVC y configurar el entorno nativo con ES Modules.

> [x] Crear el archivo data/products.json con el inventario inicial de mercería.

> [x] Configurar la suite de pruebas con Vitest y el pipeline de CI/CD en GitHub Actions.

>[ ] Desarrollar los métodos del Modelo (findAll, findById, create) para leer y escribir el JSON usando el módulo fs.

> [ ] Escribir tests unitarios que aseguren que el JSON se lee y modifica correctamente sin romper el formato ni duplicar IDs.

### 🗄️ Fase 2: Migración a Base de Datos Real (MySQL)
>[ ] Diseñar el modelo de entidad-relación de la base de datos (Tablas de products, categories, users).

>[ ] Implementar un ORM o Query Builder (como Sequelize o Knex.js) para interactuar con MySQL de forma segura.

>[ ] Reemplazar la lógica interna de products.model.js para que consulte a MySQL en lugar del JSON (manteniendo los controladores intactos).

>[ ] Configurar variables de entorno (.env) para proteger las credenciales de la base de datos.

### 🛡️ Fase 3: Seguridad y Autenticación Profesional
>[ ] Prevención de Inyecciones SQL: Asegurar consultas parametrizadas a través del uso correcto del ORM.

>[ ] Autenticación con JWT: Implementar registros y logueos de usuarios generando JSON Web Tokens (JWT) seguros.

>[ ] Cifrado de Contraseñas: Usar la librería bcrypt para encriptar las contraseñas en la base de datos (nunca guardar credenciales en texto plano).

>[ ] Middlewares de Autorización: Proteger rutas críticas (ej. que solo un usuario con rol "admin" pueda crear o modificar productos).

>[ ] Seguridad de Cabeceras: Implementar el middleware Helmet para mitigar vulnerabilidades web comunes (XSS, clickjacking, etc.).

### 🎨 Fase 4: Frontend y Despliegue (A Futuro)
>[ ] Crear una API REST limpia y semántica que exponga todos los endpoints necesarios.

>[ ] Desarrollar un frontend completo, moderno y separado utilizando React + Vite, consumiendo la API de forma asrincrónica.

>[ ] Maquetar el Header interactivo final con componentes semánticos (enlaces para navegación, botones para modales de Login/Carrito).