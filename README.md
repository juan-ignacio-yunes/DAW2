# DAM
Trabajo final de la materia "Desarrollo de aplicaciones multiplataforma" de la CEIoT de la UBA.

Este proyecto corre en docker pero el contenedor carace de una librería necesaria. Para subsanar esto, ejecutar la terminal el comando "npm install jsonwebtoken@8.5.1" (sin las comillas).
También correr "npm install --save higcharts" (sin las comillas) ya que es necesario para que al ver los archivos del generador de la imagen gauge, el editro de código no marque como error cuando se llama a la librería highcharts y a sus recursos.