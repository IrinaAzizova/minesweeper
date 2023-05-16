import toCreateLayout from "./modules/to-create-layout.js";
import getRandomBombs from "./modules/get-random-bombs.js";
import getField from "./modules/get-field.js";
import toCreateCell from "./modules/to-create-cell.js";
import toCreateField from "./modules/to-create-field.js";
import toCreateTimer from "./modules/to-create-timer.js";
import getTime from "./modules/get-time.js";
import clickLeftListener from "./modules/to-click-left-listener.js";

document.addEventListener('DOMContentLoaded', () => {

    toCreateLayout();

    const dataForField = {
        parentSelector: '.main',
        totalCells: 100,
        totalBombs: 10,
        getField: getField,
        getRandomBombs: getRandomBombs,
        toCreateCell: toCreateCell
    };
    /* let gameStatus = 'off'; */

    const startBtn = document.querySelector('.main__btn');
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        toCreateTimer();
        toCreateField(dataForField);
        const cells = document.querySelectorAll('.cell');
        const timer = setInterval(() => {
            getTime()
        }, 1000);
        clickLeftListener();
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                if (event.target.dataset.content === 'b') {
                    clearInterval(timer);
                }                
            });
        });
    });
});


