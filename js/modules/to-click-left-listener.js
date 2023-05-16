const clickLeftListener = () => {
    
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');
    const timer = document.querySelector('.timer')
    const startBtn = document.querySelector('.main__btn');

    const removeClick = () => {
        cells.forEach(cell => {
            cell.style.cursor = 'default';
            cell.removeEventListener('click', listenerCallback);
        });
    }

    const listenerCallback = (event) => {
        
        const timerContent = timer.textContent;
        console.log(timerContent);
        if (event.target.dataset.content === 'b') {
            event.target.classList.add('cell_bomb');
            gameStatus.textContent = `You lose. Your time ${timerContent} Try again.`;
            gameStatus.style.color = 'black';
            gameStatus.style.fontWeight = 'bold';
            removeClick();
            timer.remove();           
            setTimeout(() => {
                startBtn.style.display = 'block';
            }, 3000);
        } else {
            event.target.textContent = event.target.dataset.content;
            event.target.classList.add('cell_open');
            const cellsOpen = document.querySelectorAll('.cell_open');
            if (cellsOpen.length >= 90) {
                gameStatus.textContent = 'You win. Congratulations!';
                gameStatus.style.color = 'darkred';
                removeClick();
            }
        }
    }

    cells.forEach((cell, i) => {
        cell.addEventListener('click', listenerCallback);        
    });
}

export default clickLeftListener;