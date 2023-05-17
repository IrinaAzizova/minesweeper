const clickLeftListener = () => {
    
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');
    const timer = document.querySelector('.timer')
    const startBtn = document.querySelector('.main__btn');
    const totalMines = document.querySelector('.main__game-status span');
    const flagsTitle = document.querySelector('.main__game-flags');
    const totalFlags = flagsTitle.querySelector('span');

    let clickCounter = 0;
    let flags = 0;
    let mines = 10;

    const removeClick = () => {
        cells.forEach(cell => {
            cell.style.cursor = 'default';
            cell.removeEventListener('click', listenerCallback);
        });
    }

    const removeRightClick = () => {
        cells.forEach(cell => {            
            cell.removeEventListener('contextmenu', rightClickHandler);
        });
    }

    const endGame = () => {
        removeClick();
        removeRightClick();
        timer.remove();
        flagsTitle.remove();
        startBtn.style.display = 'block';
    }
    
    const rightClickHandler = (event) => {
        event.preventDefault();
            if (event.button === 2 && !event.target.classList.contains('cell_open')) {
                event.target.classList.toggle('cell_flag');
                if(event.target.classList.contains('cell_flag')) {
                    event.target.removeEventListener('click', listenerCallback);
                    mines--;
                    flags++;
                } else {
                    event.target.addEventListener('click', listenerCallback);
                    mines++;
                    flags--;
                }
                totalMines.textContent = mines;            
                totalFlags.textContent = flags;  
            }
    }

    const listenerCallback = (event) => {
        clickCounter++;             
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
        cell.addEventListener('contextmenu', rightClickHandler);
    });
}

export default clickLeftListener;