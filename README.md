### Prueba-Tecnica-MERN-Stack 📋

Prueba tecnica desarrollada con ReactJS, NodeJS, MongoDB, express, hooks, estado global, routing, nodemon.

La aplicación se encuentra hospedada en Heroku y Netlify, la base de datos en MongoDB Atlas.
Se puede acceder a la aplicación desde ```https://goofy-austin-033987.netlify.app```

### Instalación 🔧

Si se desea hacer el deploy en local se debe usar el comando ```npm start``` en la carpeta ```Servidor``` y ```Cliente```
para inciar el servidor de nodeJS y React.

Por defecto se conectará a la base de datos ```mongodb+srv://root:root@cluster0.rsdud.mongodb.net/MernTask```
si se desean hacer pruebas en una base de datos propia cambiar el valor de la variable ```DB_MONGO``` contenida
en el archivo variables.env de la carpeta ```Servidor```.

## PUNTOS DE LA PRUEBA 🖇️

### Sistema de autenticación 📌

El sistema de autenticación fué desarrollado con JWT, permitiendo el inicio de sesión y la persistencia de 
la información del usuario por un tiempo determinado.

### FORMULARIO DINÁMICO

La aplicación cuenta con formularios para el registro de usuarios, el login, la creación de proyectos y tareas
todos estos son manejados por la base de datos, lo que permite agregar, editar, eliminar y realizar validaciones.

### LISTADO DE REGISTROS

Los proyectos de cada usuario son listados y al hacer click en cualquier proyecto se listarán las tareas
correspondientes, estos registros son traidos de la BD y se pueden modificar, eliminar y agregar, pudiendo
observar la actualización en tiempo real de las diferentes tablas.

### BUSQUEDA POR ID

Para listar los proyectos se debe realizar una busqueda de todos aquellos pertenecientes al usuario logueado, igualmente
con las tareas. Además, las acciones sobre proyectos y tareas solo pueden ser realizadas por el usuario que las creo.

### EXPONER SERVICIOS PARA TRABAJAR CON BD

Con nodeJS y express se expuso los diferentes endpoints de la API realizada y es mediante estos endpoints que se realizan
todas las acciones deseadas.
