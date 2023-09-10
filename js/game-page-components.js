import { renderMainPage } from "./index.js";
import { createCardArray } from "./helper-component.js";

export function renderGamePage(difficult) {
    const appEl = document.getElementById('app');
let firstCard = null;
let secoundCard = null;
let clickabled = true;
let cardArray = createCardArray(difficult);

const openedCardHtml = cardArray.map((item, index) => {
    return `<div class="card-item ${item}" data-index=${index}></div>`;
})
.join("");
const tabledCardHtml = ` 
<header class="header">
<div class="timer"></div>
<button class="start-game-button" id="startNewGameButton">Начать заново</button>
</header>
<section class="game-field">${openedCardHtml}</section>`;

appEl.innerHTML = tabledCardHtml;

const closedCardHtml = cardArray.map((item, index) => {
    return `<div class="card-item" data-index=${index}></div>`;
})
.join("");

let timerId = setTimeout(() => {
document.querySelector(".game-field").innerHTML = closedCardHtml;

const cardElements = document.querySelectorAll(".card-item");
for (const cardElement of cardElements){
    cardElement.addEventListener("click", () => {
        if (
            clickabled && !cardElement.classList.contains("checkedCard")
        ) {
            const index = cardElement.dataset.index;
            cardElement.classList.add(`${cardArray[index]}`);
            if (firstCard == null){
                firstCard = index;
            }
            else {
                if (index != firstCard){
                    secoundCard = index;
                    clickabled = false;
                }
            }
            if (firstCard != null && secoundCard != null){
                if (cardArray[firstCard] === cardArray[secoundCard]){
                    setTimeout(() => {
                        alert("Вы выиграли");
                        for (const palayedCard of document.querySelectorAll(`.${cardArray[firstCard]}`, )){
                            palayedCard.classList.add("checkedCard");
                        }
                        firstCard = null;
                        secoundCard = null;
                        clickabled = true;
                    }, 500);
                } else {
                    setTimeout(() => {
                        alert("Вы проиграли");
                        document.querySelector(`.${cardArray[firstCard]}`).classList.remove(`.${cardArray[firstCard]}`,);
                        document.querySelector(`.${cardArray[secoundCard]}`).classList.remove(`.${cardArray[secoundCard]}`,);
                        firstCard = null;
                        secoundCard = null;
                        clickabled = true;
                    }, 500);
                }
            }
        }
    }) 
}
} , 5000);
document.getElementById("startNewGameButton").addEventListener("click", () => {
    clearTimeout(timerId);
    renderMainPage();
});
}