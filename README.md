# validadorFormularioConsola
🛠️ E1-M3 Ejercicio
Validador de Formulario Básico
Objetivo:
Desarrollar un script que solicite al usuario su nombre, email y contraseña, y verifique que los datos ingresados cumplan con criterios de validación básicos.

Instrucciones:
1.	Captura de Datos: Utiliza la función prompt() para solicitar al usuario los siguientes datos. Almacena cada valor en una variable distinta (let o const):
o	Nombre completo.
o	Correo electrónico.
o	Contraseña.

2.	Proceso de Validación: Implementa una serie de condicionales (if, else if, else) para validar los datos ingresados según las siguientes reglas:
o	Todos los campos son obligatorios: Ninguna de las variables puede ser un string vacío ("") o nulo.
o	Longitud de la contraseña: La contraseña debe tener una longitud mínima de 8 caracteres.

3.	Comunicación de Resultados:
o	Si todos los datos son válidos, muestra un mensaje de éxito en la consola (console.log()) que diga: "✅ Registro exitoso. ¡Bienvenido, [Nombre del Usuario]!".
o	Si alguna de las validaciones falla, muestra un mensaje de error específico en la consola que indique cuál fue el problema (ej: "Error: El campo 'nombre' no puede estar vacío" o "Error: La contraseña debe tener al menos 8 caracteres").


Conceptos a Aplicar:
•	Entrada de datos: prompt()
•	Declaración de variables: let y const
•	Tipos de datos: Strings y sus propiedades (ej: length)
•	Operadores: De comparación (===, !==) y lógicos (&&, ||)
•	Estructuras de control: if/else if/else
•	Salida de datos: console.log()
