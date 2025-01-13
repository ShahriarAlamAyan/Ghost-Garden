const character = document.querySelector('.character')
// console.log(character);
// function moveCherecter() {
//     console.log('moveing');
//     character.style.left = `50px`
// }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click',moveCherecter)


let characterLeft = 0; 
let characterTop = 0; 

// let step = 10;

// document.addEventListener('keydown', function (event) {
    // const key = event.keyCode;
const keys ={
    'ArrowRight': {
        execute: () => {
            character.src = 'media/ghost-right.gif'
            characterLeft = characterLeft + 10;
            return characterLeft;
        }
        },

    'ArrowDown': {
        execute: () => {
            // character.src = 'media/ghost-right.gif'
            characterTop = characterTop + 10;
            return characterTop;
        }
        },
    'ArrowUp': {
        execute: () => {
            // character.src = 'media/ghost-right.gif'
            characterTop = characterTop - 10;
            return characterLeft;
        }
        },
    'ArrowLeft': {
        execute: () => {
            character.src = 'media/ghost-left.gif'
            characterLeft = characterLeft - 10;
            return characterLeft;
        }
        },
}

    document.addEventListener("keydown", (event) => {
        const key = keys[event.code];
        console.log(event);
        
        if(key) {
        key.execute()
        character.style.left = characterLeft + 'px';
        character.style.top = characterTop + 'px';
        }
    });

    // if (key === 37) {
    //     characterLeft = characterLeft - 10;
    //     //ch-left (right) 
    //     character.src = 'media/ghost-left.gif'; 
    // } else if (key === 38) { 
    //     characterTop = characterTop - 10;
    // } else if (key === 39) { 
    //     characterLeft = characterLeft + 10;
    //     //ch-right (changed)
    //     character.src = 'media/ghost-right.gif'; 
    // } else if (key === 40) { 
    //     characterTop = characterTop + 10;
    // }
        //---Exicution Deperment---//
    // character.style.left = characterLeft + 'px';
    // character.style.top = characterTop + 'px';
// });
