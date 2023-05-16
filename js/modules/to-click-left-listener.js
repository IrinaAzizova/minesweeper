const clickLeftListener = (event) => {

    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');

    const removeClick = () => {
        cells.forEach(cell => {
            cell.style.cursor = 'default';
            cell.removeEventListener('click', clickLeftListener);
        });
    }

    if (event.target.dataset.content === 'b') {
        event.target.classList.add('cell_bomb');
        gameStatus.textContent = 'You lose. Try again.';
        gameStatus.style.color = 'black';
        gameStatus.style.fontWeight = 'bold';
        removeClick();
    } else {
        event.target.textContent = event.target.dataset.content;
        event.target.classList.add('cell_open');
        const cellsOpen = document.querySelectorAll('.cell_open');
        if (cellsOpen.length >= 90) {
            gameStatus.textContent = 'You win. Congratulations!';
            gameStatus.style.color = 'darkred';
            removeClick();
        }
        console.log(cellsOpen.length);
    }
}

export default clickLeftListener;