const startButton = document.getElementById('btn-start');

startButton.addEventListener("click", () => {
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
    canvas.style.border = "1px solid black"
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas)
    console.log('hello')
}

//Getting the elements inside the canvas
const animation = () => {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    imgShrek()
    donkey.update()
    puss.update()
}

//Creating the player
const playerShrek = {
    x: 425,
    y: 400,
    width: 70,
    height: 90,
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
    if (e.keyCode === 39 && playerShrek.x < (canvas.width - 70)) {
        playerShrek.x += playerShrek.speed;
    }
    if (e.keyCode === 40 && playerShrek.y < (canvas.height - 90)) {
        playerShrek.y += playerShrek.speed;
    }
}

document.addEventListener('keydown', move)



//Creating circles to make puss and donkey move around the screen
class Circle {
    constructor(radius) {
        this.x = Math.random() * canvas.width,
            this.y = Math.random() * canvas.height,
            this.dx = (Math.random() - 0.5) * 10,
            this.dy = (Math.random() - 0.5) * 10,
            this.radius = radius
    }
    update() {
        this.draw()
        this.move()
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.strokeStyle = 'black'
        ctx.stroke();
    }
    move() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    }
}

const donkey = new Circle(30)
const puss = new Circle(50)