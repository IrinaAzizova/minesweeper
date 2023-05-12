const getField = (totalCells, bombsCount, getBombsFunc) => {
    const bombsField = getBombsFunc(totalCells - 1, bombsCount);
    let field = [];
    bombsField.forEach((row, x) => {
        field.push([]);
        row.forEach((cell, y) => {
            let bombsAround = 0;
            if (cell === 'b') {
                field[x][y] = 'b';
            } else {
                if (bombsField[x - 1] && bombsField[x - 1][y] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x - 1] && bombsField[x - 1][y - 1] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x - 1] && bombsField[x - 1][y + 1] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x + 1] && bombsField[x + 1][y] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x + 1] && bombsField[x + 1][y - 1] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x + 1] && bombsField[x + 1][y + 1] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x][y - 1] === 'b') {
                    bombsAround++;
                }
                if (bombsField[x][y + 1] === 'b') {
                    bombsAround++;
                }
                field[x][y] = bombsAround;
            }                
        });
    });
    return field;
}

export default getField;