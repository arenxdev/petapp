# REACT AVANZADO

En este curso, Óscar Barajas, te enseñará a utilizar las nuevas características de ReactJS, React Router y Redux para crear un sitio de adopción de mascotas.

## INSTALACIÓN Y CONFIGURACIÓN DEL ENTORNO Y MAQUETACIÓN

¡Bienvenido al Curso de Avanzado de ReactJS para Facebook Developer Circles!

Configuraremos nuestro entorno para trabajar en el mismo, hemos preparado un repositorio que puedes encontrar en <https://github.com/gndx/patitas.arepa.dev> con la configuración mínima y necesaria para iniciar el proyecto, clonaremos el repositorio, entraremos a la carpeta, abriremos nuestro editor de código favorito e instalaremos las dependencias con yarn install o npm install.

En nuestro package.json tendremos el nombre de nuestro proyecto, la versión, una descripción, una entrada principal, los scripts a ejecutar en la aplicación, tenemos la opción de poner la descripción de git, palabras clave, tenemos las dependencias y las dependencias de desarrollo.

Vamos a pasar a una etapa de verificar los elementos de diseño que añadiremos en el sitio, así como identificar cada uno de ellos, sus usos y colores.

Construiremos paso a paso la estructura base de nuestros componentes, agregándole los estilos y funcionalidades que requerimos en nuestra aplicación.

Usaremos el archivo global.css que se encuentra en <https://gist.github.com/gn…/1dac0b04c16686fca141c56d0221f883> el cual tiene absolutamente todos los estilos que se usarán en nuestro proyecto, para que nuestro webpack detecte el CSS haremos npm install css-loader style-loader --save-dev y luego configuraremos webpack.config.js para que lea los archivos CSS y los compile, entramos a App.jsx y añadimos import ‘../styles/global.css’, finalmente ya estará trabajando nuestro proyecto con los estilos ya implementados. Está demás decir que puedes crear tu propio diseño y compartirlo en los comentarios para que todos lo podamos ver.

