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
