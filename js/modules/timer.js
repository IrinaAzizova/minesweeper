const startTimer = (parentSelector) => {
    let time = {
        timestamp: 0,
        hour: 0,
        min: 0,
        sec: 0
    };

    const parent = document.querySelector('.main__data');
    const timerBlock = document.createElement('div');
    timerBlock.classList.add('timer');
    timerBlock.textContent = '00:00:00';
    parent.append(timerBlock);

    const addZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }

    const getTime = () => {
        time.timestamp++;
        time.sec = time.timestamp % 60;
        time.min = Math.floor(time.timestamp / 60);
        time.hour = Math.floor(time.timestamp / 60 / 60);
        timerBlock.textContent = `${addZero(time.hour)}:${addZero(time.min)}:${addZero(time.sec)}`;
        console.log(`${(time.min)}:${time.sec}`);
    }
    
    setInterval(getTime, 1000);

}

export default startTimer;