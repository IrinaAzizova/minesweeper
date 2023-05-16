const toCreateLayout = (fieldLayout) => {

    const toCreateCell = (text) => {
        const field = document.querySelector('.field');
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.content = text === 0 ? '' : text;
        /* cell.textContent = text === 0 ? '' : text; */
        field.append(cell);
    }

    const body = document.body;
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = `
        <h1 class="main__title">Minesweeper</h1>
        <p class="main__game-status">Mines on playing field: <span>10</span></p>
        <div class="main__data">
            <button class="main__btn">start new game</button>
        </div>
    `;
   body.insertAdjacentElement('afterbegin', main);
}

export default toCreateLayout;