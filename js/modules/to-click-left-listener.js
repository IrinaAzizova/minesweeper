const clickLeftListener = () => {
    
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.main__game-status');
    const timer = document.querySelector('.timer')
    const startBtn = document.querySelector('.main__btn');
    const totalMines = document.querySelector('.main__game-status span');
    const flagsTitle = document.querySelector('.main__game-flags');
    const totalFlags = flagsTitle.querySelector('span');
    const clicksTitle = document.querySelector('.main__game-clicks');
    const totalClicks = clicksTitle.querySelector('span');

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
        clicksTitle.remove();
        startBtn.style.display = 'block';
    }

    const clickCount = () => {
        clickCounter++;
        totalClicks.textContent = clickCounter;
    }

    
    /* const openSpaces = (i) => {
        const indexes = [i - 11, i - 10, i - 9, i - 1, i + 1, i + 9, i + 10, i + 11];
        if (cells[i].dataset.content === '') {
            if (cells[i-10] && !cells[i-10].classList.contains('cell_open')) {
                cells[i-10].classList.add('cell_open');
                cells[i-10].textContent = cells[i-10].dataset.content;
                if (cells[i - 10].dataset.content === '') {
                    openSpaces(i - 10);
                }
            }
            console.log('space', i);
        }
    } */
    
    const rightClickHandler = (event) => {
        event.preventDefault();
        clickCount();
        if (event.button === 2 && !event.target.classList.contains('cell_open')) {
            event.target.classList.toggle('cell_flag');
            if(event.target.classList.contains('cell_flag')) {
                event.target.removeEventListener('click',listenerCallback);
                console.log(flags);
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
        clickCount();
        let timerContent = timer.textContent;

       /*  openSpaces(i); */
        
        if (event.target.dataset.content === 'b') {
            event.target.classList.add('cell_bomb');
            gameStatus.innerHTML = `You lose. Your time ${timerContent}.<br>Number of moves ${clickCounter}.<br>Try again.`;
            gameStatus.style.color = 'black';
            gameStatus.style.fontWeight = 'bold';
            endGame();
        } else {
            /* if (event.target.dataset.content === '') {
                console.log(i);
            } */
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
        cell.addEventListener('click',listenerCallback);        
        cell.addEventListener('contextmenu', rightClickHandler);
    });
}

export default clickLeftListener;