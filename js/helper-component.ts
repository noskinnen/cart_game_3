const PIRE_FOR_LOW = 3;
const PIRE_FOR_MEDIUM = 6;
const PIRE_FOR_HIGH = 9;

export function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const createCardArray = (difficult: string) => {
    let arrOfCards = [];
    for (let index = 1; index < 37; index++) {
        arrOfCards.push(`card-item${index}`);
    }
    arrOfCards = shuffle(arrOfCards);
    switch (difficult) {
        case '1':
            arrOfCards = arrOfCards.slice(0, PIRE_FOR_LOW);
            break;
        case '2':
            arrOfCards = arrOfCards.slice(0, PIRE_FOR_MEDIUM);
            break;
        case '3':
            arrOfCards = arrOfCards.slice(0, PIRE_FOR_HIGH);
            break;
        default:
            break;
    }
    arrOfCards = arrOfCards.concat(arrOfCards);

    shuffle(arrOfCards);
    return arrOfCards;
};