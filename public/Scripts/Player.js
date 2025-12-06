export default class Player{
    WALK_ANIMATION_TIMER = 200;
    walkanimationTImer = this.WALK_ANIMATION_TIMER;
    dinoRunImages = [];

    jumpPressed = false;
    jumpInProgress = false;
    falling = false;
    JUMP_SPEED = 0.6;
    GRAVITY = 0.1;

    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, scaleRatio){
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;
        this.scaleRatio = scaleRatio;
        this.x = 10*scaleRatio;
        this.y = this.canvas.height - this.height - 1.5*scaleRatio;
        this.standingStillImage = new Image();
        this.standingStillImage.src = "./Images/Sprites/Not_Yoshi000.png";
        this.image = this.standingStillImage;
        this.yStandingPosition = this.y;


        //KEYBOARD LISTENERS FOR JUMPING
        window.removeEventListener("keydown",this.keydown);
        window.removeEventListener("keyup",this.keyup);

        window.addEventListener("keydown",this.keydown)
            
        window.addEventListener("keyup", this.keyup)


        //for touch devices
         window.removeEventListener("touchstart", this.touchstart);
    window.removeEventListener("touchend", this.touchend);

    window.addEventListener("touchstart", this.touchstart);
    window.addEventListener("touchend", this.touchend);
  


        

        const dinoRunImage1 = new Image();
        dinoRunImage1.src = "./Images/Sprites/Not_Yoshi000.png";

        const dinoRunImage2 = new Image();
        dinoRunImage2.src = "./Images/Sprites/Not_Yoshi002.png";

        const dinoRunImage3 = new Image();
        dinoRunImage3.src = "./Images/Sprites/Not_Yoshi003.png";

        const dinoRunImage4 = new Image();
        dinoRunImage4.src = "./Images/Sprites/Not_Yoshi004.png";
        
        const dinoRunImage5 = new Image();
        dinoRunImage5.src = "./Images/Sprites/Not_Yoshi005.png";


        this.dinoRunImages.push(dinoRunImage1, dinoRunImage2, dinoRunImage3, dinoRunImage4, dinoRunImage5);
}  
         keydown = (event) =>{
            if(event.code === "Space" || event.code === "ArrowUp"){
                this.jumpPressed = true;
            }   
        }
        keyup = (event) =>{
            if(event.code === "Space" || event.code === "ArrowUp"){
                this.jumpPressed = false;
            }
        }

          touchstart = () => {
            this.jumpPressed = true;
             };

        touchend = () => {
        this.jumpPressed = false;
     };

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update(gameSpeed, frameTimeDelta){
        this.run(gameSpeed, frameTimeDelta);
        this.jump( frameTimeDelta);
    }
    run(gameSpeed, frameTimeDelta){
        if(this.walkanimationTImer <= 0){
            if(this.image === this.dinoRunImages[0]){
                this.image = this.dinoRunImages[3];
            }
            else{
                this.image = this.dinoRunImages[0];
            }
            this.walkanimationTImer = this.WALK_ANIMATION_TIMER;
        }
        this.walkanimationTImer -= gameSpeed * frameTimeDelta;
    }
    jump(frameTimeDelta) {
    if (this.jumpPressed) {
      this.jumpInProgress = true;
    }

    if (this.jumpInProgress && !this.falling) {
      if (
        this.y > this.canvas.height - this.minJumpHeight ||
        (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)
      ) {
        this.y -= this.JUMP_SPEED * frameTimeDelta * this.scaleRatio;
      } else {
        this.falling = true;
      }
    } else {
      if (this.y < this.yStandingPosition) {
        this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio;
        if (this.y + this.height > this.canvas.height) {
          this.y = this.yStandingPosition;
        }
      } else {
        this.falling = false;
        this.jumpInProgress = false;
      }
    }
  }
}