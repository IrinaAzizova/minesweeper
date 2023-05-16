const clickLeftListener = () => {
    
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');
    const timer = document.querySelector('.timer')
    const startBtn = document.querySelector('.main__btn');

    let clickCounter = 0;

    const removeClick = () => {
        cells.forEach(cell => {
            cell.style.cursor = 'default';
            cell.removeEventListener('click', listenerCallback);
        });
    }

    const listenerCallback = (event) => {
        clickCounter++
        console.log(clickCounter);
        const endGame = () => {
            removeClick();
            timer.remove();
            startBtn.style.display = 'block';
        }        
        let timerContent = timer.textContent;
        
        if (event.target.dataset.content === 'b') {
            event.target.classList.add('cell_bomb');
            gameStatus.textContent = `You lose. Your time ${timerContent}. Try again.`;
            gameStatus.style.color = 'black';
            gameStatus.style.fontWeight = 'bold';
            endGame();
        } else {
            event.target.textContent = event.target.dataset.content;
            event.target.classList.add('cell_open');
            const cellsOpen = document.querySelectorAll('.cell_open');
            if (cellsOpen.length >= 90) {
                gameStatus.innerHTML = `You win.<br>Your time ${timerContent}.<br>Number of moves ${clickCounter}.<br>Congratulations!`;
                gameStatus.style.color = 'darkred';
                endGame();
            }
        }
    }

    cells.forEach((cell, i) => {
        cell.addEventListener('click', listenerCallback);        
    });
}

export default clickLeftListener;