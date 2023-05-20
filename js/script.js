import toCreateLayout from "./modules/to-create-layout.js";
import getBombsField from "./modules/get-bombs-field.js";
import toCreateCell from "./modules/to-create-cell.js";
import toCreateField from "./modules/to-create-field.js";
import toCreateTimer from "./modules/to-create-timer.js";
import getTime from "./modules/get-time.js";
import clickLeftListener from "./modules/to-click-left-listener.js";

document.addEventListener('DOMContentLoaded', () => {

    toCreateLayout();

    const startBtn = document.querySelector('.main__btn');
    startBtn.addEventListener('click', () => {

        const dataForField = {
            parentSelector: '.main',
            bombsArr: getBombsField(100, 10), //bombs array
            toCreateCell: toCreateCell
        };

        startBtn.style.display = 'none';
        toCreateTimer();
        toCreateField(dataForField);
        const cells = document.querySelectorAll('.cell');
        const timer = setInterval(() => {
            getTime(timer)
        }, 1000);
        clickLeftListener(dataForField.bombsArr);
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                if (event.target.dataset.content === 'b') {
                    clearInterval(timer);
                }      
            });
        });
    });

    
});


