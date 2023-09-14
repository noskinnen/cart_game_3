import { renderMainPage } from './index.ts';

export const renderEndMessage = (status, appEl, timer) => {
    const endGameBoxHtml = `
                                    <div class="end-game-box">
                <div class=${
                    status ? 'win-smile-img' : 'loose-smile-img'
                }></div>
                <h1 class="end-game-text">${
                    status ? 'Вы выиграли!' : 'Вы проиграли!'
                }</h1>
                <h2 class="end-time-text">Затраченное время:</h2>
                <div class="game-time">${timer.format(
                    timer.format('%m') < 10 ? '0%m' : '%m',
                )}${timer.format(
                    timer.format('%s') < 10 ? '.0%s' : '.%s',
                )}</div>
                <button class="reset-game-button reset-game-button__bottom">Играть снова</button>
                                    </div>`;
    appEl.innerHTML = appEl.innerHTML + endGameBoxHtml;
    document.getElementById('game').classList.add('game__transparent');
    document
        .querySelector('.reset-game-button__bottom')
        .addEventListener('click', () => {
            renderMainPage();
        });
} 