class Game {
    constructor(canvas, ctx) {
        this.canvas = null;
        this.ctx = undefined;
        this.background = new Image()
        
    }
    startScreen () {
        this.canvas = document.getElementById('shrek')
        this.ctx = this.canvas.getContext('2d')
        const c = this.ctx
        this.background.src = '../images/swamp1.jpg'
        const img = this.background
        img.onload = function() {
            c.drawImage(img,0,0, 850, 700)
        }
        console.log('hoi')
    }
}

let games = new Game

const startButton = document.getElementById('btn-start');

startButton.addEventListener("click", () => {
    alert ("hello")
    games.startScreen()
}) 