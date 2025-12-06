export default class Hydrant{
    constiructor(ctx, x, y, width, height, image){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    update(speed, gameSpeed, FrameTimeDelta, scaleRatio){
        this.x -= speed * gameSpeed * FrameTimeDelta * scaleRatio;
    }
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}