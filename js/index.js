// план:
// -Время, затраченное на игру
// -Выбранный уровень сложности
// -Статус игры (выбор сложности, игра, результат)
// -Сгенерированные карточки (опционально)
// -Выбранные карточки

// файлы:
// -Обычный объект javascript (самый простой вариант)
// -Набор переменных
// -Поля объекта window
// -localStorage

// User Interface
// 1. SPA (Single page application)
// У вас будет 1 страница, и контент для нее вы генерируете с помощью Javascript
// Либо манипулируйте скрытием/отображением элементов через тот же Javascript

// 2. Несколько страниц
// При переходе между ними шарится (делится) общее состояние игры через query
// params или localStorage 

import { renderGamePage } from "./game-page-components.js";

window.globalState = {
diffLevel: '',
}

const levelSelectEls=document.querySelectorAll('.difficult-item');
for (const levelSelectEl of levelSelectEls) {
    levelSelectEl.addEventListener('click', () => {
        for (const levelSelectEl of levelSelectEls) {
            levelSelectEl.classList.remove('difficult-Item-Select');
        }
        levelSelectEl.classList.add('difficult-Item-Select');
        globalState.diffLevel = levelSelectEl.dataset.index
    } )
}

const buttonStartGame = document.querySelector('.play-game');
buttonStartGame.addEventListener('click', () => {
    renderGamePage(globalState.diffLevel)
})
