# DAM
Trabajo final de la materia "Desarrollo de aplicaciones multiplataforma" de la CEIoT de la UBA.

Este proyecto corre en docker pero el contenedor carace de una librería necesaria. Para subsanar esto, luego de ejecutar "docker compose up" correr en la terminal el comando "docker exec -it node-backend bash" y a continuación ejecutar "npm install jsonwebtoken@8.5.1".
También correr "npm install --save higcharts", ya que es necesario para que al ver los archivos del generador de la imagen gauge, el editro de código no marque como error cuando se llama a la librería highcharts y a sus recursos.
Se adjunta una imagen de ejemplo.