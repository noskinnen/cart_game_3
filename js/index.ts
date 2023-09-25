import { renderGamePage } from './game-page-components';

let diffLevel: string = '';

export const renderMainPage = () => {
    const appEl = document.getElementById('app');
    const appHtml = `
    <div class="menu-content"> 
            <div class="menu-text"> 
                Выбери сложность 
            </div>
                <div class="number-toolbar"> 
                    <input class="difficult-item" 
                    type="radio" 
                    data-index="1" 
                    id="number1" 
                    name="numbers" 
                    value="1">
                    <label for="number1">1</label> 
                    
                    <input class="difficult-item" 
                    type="radio" 
                    data-index="2" 
                    id="number2" 
                    name="numbers" 
                    value="2">
                    <label for="number2">2</label> 
                    
                    <input class="difficult-item" 
                    type="radio" 
                    data-index="3" 
                    id="number3" 
                    name="numbers" 
                    value="3">
                    <label for="number3">3</label> 
            </div>
            <button class="play-game">Старт</button>
        </div>`;
    appEl.innerHTML = appHtml;
    document.body.classList.remove('game-over-background')
    const levelSelectEls: NodeListOf<HTMLElement> =
        document.querySelectorAll('.difficult-item');
    for (const levelSelectEl of levelSelectEls) {
        levelSelectEl.addEventListener('click', () => {
            for (const levelSelectEl of levelSelectEls) {
                levelSelectEl.classList.remove('difficult-Item-Select');
            }
            levelSelectEl.classList.add('difficult-Item-Select');
            diffLevel = levelSelectEl.dataset.index;
        });
    }

    const buttonStartGame = document.querySelector('.play-game');
    buttonStartGame.addEventListener('click', () => {
        if (diffLevel) {
            renderGamePage(diffLevel);
        }
    });
};

renderMainPage();
