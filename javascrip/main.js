// km da percorrere
const userKm = parseFloat(prompt('scrivi numero km'));
console.log(userKm);

// eta utente
const userAge = parseInt(prompt ('scrivi la tua età'));
console.log(userAge);

// costo per km
const pricePerKm = 0.21;

// prezzo ticket
const priceTicket = userKm * pricePerKm;

// variabile sconto
let discountTicket;


if (userAge < 18) {
    // sconto eta < 18
    discountTicket = (userKm * pricePerKm) * 20 / 100
} if else (userAge > 65) {
    // sconto eta > 65
    discountTicket = (userKm * pricePerKm) * 40 / 100
}

// costo finale ticket
const finalPriceTicket = priceTicket - discountTicket; 
alert('Il prezzo del biglietto è € ' + finalPriceTicket.toFixed(2));

// se esiste lo sconto ticket
if (discountTicket) {
    // stampo lo sconto applicato
    alert('è stato applicato uno sconto di € ' + discountTicket)
}