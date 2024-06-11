## Descripciones breves de los ejercicios:

1. **Conversión de Temperaturas**:
   - **Descripción**: Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina su clasificación.
   - **Instrucciones**: 
     - Declara una variable para almacenar la temperatura en grados Celsius.
     - Calcula la temperatura en grados Fahrenheit usando la fórmula \(F = C \times 1.8 + 32\).
     - Usa una sentencia if para determinar si la temperatura en Fahrenheit es alta, baja o moderada.
     - Muestra el resultado en la consola.

2. **Cálculo del IMC**:
   - **Descripción**: Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.
   - **Instrucciones**: 
     - Declara variables para el peso (en kilogramos) y la altura (en metros) de una persona.
     - Calcula el IMC usando la fórmula \(IMC = \frac{{\text{peso}}}{{\text{altura}^2}}\).
     - Usa una sentencia if para clasificar el IMC como bajo peso, normal, sobrepeso u obesidad.
     - Muestra el resultado en la consola.

3. **Determinación de Números Primos**:
   - **Descripción**: Determina si un número entero es primo.
   - **Instrucciones**: 
     - Declara una variable para un número entero.
     - Usa una sentencia if y un bucle para determinar si el número es primo.
     - Muestra el resultado en la consola.

4. **Operaciones Aritméticas Básicas**:
   - **Descripción**: Realiza operaciones aritméticas básicas y muestra el mayor resultado.
   - **Instrucciones**: 
     - Declara tres variables numéricas.
     - Realiza y guarda el resultado de las operaciones de suma, resta y multiplicación entre las variables.
     - Usa una sentencia if para determinar y mostrar el mayor de los tres resultados en la consola.

5. **Cálculo del Descuento**:
   - **Descripción**: Calcula el precio final de un producto aplicando un descuento basado en su precio inicial.
   - **Instrucciones**: 
     - Declara una variable para el precio inicial del producto.
     - Usa sentencias if para aplicar un descuento basado en el precio inicial.
     - Calcula el precio final y muestra el resultado en la consola.
    ***

## Instrucciones para ejecutar los scripts

1. **Crea una carpeta nueva**: Abre tu explorador de archivos y crea una nueva carpeta con un nombre descriptivo, por ejemplo, "ejercicios-js".

2. **Abre Visual Studio Code**: Busca la carpeta que acabas de crear y ábrela en Visual Studio Code (VS Code). Puedes hacer esto arrastrando la carpeta a la ventana de VS Code o usando la opción "Abrir carpeta" en el menú de VS Code.

3. **Crea un archivo HTML**: En VS Code, crea un nuevo archivo llamado "index.html". Para hacer esto, ve al menú "Archivo" y selecciona "Nuevo archivo", luego escribe "index.html".

4. **Estructura HTML básica**: Dentro del archivo "index.html", escribe la estructura básica de un documento HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>


</body>
</html>
```

5. **Crea un archivo JavaScript**: En VS Code, crea un nuevo archivo llamado,por ejemplo, "ejercicio1.js". Para hacer esto, ve al menú "Archivo" y selecciona "Nuevo archivo", luego escribe "ejercicio1.js".

6. **Vincula el archivo JavaScript con el HTML**: Dentro del archivo "index.html", justo antes del cierre del cuerpo (`</body>`), agrega la etiqueta `<script>` para vincular tu archivo JavaScript:

```html
<script src="ejercicio1.js"></script>
```



7. **Copia y pega el script**: Copia el script que deseas ejecutar en el archivo js que creaste. Por ejemplo, para el ejercicio de Conversión de Temperaturas, puedes copiar este código:

```javascript
// Temperatura en grados Celsius
let temperaturaCelsius = 50;
let temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

if (temperaturaFahrenheit > 85) {
    console.log('La temperatura Fahrenheit es alta');
} else if (temperaturaFahrenheit < 32) {
    console.log('La temperatura Fahrenheit es baja');
}
```

8. **Guarda los cambios**: Guarda todos los archivos (`Ctrl + S` o `Cmd + S`).

9. **Abre el archivo HTML en el navegador**: En VS Code, haz clic derecho en el archivo "index.html" en el explorador de archivos y selecciona "Abrir con Live Server" (si tienes la extensión Live Server instalada) o simplemente abre el archivo con tu navegador web de preferencia.

10. **Abre las herramientas de desarrollo**: Una vez que se cargue la página en el navegador, haz clic derecho en cualquier parte de la página y selecciona "Inspeccionar" o "Inspeccionar elemento".

11. **Ve a la pestaña "Consola"**: En las herramientas de desarrollo, ve a la pestaña "Consola". Aquí es donde verás la salida de tu script JavaScript.

12. **Observa la salida**: Deberías ver la salida del script en la consola del navegador.
    <img src="https://raw.githubusercontent.com/LudmilaBerto/ejercicios-javascript/main/Script%20ejecutado.png"/>

Siguiendo estos pasos, podrás ejecutar tus scripts de JavaScript dentro de un archivo HTML en tu navegador y ver la salida en la consola.


