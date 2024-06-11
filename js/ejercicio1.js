
// Temperatura en grados Celsius
let temperaturaCelsius=50

let temperaturaFahrenheit=0

// Calcula la temperatura en grados Fahrenheit
temperaturaFahrenheit=(temperaturaCelsius*1.8)+32

// Determina si la temperatura en Fahrenheit es alta,baja o moderada
if(temperaturaFahrenheit>85){
    console.log('La temperatura Fahrenheit es alta')
} else{
    if(temperaturaFahrenheit<32){
        console.log('La temperatura Fahrenheit es baja')
    }
}