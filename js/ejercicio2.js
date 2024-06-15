
let peso = 98

let altura=1.70

let imc = 0

imc = peso / (altura*altura)

console.log('El IMC de una persona es de:', imc)

if(imc<18.5){
    console.log('El IMC es de bajo peso')
}else{
    if( imc>18.5 && imc < 24.9){
        console.log('El IMC es normal')
    }else{
        if(imc>25 && imc< 29.9){
            console.log('El IMC es de sobrepeso')
        }else{
            if(imc>=30){
                console.log('El IMC es de sobrepeso')
            }
        }
    }
}
