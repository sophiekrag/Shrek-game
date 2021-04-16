const startButton = document.getElementById('btn-start');

startButton.addEventListener("click", () => {
    greateCanvas()
    animateShrek()
})


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')

const greateCanvas = () => {
    canvas.id = 'gameCanvas';
    canvas.width = '850';
    canvas.height = '500';
    canvas.style.border = "1px solid black"
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas)
    console.log('hello')
}

const keys = [];

const playerShrek = {
    x: 425,
    y: 400,
    width: 70,
    height: 90,
    speed: 9,
    moving: false,
}


const animateShrek = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const playerImg = new Image();
    playerImg.src = "..//images/Shrek.png"
    ctx.drawImage(playerImg, playerShrek.x, playerShrek.y, playerShrek.width, playerShrek.height)
    requestAnimationFrame(animateShrek)
}

const move = e => {
    if (e.keyCode === 37) {
        playerShrek.x -= playerShrek.speed;
    }
    if (e.keyCode === 38) {
        playerShrek.y -= playerShrek.speed;
    }
    if (e.keyCode === 39) {
        playerShrek.x += playerShrek.speed;
    }
    if (e.keyCode === 40) {
        playerShrek.y += playerShrek.speed;
    }
}

document.addEventListener('keydown', move)




















// document.addEventListener('keydown', (event) => {
//     if (event.key === 37){
//             playerShrek.x -= playerShrek.speed;
//             console.log('moving left')
//     }
//     if (event.key === 38) {
//             playerShrek.y -= playerShrek.speed;
//     }
//     if (event.key === 39){
//             playerShrek.x += playerShrek.speed;
//     }
//     if (event.key === 40){
//             playerShrek.y += playerShrek.speed;
//     }
//     animateShrek()
//     console.log('move bitch')
// })