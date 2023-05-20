const getBombsField = (max, nums) => {
    let bombs = new Set;
    let bombsOnField = [];

    while (bombs.size < nums) {
        let rand = Math.floor(Math.random() * (max - 1));
        bombs.add(rand);
    }
    for (let x = 0; x < nums; x++) {
        bombsOnField.push([]);
        for (let y = 0; y < nums; y++) {
            let num = y + x *nums;
            if (bombs.has(num)) {
                bombsOnField[x][y] = 'b';
            } else {
                bombsOnField[x][y] = num;
            }                
        }
    }

    let field = [];

    bombsOnField.forEach((row, x) => {
        field.push([]);
        row.forEach((cell, y) => {
            let bombsAround = 0;
            if (cell === 'b') {
                field[x][y] = 'b';
            } else {
                for (let i = x - 1; i <= x + 1; i++) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if (bombsOnField[i] && bombsOnField[i][j] === 'b') {
                            bombsAround++;
                        }
                    }
                }
                field[x][y] = bombsAround;
            }                
        });
    });

    return field;
}

export default getBombsField;