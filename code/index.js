const startButton = document.getElementById('btn-start');

startButton.addEventListener("click", () => {
    alert("hello")
    greateCanvas()
    animation()
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
    x: 0,
    y: 0,
    width: 70,
    height: 90,
    speed: 9,
    moving: false
}

const playerImg = new Image();
playerImg.src = "..//images/Shrek.png"

function animateShrek() {
    ctx.drawImage(playerImg, 425, 400, playerShrek.width, playerShrek.height)
    requestAnimationFrame(animateShrek)
}









let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 10;
let radius = 30;

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('works')

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = 'black'
    ctx.stroke();

    if (x + radius > canvas.width || x - radius < (0)) {
        dx = -dx
    }

    if (y + radius > canvas.height || y - radius < (0)) {
        dy = -dy
    }

    x += dx
    y += dy
}