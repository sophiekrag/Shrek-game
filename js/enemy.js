//Creating circles to make puss and donkey move around the screen
class Enemy {
    constructor(img, width, height) {
        this.x = Math.random() * 200
        this.y = Math.random() * 200
        this.dx = (Math.random() - 0.5) * 10
        this.dy = (Math.random() - 0.5) * 10
        this.img = img
        this.width = width
        this.height = height
    }
    update() {
        this.drawImg()
        this.move()
        this.collisionEnemy()
    }
    drawImg() {
        const enemyImg = new Image()
        enemyImg.src = this.img
        ctx.drawImage(enemyImg, this.x, this.y, this.width, this.height)
    }
    move() {
        if (this.x + this.width > canvas.width || this.x < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.height > canvas.height || this.y < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    }
    collisionEnemy() {
        if (playerShrek.x < this.x + this.width &&
            playerShrek.x + playerShrek.width > this.x &&
            playerShrek.y < this.y + this.height &&
            playerShrek.y + playerShrek.width > this.y) {
    
            this.x = Math.random() * 200
            this.y = Math.random() * 200
            playerShrek.lives--
            playerShrek.x = 500
            playerShrek.y = 470
        }
    }

}