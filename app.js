
const sum = (a, b) => {
    return a + b;
}


console.log(sum(7, 3));



let oneEuroIs = {
    "JPY": 127.9,  // japan yen
    "USD": 1.2,  // us dollar
    "GBP": 0.8,  // british pound
}


const fromEuroToYen = function(euros){
    let yens = euros * oneEuroIs.JPY;  
    yens = Math.floor(yens * 100) / 100; 
    return yens;
}


// Solución 2
const fromEuroToDollar = function(euros){
    let dollars = euros * oneEuroIs.USD;  
    dollars =  Math.floor(dollars  * 100) / 100;  
    return dollars;
}


const fromEuroToPound = function(euros){
    let pounds = euros * oneEuroIs.GBP;  
    pounds = Math.floor(pounds * 100) / 100;  
    return pounds;
}



const fromDollarToYen = (dollar) => {
    euros = Math.floor(euros * 100) / 100; 
    let yens = fromEuroToYen(euros);
    return yens;
}


const fromYenToPound = (yen) => {  
    let euros = oneEuroIs.JPY / yen;
    euros = Math.floor(euros * 100) / 100;  
    let pounds = fromEuroToPound(euros);
    return pounds;
}


module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound };