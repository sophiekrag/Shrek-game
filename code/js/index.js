const startButton = document.getElementById('btn-start');
const introSection = document.getElementById('intro')

startButton.addEventListener("click", () => {
    introSection.style.display = "none"
    greateCanvas()
    animation()
})

//Creating the canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')

const greateCanvas = () => {
    canvas.id = 'gameCanvas';
    canvas.width = '850';
    canvas.height = '500';
    canvas.style.border = "5px solid black"
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas)
}

//Getting the elements inside the canvas
const animation = () => {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //family
    fiona.update()
    baby3.update()
    baby2.update()
    baby1.update()
    //player
    imgShrek()
    //enemy
    donkey.update()
    puss.update()   

    collision()
}

//Creating the player
const playerShrek = {
    x: 425,
    y: 370,
    width: 100,
    height: 130,
    speed: 10,
    
}
   
//Getting the img for the player
const imgShrek = () => {
    const playerImg = new Image();
    playerImg.src = "..//images/Shrek.png"
    ctx.drawImage(playerImg, playerShrek.x, playerShrek.y, playerShrek.width, playerShrek.height)
}

//Making the player move within the canvas using arrow keys
const move = e => {
    if (e.keyCode === 37 && playerShrek.x > 0) {
        playerShrek.x -= playerShrek.speed;
    }
    if (e.keyCode === 38 && playerShrek.y > 0) {
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
const donkey = new Enemy('../images/Donkey.png', 70, 90)
const puss = new Enemy('../images/PussInBoots.png', 70, 90)

//Family
const baby1 = new Family('../images/daughter-shrek.png', 60, 60)
const baby2 = new Family('../images/daughter-shrek.png', 60, 60)
const baby3 = new Family('../images/daughter-shrek.png', 60, 60)
const fiona = new Family('../images/fiona.png', 100, 130)


//Collision detection between enemy & player

const getDistance = (x1, y1, x2, y2) => {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

const collision = () => {
    if(getDistance(playerShrek.x, playerShrek.y, donkey.x, donkey.y) < ((donkey.width + donkey.height) / 2.5)) {
        alert('auwwww')
    }
    if(getDistance(playerShrek.x, playerShrek.y, puss.x, puss.y) < ((puss.width + puss.height) / 2.7)) {
        alert('noooo')
    }
}

