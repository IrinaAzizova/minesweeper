const toCreateCell = (text) => {
    const field = document.querySelector('.field');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.content = text === 0 ? '' : text;
    field.append(cell);
}

export default toCreateCell