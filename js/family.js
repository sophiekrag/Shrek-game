class Family {
    constructor(img, width, height) {
        this.x = Math.floor(Math.random() * (1000 - 200) )
        this.y = Math.floor(Math.random() * (600 - 130) )
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
    getDistance(x1, y1, x2, y2) {
        const xDistance = x2 - x1;
        const yDistance = y2 - y1;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
    }
    collisionFamily() {
        if (this.getDistance(playerShrek.x, playerShrek.y, this.x, this.y) < ((this.width + this.height) / 2.5)) {
            this.noCollision = false
            playerShrek.family ++
            console.log('Yippie')
        }
    }
}