
let numeroA=38
let numeroB=52
let numeroC=87
let resultadoSuma=0
let resultadoResta=0
let resultadoMultiplica=0

resultadoSuma=numeroA+numeroB+numeroC

resultadoResta=numeroA-numeroB-numeroC

resultadoMultiplica=numeroA*numeroB*numeroC

console.log(`El resultado de la suma es ${resultadoSuma}, de la resta es ${resultadoResta} y el de la multiplicación es ${resultadoMultiplica}`)

if (resultadoSuma>resultadoResta & resultadoSuma>resultadoMultiplica) {
    console.log('El mayor de los tres resultados es el de la Suma')
    
}else{
    if (resultadoResta>resultadoSuma & resultadoResta>resultadoMultiplica) {
        console.log('El mayor de los tres resultados es el de la Resta')
        
    }else{
        if (resultadoMultiplica>resultadoSuma & resultadoMultiplica>resultadoResta) {
                console.log('El mayor de los tres resultados es el de la Multiplicación')
        }
    }
}