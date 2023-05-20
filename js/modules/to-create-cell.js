const toCreateCell = (text, num) => {
    const field = document.querySelector('.field');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    switch(text) {
        case 1: 
            cell.classList.add('cell_blue');
            break;
        case 2: 
            cell.classList.add('cell_green');
            break;
        case 3: 
            cell.classList.add('cell_red');
            break;
        case 4: 
            cell.classList.add('cell_violet');
            break;
        case 5: 
            cell.classList.add('cell_darkblue');
            break;
        case 6: 
            cell.classList.add('cell_darkgreen');
            break;
        case 7: 
            cell.classList.add('cell_darkgred');
            break;
        case 8: 
            cell.classList.add('cell_darkviolet');
            break;
        default: break;
    }
    /* if (text === 1) {
        cell.classList.add('cell_blue');
    } */
    cell.dataset.content = text === 0 ? '' : text;
    cell.dataset.num = num;
    field.append(cell);
}

export default toCreateCell