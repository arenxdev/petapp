# REACT AVANZADO

En este curso, Óscar Barajas, te enseñará a utilizar las nuevas características de ReactJS, React Router y Redux para crear un sitio de adopción de mascotas.

## INSTALACIÓN Y CONFIGURACIÓN DEL ENTORNO Y MAQUETACIÓN

¡Bienvenido al Curso de Avanzado de ReactJS para Facebook Developer Circles!

Configuraremos nuestro entorno para trabajar en el mismo, hemos preparado un repositorio que puedes encontrar en <https://github.com/gndx/patitas.arepa.dev> con la configuración mínima y necesaria para iniciar el proyecto, clonaremos el repositorio, entraremos a la carpeta, abriremos nuestro editor de código favorito e instalaremos las dependencias con yarn install o npm install.

En nuestro package.json tendremos el nombre de nuestro proyecto, la versión, una descripción, una entrada principal, los scripts a ejecutar en la aplicación, tenemos la opción de poner la descripción de git, palabras clave, tenemos las dependencias y las dependencias de desarrollo.

Vamos a pasar a una etapa de verificar los elementos de diseño que añadiremos en el sitio, así como identificar cada uno de ellos, sus usos y colores.

Construiremos paso a paso la estructura base de nuestros componentes, agregándole los estilos y funcionalidades que requerimos en nuestra aplicación.

Usaremos el archivo global.css que se encuentra en <https://gist.github.com/gn…/1dac0b04c16686fca141c56d0221f883> el cual tiene absolutamente todos los estilos que se usarán en nuestro proyecto, para que nuestro webpack detecte el CSS haremos npm install css-loader style-loader --save-dev y luego configuraremos webpack.config.js para que lea los archivos CSS y los compile, entramos a App.jsx y añadimos import ‘../styles/global.css’, finalmente ya estará trabajando nuestro proyecto con los estilos ya implementados. Está demás decir que puedes crear tu propio diseño y compartirlo en los comentarios para que todos lo podamos ver.

## REACT ROUTER, INICIO DE SESIÓN Y REGISTRO DE USUARIOS

En esta clase veremos cómo configurar React Router en nuestro proyecto, así como también manejar el inicio de sesión y registro de nuestros usuarios.

Es importante crear nuestras variables de entorno, estas variables nos sirven para manejar información sensible que nadie más debería ver, solo nosotros como desarrolladores.

Debemos instalar un paquete para que webpack lea nuestras variables de entorno: npm install dotenv-webpack --save-dev

Ahora en la raíz de nuestro proyecto crearemos un archivo ‘.env’ en el cual pondremos nuestras variables de entorno.

Ahora vamos a webpack.config.js para añadir el paquete que recién se instaló, lo ponemos en la sección de plugins: new Dotenv() ya haciendo esto detectará el archivo en la raíz de nuestro proyecto. Recuerda: cada vez que hagamos cambios en nuestro archivo de webpack.config.js debemos reiniciar nuestro servidor.

Implementaremos React Router para el manejo de nuestras rutas en la aplicación. Haremos uso de la frase ‘no repetir todo’, tendremos un componente que contendrá lo que necesitaremos y dentro del él se renderizarán las rutas cada vez que se necesiten.

Realizaremos nuestro inicio de sesión y registro, para esto necesitaremos una cuenta en Facebook for Developers y trabajar con Firebase Auth para manejar las sesiones. Podemos acceder a Facebook for Developers desde <https://developers.facebook.com/> recuerda que si no estás registrado en Firebase lo puedes hacer en <https://firebase.google.com/>. Crearemos un nuevo proyecto en Firebase y listaremos los servicios a utilizar, los cuales son: Authentication, Database y Storage.

Debemos entrar a nuestra cuenta de Facebook for Developers y activar el servicio de inicio de sesión para que nuestros usuarios puedan entrar con su cuenta de Facebook.

Configuraremos Firebase en nuestro proyecto, lo configuraremos para poder usar sus servicios en nuestro proyecto, el servicio de autenticación y luego configurarlo con Facebook.

Recuerda que puedes encontrar el repositorio en <https://github.com/gndx/patitas.arepa.dev>

### CREANDO NUESTRA API CON FIREBASE

Esta clase es la más importante de nuestro proyecto, aquí crearemos una API con Firebase Functions para hacer GET, POST, PUT y DELETE, también implementaremos React Hooks para manejar el estado de nuestros componentes.

Debemos crear un proyecto alterno en el cual manejaremos el Backend de nuestra aplicación, crearemos una nueva carpeta la cual usaremos para crear dicho proyecto alterno que se encargará de manejar Firebase Cloud Functions. Con FCF expondremos la base de datos de Firebase para poder consumirla como una API, para esto utilizaremos CFC el cual es un servicio que ya nos trae Firebase de forma gratuita.

Recuerda inicializar tu proyecto con ‘git init’ o el comando de tu manejador de versiones favorito para almacenar nuestro código en la nube.

Debemos instalar Firebase como paquete global para hacer uso de FCF con: npm install -g firebase-tools, luego vamos a iniciar sesión en firebase-tools con: firebase login, luego vamos a inicializar Firebase con firebase init.

Ahora iremos a Database en <https://console.firebase.google.com/> y crearemos una nueva base de datos con Realtime Database, la iniciaremos en test mode para hacer pruebas, más adelante utilizaremos las reglas para hacer una base de datos más segura.

Después de hacer el código de nuestra función correremos ‘firebase deploy’ en nuestra terminal para poder hacer uso de las Firebase Cloud Functions en nuestro Frontend.

Debemos instalar Postman en <https://www.getpostman.com/> para hacer las pruebas pertinentes de nuestra API ya creada.

Recuerda que puedes encontrar el repositorio del proyecto en <https://github.com/gndx/patitas.arepa.dev>
