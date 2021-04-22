const startButton = document.getElementById('btn-start');
const resetButton = document.getElementById('btn-reset');
const introSection = document.getElementById('intro')


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')
const message = document.querySelector('.header h1')

let familyArr = []
let raf = null

resetButton.style.display = 'none'

//Start button
startButton.addEventListener("click", () => {
    introSection.style.display = "none"
    startGame()
})

//Reset button
resetButton.addEventListener('click', () => {
    cancelAnimationFrame(raf) 
    console.log('clicked')
    playerShrek.x = 500
    playerShrek.y = 470
    playerShrek.lives = 3
    playerShrek.family = 0
    resetButton.style.display = 'none'
    message.textContent = "Shrek needs some family time!"
    startGame()  
})

//Creating the canvas
const createCanvas = () => {
    canvas.id = 'gameCanvas';
    canvas.width = 1000;
    canvas.height = 600;
    canvas.style.border = "5px solid black"
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas)
}

//Start the game
const startGame = () => {
    createCanvas()
    animation()
    
    const baby1 = new Family('./images/baby1.png', 60, 60, true)
    const baby2 = new Family('./images/baby2.png', 60, 60, true)
    const baby3 = new Family('./images/baby3.png', 60, 60, true)
    const fiona = new Family('./images/Fiona.png', 100, 130, true)

    familyArr = [baby1, baby2, baby3, fiona]
}


// Getting the elements inside the canvas
const animation = () => {

    raf = requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    backgroundImg()
    family()
    imgShrek()
    enemy()
    drawScore()
    winGame()
    loseGame()
}

//Background image
const backgroundImg = () => {
    const background = new Image()
    background.src = "./images/swamp.png"
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

//Creating the player
const playerShrek = {
    x: 500,
    y: 470,
    width: 100,
    height: 130,
    speed: 20,
    lives: 3,
    family: 0,
}

//Getting the img for the player
const imgShrek = () => {
    const playerImg = new Image();
    playerImg.src = "./images/Shrek.png"
    ctx.drawImage(playerImg, playerShrek.x, playerShrek.y, playerShrek.width, playerShrek.height)
}

//Making the player move within the canvas using arrow keys
const move = e => {
    if (e.keyCode === 37 && playerShrek.x > 0) {
        playerShrek.x -= playerShrek.speed;
    }
    if (e.keyCode === 38 && playerShrek.y > 0 + playerShrek.speed) {
        playerShrek.y -= playerShrek.speed;
    }
    if (e.keyCode === 39 && playerShrek.x < (canvas.width - 100)) {
        playerShrek.x += playerShrek.speed;
    }
    if (e.keyCode === 40 && playerShrek.y < (canvas.height - 130)) {
        playerShrek.y += playerShrek.speed;
    }
}

document.addEventListener('keydown', move)


//Enemy
const donkey = new Enemy('./images/Donkey.png', 70, 90)
const puss = new Enemy('./images/PussInBoots.png', 70, 90)

const enemy = () => {
    donkey.update()
    puss.update()
}


const family = () => {
    familyArr.forEach(fam => fam.update())
    console.log('called fam')
}


//Scoreboard
const drawScore = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(`Lives: ${playerShrek.lives}`, 8, 20);
    ctx.fillText(`Family Members: ${playerShrek.family}`, 8, 40);
}

//Win the game
const winGame = () => {
    if (playerShrek.family === 4) {
        gameStatus("You Won!!! Family Time!", "../images/familyTime.png")
       
    }
}

//Lose the game
const loseGame = () => {
    if (playerShrek.lives <= 0) {  
        gameStatus("Loser!!!", "./images/LosingShrek.png")
    }
}

//Game status
const gameStatus = (msg, img) => {
    resetButton.style.display = 'block'
    message.textContent = msg 
    const imge = new Image();
    imge.src = img
    ctx.drawImage(imge, 0, 0, canvas.width, canvas.height)
}


