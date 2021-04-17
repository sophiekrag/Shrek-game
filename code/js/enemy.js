//Creating circles to make puss and donkey move around the screen
class Enemy {
    constructor(img, width, height, radius) {
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        // this.radius = radius
        this.dx = (Math.random() - 0.5) * 10,
        this.dy = (Math.random() - 0.5) * 10,
        this.img = img
        this.width = width
        this.height = height
    }
    update() {
        this.drawImg()
        this.move()
        
    }
    drawImg() {
        const movingImg = new Image()
        movingImg.src = this.img
        ctx.drawImage(movingImg, this.x, this.y, this.width, this.height)
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

}