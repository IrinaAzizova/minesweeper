const toCreateLayout = (fieldLayout) => {

    const toCreateCell = (text) => {
        const field = document.querySelector('.field');
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = text;
        field.append(cell);
    }

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
    fieldLayout.forEach(row => {
        row.forEach(item => {
            toCreateCell(item);
        });
    });
}

export default toCreateLayout;