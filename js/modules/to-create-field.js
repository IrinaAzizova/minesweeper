const toCreateField = ({parentSelector, getField, totalCells, totalBombs, getRandomBombs, toCreateCell}) => {
    const parent = document.querySelector(parentSelector);
    if (parent.querySelector('.field')) {
        parent.querySelector('.field').remove();
    }
    const field = document.createElement('div');
    field.classList.add('field');
    parent.append(field);
    const bombsArr = getField(totalCells, totalBombs, getRandomBombs);
    bombsArr.forEach(row => {
        row.forEach(item => {
            toCreateCell(item);
        });
    }); 
}

export default toCreateField;