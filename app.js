
const sum = (a,b) => {
    return a + b;
}

 const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
 }

 function fromDollarToYen (dollars) {
    const euro = dollars / 1.07;
    const yen = euro * 156.5;
    return yen;
 }

module.exports = { sum, fromEuroToDollar, fromDollarToYen};

