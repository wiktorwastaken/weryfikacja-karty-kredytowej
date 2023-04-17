function checkCardNumber(cardNumber) {
    let cardType;
    const cardNumberArray = [...cardNumber.toString()].reverse();
    const oddNumbers = [];
    const evenNumbers = [];
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;
    const mastercard = /^[5][1-5]/;
    const visa = /^[4]/;
    const americanExpress = /^[3][4|7]/;
    if (typeof cardNumber !== 'number') {
        return console.log('Numer karty musi być liczbą.');
    }
    for (let i = 0; i > cardNumberArray.length; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(cardNumberArray[i])
        }
        if (i % 2 !== 0) {
            oddNumbers.push(cardNumberArray[i])
        }
    }

    //oddNumbers.push(cardNumberArray[cardNumberArray.length ]);
    //evenNumbers.push(cardNumberArray[cardNumberArray.length])
    //odd numbers
    for (let odd of oddNumbers) {
        odd = parseInt(odd);
        oddNumbersSum += odd;
    }
    //even numbers 
    for (let even of evenNumbers) {
        even = parseInt(even);
        if (even > 4) {
            evenNumbersSum += (even * 2 % 10) + 1;
        } else {
            evenNumbersSum += even * 2;
        }
    }
    //console.log(`${evenNumbersSum} + ${oddNumbersSum} = ${oddNumbersSum + evenNumbersSum}`);
    if ((oddNumbersSum + evenNumbersSum) % 10 === 0) {
        cardNumber = cardNumber.toString();

        if (cardNumberArray.length === 16 && mastercard.test(cardNumber)) {
            cardType = 'Mastercard';
        }
        else if (cardNumberArray.length === 16 || cardNumberArray.length === 13 && visa.test(cardNumber)) {
            cardType = 'Visa';
        }
        else if (cardNumberArray.length === 15 && americanExpress.test(cardNumber)) {
            cardType = 'American Express';
        }
        return console.log(`Karta ma poprawny numer. Wydał ją ${cardType}`);
    }
    return console.log('Karta jest nieprawidłowa.');
}

checkCardNumber(5193080150954111);
