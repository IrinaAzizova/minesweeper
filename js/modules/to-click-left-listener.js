const clickLeftListener = (bombsArr) => {
    
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
    
    const clckAudio = new Audio("../../audio/click.mp3");
    const flagAudio = new Audio("../../audio/flag.mp3");
    const bombAudio = new Audio("../../audio/bomb.mp3");
    const winAudio = new Audio("../../audio/win.mp3");

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
    
    const rightClickHandler = (event) => {
        event.preventDefault();
        clickCount();
        flagAudio.play();
        if (event.button === 2 && !event.target.classList.contains('cell_open')) {
            event.target.classList.toggle('cell_flag');
            if(event.target.classList.contains('cell_flag')) {
                event.target.removeEventListener('click',listenerCallback);
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

    const openSpaces = (num) => {
        let indexes = [+num - 11, +num - 10, +num - 9, +num - 1, +num + 1, +num + 9, +num + 10, +num + 11]
        indexes.forEach( index => {
            if (cells[index] && !cells[index].classList.contains('cell_open')) {
                if (index === +num - 10 ||
                    index === +num + 10 ||
                    index === +num + 1 && +num % 10 !== 9 ||
                    index === +num - 1 && +num % 10 !== 0 ||
                    index === +num + 11 && +num % 10 !== 9 ||
                    index === +num - 11 && +num % 10 !== 0 ||
                    index === +num - 9 && +num % 10 !== 9 ||
                    index === +num + 9 && +num % 10 !== 0) {
                    cells[index].classList.add('cell_open');
                    cells[index].textContent = cells[index].dataset.content;
                    cells[index].removeEventListener('contextmenu', rightClickHandler);
                    cells[index].removeEventListener('click', listenerCallback);
                    if (cells[index].dataset.content === '') {
                        openSpaces(index, cells[index].dataset.content);
                    }
                }
            }  
        });
    }

    const listenerCallback = (event) => {
        clickCount();
        event.target.removeEventListener('click', listenerCallback);
        event.target.removeEventListener('contextmenu', rightClickHandler);
        let timerContent = timer.textContent;
        const {content, num} = event.target.dataset;
        
        if (content === 'b') {
            bombAudio.play();
            event.target.classList.add('cell_bomb');
            gameStatus.innerHTML = `You lose. Your time ${timerContent}.<br>Number of moves ${clickCounter}.<br>Try again.`;
            gameStatus.style.color = 'black';
            gameStatus.style.fontWeight = 'bold';
            endGame();
        } else {
            clckAudio.play();

            if (content === '') {
                openSpaces(num);
            }
            event.target.textContent = content;
            event.target.classList.add('cell_open');
            const cellsOpen = document.querySelectorAll('.cell_open');
            if (cellsOpen.length >= 90) {
                winAudio.play();
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