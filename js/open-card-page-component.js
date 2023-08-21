import { renderGamePage } from "./game-page-components.js";
import { renderMainPage } from "./index.js";

export function renderOpenCardPage() {
    const appEl = document.getElementById('app');
    const openedCardHtml = `
    <header class="header">
    <div class="timer"></div>
    <button class="reset-game-button" id="showCardButton">Скрыть карты / переключение экранов</button>
    <button class="start-game-button" id="startNewGameButton">Начать заново</button>
    </header>
    <section class="game-field">
        <div class="card-item card-item1"></div>
        <div class="card-item card-item2"></div>
        <div class="card-item card-item3"></div>
        <div class="card-item card-item4"></div>
        <div class="card-item card-item5"></div>
        <div class="card-item card-item6"></div>
        <div class="card-item card-item7"></div>
        <div class="card-item card-item8"></div>
        <div class="card-item card-item9"></div>

        <div class="card-item card-item10"></div>
        <div class="card-item card-item11"></div>
        <div class="card-item card-item12"></div>
        <div class="card-item card-item13"></div>
        <div class="card-item card-item14"></div>
        <div class="card-item card-item15"></div>
        <div class="card-item card-item16"></div>
        <div class="card-item card-item17"></div>
        <div class="card-item card-item18"></div>

        <div class="card-item card-item19"></div>
        <div class="card-item card-item20"></div>
        <div class="card-item card-item21"></div>
        <div class="card-item card-item22"></div>
        <div class="card-item card-item23"></div>
        <div class="card-item card-item24"></div>
        <div class="card-item card-item25"></div>
        <div class="card-item card-item26"></div>
        <div class="card-item card-item27"></div>

        <div class="card-item card-item28"></div>
        <div class="card-item card-item29"></div>
        <div class="card-item card-item30"></div>
        <div class="card-item card-item31"></div>
        <div class="card-item card-item32"></div>
        <div class="card-item card-item33"></div>
        <div class="card-item card-item34"></div>
        <div class="card-item card-item35"></div>
        <div class="card-item card-item36"></div>
    </section>
    `;
    appEl.innerHTML = openedCardHtml;

    document.getElementById('startNewGameButton').addEventListener('click', () => {
        renderMainPage();
    })

    document.getElementById('showCardButton').addEventListener('click', () => {
        renderGamePage();
    })
}