// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"]

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i <namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}
function countDown() {
    let startingNumber = 11;
    while (startingNumber > 0) {
        console.log(startingNumber -= 1);
    }
    return countDown
}
// function countDown(number) {
//     while (number < 0) {
//         console.log( number); 
//         number -= 1;
//     }
//     console.log( number );
// }