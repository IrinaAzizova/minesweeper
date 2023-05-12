import getRandomBombs from "./modules/get-random-bombs.js";
import getField from "./modules/get-field.js";
import toCreateLayout from "./modules/to-create-layout.js";

document.addEventListener('DOMContentLoaded', () => {    
    toCreateLayout(
        getField(
            100,
            10,
            getRandomBombs
        )
    );
});

