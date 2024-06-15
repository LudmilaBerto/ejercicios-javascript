
let precioInicial = 79

let descuentoDiez = 0
let descuentoCinco = 0

descuentoDiez= precioInicial*0.10
descuentoCinco= precioInicial*0.05


if (precioInicial > 100) {
    console.log(`El precio inicial es de $${precioInicial}. Con un 10% de descuento tiene un precio final de $${precioInicial - descuentoDiez}`)
    
}else{
    if (precioInicial > 50 && precioInicial < 100) {
        console.log(`El precio inicial es de $${precioInicial}. Con un 5% de descuento tiene un precio final de $${precioInicial - descuentoCinco}`)
        
    }else{
        if (precioInicial < 50) {
            console.log(`Precio final sin descuento es de $${precioInicial}`)
        }
    }
}