export function renderGamePage(level) {
const appEl = document.getElementById('app');
let difficultMessage 
switch (level) { 
        case '1':
            difficultMessage = 'легкий'
            break;
        case '2':
            difficultMessage = 'средний'
            break;
        case '3':
            difficultMessage = 'тяжелый'
            break;
        default:
            break;
}
const appHtml = `
<div class="menu-content">
<h1 class="difficult-text">Вы выбрали ${difficultMessage} уровень сложности</h1>
</div>`
appEl.innerHTML = appHtml
}