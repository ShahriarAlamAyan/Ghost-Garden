
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


/*
    document.addEventListener('keydown', function (event) {
    const key = event.keyCode;
    
    if (key === 37) {
        characterLeft = characterLeft - 10;
        //ch-left (right) 
        character.src = 'media/ghost-left.gif'; 
    } else if (key === 38) { 
        characterTop = characterTop - 10;
    } else if (key === 39) { 
        characterLeft = characterLeft + 10;
        //ch-right (changed)
        character.src = 'media/ghost-right.gif'; 
    } else if (key === 40) { 
        characterTop = characterTop + 10;
    }
        //---Exicution Deperment---//
    character.style.left = characterLeft + 'px';
    character.style.top = characterTop + 'px';

    gameWorld.style.transform = `translate(${-characterLeft + window.innerWidth / 2}px, ${-characterTop + window.innerHeight / 2}px)`;
});*/




let characterLeft = 400;
let characterTop = 400;
const maxScroll = 2000; 

// canvas elements
let gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');
let character = document.getElementById('character');

//canvas size
gameCanvas.width = 1600;
gameCanvas.height = 1600;


let backgroundImage = new Image();
backgroundImage.src = 'media/grass.jpg';

// background scroll position
let positionX = 0;
let positionY = 0;


function drawBackground() {
    const tileSize = 200; // each tile
    for (let x = positionX % tileSize - tileSize; x < gameCanvas.width; x += tileSize) {
        for (let y = positionY % tileSize - tileSize; y < gameCanvas.height; y += tileSize) {
            ctx.drawImage(backgroundImage, x, y, tileSize, tileSize);
        }
    }
}

// character position and background scroll
function updatePosition() {
    if (characterLeft < maxScroll && characterLeft > 0) {
        positionX = -characterLeft + 400; // Scroll until reaching the boundary
    }

    if (characterTop < maxScroll && characterTop > 0) {
        positionY = -characterTop + 400;
    }

    // Clamp character position to the boundaries
    // characterLeft = Math.min(Math.max(characterLeft, 0), maxScroll);
    // characterTop = Math.min(Math.max(characterTop, 0), maxScroll);

    if (characterLeft < 0) {
        characterLeft = 0; 
    } else if (characterLeft > maxScroll) {
        characterLeft = maxScroll; 
    }
    
    if (characterTop < 0) {
        characterTop = 0; 
    } else if (characterTop > maxScroll) {
        characterTop = maxScroll; 
    }
    
}

// Render loop
function render() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawBackground();
    requestAnimationFrame(render);
}

// key press
document.addEventListener('keydown', (event) => {
    const key = keys[event.code];
    if (key) {
        key.execute();
        updatePosition();
    }
});

///////////////
backgroundImage.onload = render;
