const getTime = () => {
    const timer = document.querySelector('.timer');
    const time = timer.textContent;
    let sec = +(time.slice(6));
    let min = +(time.slice(3, 5));
    let hour = +(time.slice(0, 2));
    ++sec;
    if (sec > 59) {
        sec = 0;
        min++;
    }
    if (min > 59) {
        min = 0;
        hour++;
    }    
    const addZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    timer.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
}

export default getTime;