const toCreateLayout = () => {
    
    const body = document.body;
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = `
        <h1 class="main__title">Minesweeper</h1>
        <div class="main__data">
            <button class="main__btn">start new game</button>
        </div>
    `;
   body.insertAdjacentElement('afterbegin', main);
}

export default toCreateLayout;