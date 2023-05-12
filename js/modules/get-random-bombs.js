const getRandomBombs = (max, nums) => {
    let bombs = new Set;
    let field = [];

    while (bombs.size < nums) {
        let rand = Math.floor(Math.random() * max);
        bombs.add(rand);
    }

    for (let x = 0; x < nums; x++) {
        field.push([]);
        for (let y = 0; y < nums; y++) {
            let num = y + x *nums;
            if (bombs.has(num)) {
                field[x][y] = 'b';
            } else {
                field[x][y] = num;
            }                
        }
    }
    return field;
}

export default getRandomBombs;