Para iniciar a usar la plantilla se debe usar
    
    npm install  -> Para instalar las dependencias que se encuentran en package.json
    bower install -> Para instalar las dependencias que se encuentran en bower.json

Para desarrollo se recomiendan los siguientes pasos

    1. Configurar las dependencias instaladas con bower
            gulp bower

    2. El servidor de desarrollo se puede correr usando alguno de los siguiente comandos
            gulp

Para producción se recomiendan los siguientes pasos

    1. Limpiar carpeta ./dist
            gulp limpiar

    2. Tareas para optimizar el código
            gulp opt-plantilla
            gulp opt-build
            gulp opt-html
            gulp opt-css

    3. Iniciar Servidor Producción
            gulp produccion



DETALLE DE LA ESTRUCTURACIÓN DE DIRECTORIOS

- En la raiz del proyecto se encuentra los archivo de configuración tales como
.bowerrc, .gitignore, .jshintrc, bower.json, gulpfile, package.json. Igualmente se encuentra 
la carpeta source, que es donde se agregarán los archivos necesarios para la aplicación(app,
img, lib y el index.html).















ColShopper...