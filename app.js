const sum = function(a, b) {
    // convertimos el valor a Yens
    return a + b;
    // retornamos el valor

}


const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(valueInYen) {
    // convertimos el valor a Yens
    return valueInYen * 127.9;
    // retornamos el valor

}

const fromYenToPound = function(valueInPound) {
    // convertimos el valor a Pound
    return valueInPound * 0.8;
    // retornamos el valor
}
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}