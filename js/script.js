import getRandomBombs from "./modules/get-random-bombs.js";
import getField from "./modules/get-field.js";
import toCreateField from "./modules/to-create-field.js";
import toCreateLayout from "./modules/to-create-layout.js";
import clickLeftListener from "./modules/to-click-left-listener.js";

document.addEventListener('DOMContentLoaded', () => {

    toCreateLayout( getField( 100, 10, getRandomBombs ) );
    toCreateField('.main');

/*     const startBtn = document.querySelector('.main__btn');
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');

    startBtn.addEventListener('click', () => {
        console.log('start');
        const timer = `
            <div class="main__timer">
                <span class="min">0</span>:<span class="min">0</span>
            </div>
        `;
        gameStatus.insertAdjacentHTML('afterend', timer);
        startBtn.style.display = 'none';

       
    }); */

    /* startBtn.addEventListener('click', (event) => {
        if (event.target.textContent === 'start game') {
            event.target.textContent = 'pause';                
            cells.forEach(cell => {
                cell.addEventListener('click', clickLeftListener);
            });
        } else {
            event.target.textContent = 'start game';
            console.log(event.target.textContent);
            cells.forEach(cell => {
                cell.removeEventListener('click', clickLeftListener);
            });
        }
    });     */
});


