class Family {
    constructor(img, width, height) {
        this.x = Math.random() * (canvas.width * 2)
        this.y = Math.random() * (canvas.height * 2)
        this.img = img
        this.width = width
        this.height = height
    }
    update() {
        this.drawImg()   
    }
    drawImg() {
        const movingImg = new Image()
        movingImg.src = this.img
        ctx.drawImage(movingImg, this.x, this.y, this.width, this.height)
    }
}