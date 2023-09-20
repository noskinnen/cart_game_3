import { renderMainPage } from './index';
import { createCardArray } from './helper-component';
import { renderEndMessage } from './end-game-component';
import { Timer } from 'timer-node';

export function renderGamePage(difficult: string) {
    const appEl = document.getElementById('app');
    let firstCard: number = null;
    let secoundCard: number = null;
    let clickabled = true;
    let cardArray = createCardArray(difficult);

    const timer = new Timer();

    const openedCardHtml = cardArray
        .map((item, index) => {
            return `<div class="card-item ${item}" data-index=${index}></div>`;
        })
        .join('');

    const tabledCardHtml = ` 
<div id="game">
<header class="header">
<div class="timer">
<div class='timer-prm'>
                <p class='timer-prm-text'>min</p>
                <h2 class='current-time current-time-minute'>00</h2>
            </div>
        <div class='timer-prm'>
        <p class='timer-prm-text'>sek</p>
        <h2 class='current-time current-time-sec'>.00</h2>
    </div>
</div>
<button class="start-game-button" id="startNewGameButton">Начать заново</button>
</header>
<section class="game-field">${openedCardHtml}</section>
</div>`;

    appEl.innerHTML = tabledCardHtml;

    let minutesHtml = document.querySelector('.current-time-minute');
    let secondsHtml = document.querySelector('.current-time-sec');

    timer.start();

    let intervalId = setInterval(() => {
        minutesHtml.innerHTML = timer.format(
            `${Number(timer.format('%m')) < 10 ? '0%m' : '%m'}`,
        );
        secondsHtml.innerHTML = timer.format(
            `${Number(timer.format('%s')) < 10 ? '.0%s' : '.%s'}`,
        );
    }, 1000);

    const closedCardHtml = cardArray
        .map((item, index) => {
            return `<div class="card-item" data-index=${index}></div>`;
        })
        .join('');

    let timerId = setTimeout(() => {
        document.querySelector('.game-field').innerHTML = closedCardHtml;

        const cardElements = document.querySelectorAll('.card-item');

        for (const cardElement of cardElements) {
            cardElement.addEventListener('click', () => {
                if (
                    clickabled &&
                    !cardElement.classList.contains('checkedCard')
                ) {
                    const index: number = Number(
                        (cardElement as HTMLElement).dataset.index,
                    );
                    
                    if (firstCard == null) {
                        firstCard = index;
                    } else {
                        if (index != firstCard) {
                            secoundCard = index;
                            clickabled = false;
                        }
                    }
                    if (firstCard !== null && secoundCard !== null) {
                        if (cardArray[firstCard] === cardArray[secoundCard]) {
                            setTimeout(() => {
                                for (const palayedCard of document.querySelectorAll(
                                    `.${cardArray[firstCard]}`,
                                )) {
                                    palayedCard.classList.add('checkedCard');
                                }
                                firstCard = null;
                                secoundCard = null;
                                clickabled = true;
                                if (
                                    Array.from(cardElements).every((card) =>
                                        card.className.includes('checkedCard'),
                                    )
                                ) {
                                    clearInterval(intervalId);
                                    timer.stop();
                                    renderEndMessage(true, appEl, timer);
                                }
                            }, 500);
                        } else {
                            setTimeout(() => {
                                clearInterval(intervalId);
                                timer.stop();
                                renderEndMessage(false, appEl, timer);
                            }, 500);
                        }
                    }
                }
            });
        }
    }, 5000);
    document
        .getElementById('startNewGameButton')
        .addEventListener('click', () => {
            clearTimeout(timerId);
            renderMainPage();
        });
}
