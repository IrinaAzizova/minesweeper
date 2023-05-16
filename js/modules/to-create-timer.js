const toCreateTimer = () => {
    const parent = document.querySelector('.main__data');
    if (document.querySelector('.main__game-status')) {
        document.querySelector('.main__game-status').remove();
    }
    const gameStatusBlock = document.createElement('p');
    gameStatusBlock.classList.add('main__game-status');
    gameStatusBlock.textContent = 'Mines on playing field: ';
    const mines = document.createElement('span');
    mines.textContent = 10;
    gameStatusBlock.append(mines);
    parent.append(gameStatusBlock);
    const timerBlock = document.createElement('div');
    timerBlock.classList.add('timer');
    timerBlock.textContent = '00:00:00';
    parent.append(timerBlock);
}

export default toCreateTimer;