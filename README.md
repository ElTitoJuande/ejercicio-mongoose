# MongoDB & Mongoose

En este proyecto estamos conectando por primera vez un servidor Express con una base de datos MongoDB utilizando Mongoose como ODM (Object Data Modeling).

## Scripts disponibles
En el archivo `package.json` se han definido los siguientes scripts:
- `start`: Inicia el servidor ejecutando `node src/server.js`.
- `dev`: Inicia el servidor en modo desarrollo con --watch para reiniciar automáticamente cuando hay cambios en el directorio `src`.

Asegúrate de tener instaladas todas las dependencias necesarias ejecutando `npm install` antes de iniciar el servidor.

## Estructura del proyecto
- `src/server.js`: Archivo principal del servidor donde se configura Express.
- `src/models/`: Aquí tenemos los modelos para que Mongoose interactúe con la base de datos. 
- `src/routes/`: Se definen las rutas de la API. Cada ruta está asociada usando las funciones de los controladores correspondientes.
- `src/controllers/`: Cada controlador contiene la lógica para manejar las solicitudes y respuestas de las rutas.
- `src/db/`: maneja la conexión a la base de datos.

## Uso de Mongoose
Mongoose es una biblioteca de modelado de datos para MongoDB y Node.js. Nos permite definir esquemas para nuestros datos y proporciona una interfaz sencilla para interactuar con la base de datos.

Asegúrate de revisar los modelos en `src/models/` para entender cómo están estructurados los datos y cómo interactuar con ellos a través de Mongoose.

## Fork y clonado del repositorio
1. Haz un fork de este repositorio en tu cuenta de GitHub.
2. Clona el repositorio forkeado en tu máquina local usando el siguiente comando: 

```bash
git clone <URL_DE_TU_REPOSITORIO_FORKEADO>
```

## Requisitos previos

1. Crea una base de datos en MongoDB para este proyecto. Puedes usar MongoDB Atlas o Compass.
2. Debes tener la URI de conexión a tu base de datos MongoDB. Esta URI es necesaria para que Mongoose pueda conectarse a la base de datos.

## Configuración del entorno
1. Crea un archivo `.env` en la raíz del proyecto.
2. Añade las siguientes variables de entorno en el archivo `.env`:
    PORT=3000
    MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>/<base_de_datos>
    
    Puedes mirar el archivo `.env.example` para ver un ejemplo.

    **OJO**: No olvides poner la base de datos al final de la URI.

    Reemplaza `<usuario>`, `<contraseña>`, `<cluster>` y `<base_de_datos>` con los valores correspondientes a tu configuración de MongoDB. No hagas copy/paste que te conozco 😅

## Iniciar el servidor
1. Ejecuta `npm run dev` para iniciar el servidor en modo desarrollo.
2. El servidor debería estar corriendo en `http://localhost:3000` (o el puerto que hayas especificado en el archivo `.env`).

## Ejercicio

### 1. Testeo con Postman
Usa Postman para probar las rutas de la API existentes.

Puedes hacer solicitudes GET, POST, PUT y DELETE a las rutas definidas en `src/routes/`. Tal y como hemos visto en clase.

### 2. Crear un nuevo modelo
Crea un nuevo modelo en `src/models/` para una colección diferente en tu base de datos MongoDB. Define el esquema y las propiedades necesarias.

Ideas:
- Pedidos
- Tiendas

### 3. Crear nuevos controladores
Crea nuevos controladores en `src/controllers/` para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el nuevo modelo que has creado. Intenta hacer mínimo 2 operaciones CRUD.

Recuerda que si hay algún error puedes manejarlo con un bloque try/catch y next() para pasar el error al middleware de manejo de errores.

### 4. Definir nuevas rutas
Define nuevas rutas en `src/routes/` que utilicen los controladores que has creado.

### 5. Testeo final
Usa Postman para probar las nuevas rutas y asegurarte de que todo funciona correctamente.

### 6. Push a tu repositorio
Realiza un commit de tus cambios y haz push a tu repositorio forkeado en GitHub.
```bash
git add .
git commit -m "Añadido nuevo modelo, controladores y rutas"
git push origin main
```

### 7. Pull Request
Crea un Pull Request en GitHub desde tu repositorio forkeado hacia el repositorio original.