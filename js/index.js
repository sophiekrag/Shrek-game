const startButton = document.getElementById('btn-start');
const introSection = document.getElementById('intro')
const refresh = document.getElementById('refresh')

startButton.addEventListener("click", () => {
    introSection.style.display = "none"
    createCanvas()
    animation()
})

//Creating the canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')

const createCanvas = () => {
    canvas.id = 'gameCanvas';
    canvas.width = 1000;
    canvas.height = 600;
    canvas.style.border = "5px solid black"
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas)
}

//Background image
const backgroundImg = () => {
    const background = new Image()
    background.src = "./images/swamp.png"
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}


// Getting the elements inside the canvas
let gameStart = true

const animation = () => {
    if (gameStart) {

        requestAnimationFrame(animation);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        backgroundImg()
        family()
        imgShrek()
        enemy()
        drawScore()
    }
    winGame()
    loseGame()
}


//Creating the player
const playerShrek = {
    x: 500,
    y: 470,
    width: 100,
    height: 130,
    speed: 20,
    lives: 3,
    family: 0
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


//Family
const baby1 = new Family('./images/baby1.png', 60, 60)
const baby2 = new Family('./images/baby2.png', 60, 60)
const baby3 = new Family('./images/baby3.png', 60, 60)
const fiona = new Family('./images/Fiona.png', 100, 130)

const family = () => {
    baby1.update()
    baby2.update()
    baby3.update()
    fiona.update()
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
        winImg()
        const message = document.querySelector('.header h1')
        message.textContent = "You Won!!! Family Time!"
        gameStart = false
    }
}

const winImg = () => {
    const familyImg = new Image();
    familyImg.src = "./images/familyTime.png"
    ctx.drawImage(familyImg, 0, 0, canvas.width, canvas.height)
}


//Lose the game
const loseGame = () => {
    if (playerShrek.lives === 0) {
        loseImg()
        const message = document.querySelector('.header h1')
        message.textContent = "Loser!!!"
        gameStart = false
    }
}

const loseImg = () => {
    const losingImg = new Image();
    losingImg.src = "./images/LosingShrek.png"
    ctx.drawImage(losingImg, 0, 0, canvas.width, canvas.height)
}

