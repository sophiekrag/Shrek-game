class Family {
    constructor(img, width, height, hasCollision) {
        this.x = Math.random() * (1000 - 100) 
        this.y = Math.random() * (470 - 100) 
        this.img = img
        this.width = width
        this.height = height
        this.noCollision = hasCollision
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
            console.log('collide fam', this.img)
            
            this.noCollision = false
            playerShrek.family++
        }
    }
}

