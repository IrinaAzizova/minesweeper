const toCreateField = ({parentSelector, bombsArr, toCreateCell}) => {
    const parent = document.querySelector(parentSelector);
    if (parent.querySelector('.field')) {
        parent.querySelector('.field').remove();
    }
    const field = document.createElement('div');
    field.classList.add('field');
    parent.append(field);
    bombsArr.forEach((row, y) => {
        row.forEach((item, x) => {
            let num = y * 10 + x;
            toCreateCell(item, num);
        });
    })
}

export default toCreateField;