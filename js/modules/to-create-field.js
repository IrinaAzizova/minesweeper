const toCreateField = (parentSelector) => {
    const parent = document.querySelector(parentSelector);
    const field = document.createElement('div');
    field.classList.add('field');
    parent.append(field);
/* fieldLayout.forEach(row => {
    row.forEach(item => {
        toCreateCell(item);
    });
});  */
}

export default toCreateField;