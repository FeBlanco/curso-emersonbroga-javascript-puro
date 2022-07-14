// if elses de forma alinhada 

/*
- 1 sabor R$ 4,00
- 2 sabores R$ 6,00
- 3 sabores R$ 10,00 
*/

function iceCreamPrice(flavors) {
    if(flavors === 1){
        return flavors + ' sabor = R$ 4,00';
    } else if (flavors > 1 &&  flavors <= 2){
    return flavors + ' sabores = R$ 6,00';
    } else if (flavors >= 3 && flavors <= 5){
        return flavors + ' sabores = R$ 10,00';
    } else {
        return 'Não disponivel';
    }
   
}

console.log(iceCreamPrice(0));
console.log(iceCreamPrice(1));
console.log(iceCreamPrice(2));
console.log(iceCreamPrice(3));
console.log(iceCreamPrice(6));

