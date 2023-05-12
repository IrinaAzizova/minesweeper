document.addEventListener('DOMContentLoaded', () => {    

    const toCreateCell = () => {
        const field = document.querySelector('.field');
        const cell = document.createElement('div');
        cell.classList.add('cell', 'cell_flag');
        field.append(cell);
    }

    const toCreateLayout = (createBtnFunc) => {
        const body = document.body;
        const main = document.createElement('main');
        main.classList.add('main');
        main.innerHTML = `
            <h1 class="main__title">Minesweeper</h1>
            <p class="main__game-status">Mines on playing field: <span>10</span></p>
            <div class="field">
            </div>
        `;
        body.insertAdjacentElement('afterbegin', main);
        for (let i = 0; i < 100; i++) {
            createBtnFunc();
        }
    }
    
    toCreateLayout(toCreateCell);
});

