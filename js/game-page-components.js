import { renderMainPage } from "./index.js";
import { renderOpenCardPage } from "./open-card-page-component.js";


// export function renderGamePage(level) {
// const appEl = document.getElementById('app');
// let difficultMessage 
// switch (level) { 
//         case '1':
//             difficultMessage = 'легкий'
//             break;
//         case '2':
//             difficultMessage = 'средний'
//             break;
//         case '3':
//             difficultMessage = 'тяжелый'
//             break;
//         default:
//             break;
// }
// const appHtml = `
// <div class="menu-content">
// <h1 class="difficult-text">Вы выбрали ${difficultMessage} уровень сложности</h1>
// </div>`
// appEl.innerHTML = appHtml
// }

export function renderGamePage() {
    const appEl = document.getElementById('app');
    const closetCardHtml = `
    <header class="header">
    <div class="timer"></div>
    <button class="reset-game-button" id="showCardButton">Показать карты / переключение экранов</button>
    <button class="start-game-button" id="startNewGameButton">Начать заново</button>
    </header>
    <section class="game-field">
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>

        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>

        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>

        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
        <div class="card-item"></div>
    </section>
    `;
    appEl.innerHTML = closetCardHtml;

    document.getElementById('startNewGameButton').addEventListener('click', () => {
        renderMainPage();
    })

    document.getElementById('showCardButton').addEventListener('click', () => {
        renderOpenCardPage();
    })
}