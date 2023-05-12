import toCreateLayout from "./modules/to-create-layout.js";

document.addEventListener('DOMContentLoaded', () => {    

    const getRandomBombs = (max) => {
        let bombs = new Set;
        let field = [];

        while (bombs.size < 10) {
            let rand = Math.floor(Math.random() * max);
            bombs.add(rand);
        }

        for (let x = 0; x < 10; x++) {
            field.push([]);
            for (let y = 0; y < 10; y++) {
                let num = y + x *10;
                if (bombs.has(num)) {
                    field[x][y] = 'b';
                } else {
                    field[x][y] = num;
                }                
            }
        }
        return field;
    }

    const getField = () => {
        const bombsField = getRandomBombs(99);
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

    

    toCreateLayout(getField());

});

