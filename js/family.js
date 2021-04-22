class Family {
    constructor(img, width, height) {
        this.x = Math.random() * (1000 - 100) 
        this.y = Math.random() * (470 - 100) 
        this.img = img
        this.width = width
        this.height = height
        this.noCollision = true
    }
    update() {
        if (this.noCollision) {
            this.drawImg()
            this.collisionFamily()
        }
    }
    drawImg() {
        const familyImg = new Image()
        familyImg.src = this.img
        ctx.drawImage(familyImg, this.x, this.y, this.width, this.height)
    }
    collisionFamily() { 
        if (playerShrek.x < this.x + this.width &&
            playerShrek.x + playerShrek.width > this.x &&
            playerShrek.y < this.y + this.height &&
            playerShrek.y + playerShrek.width > this.y) {

            this.noCollision = false
            playerShrek.family ++
        }
    }
}

