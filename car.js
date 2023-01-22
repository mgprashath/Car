class Car{
    constructor(x, y, width, height){
        this.width= width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.speed =0;
        this.acceleration=0.2;
        this.maxSpeed = 3;
        this.friction=0.05;
        this.angle=0;

        this.controls  = new Controls();
    }

    update(){
        if(this.controls.keyUp){
            this.speed+=this.acceleration;
        }
        if(this.controls.keyDown){
            this.speed-=this.acceleration;
        }
        if(this.speed!=0){
            const flip = this.speed>0?1:-1;
            if(this.controls.keyLeft){
                this.angle+=0.03*flip;
            }
            if(this.controls.keyRight){
                this.angle-=0.03*flip;
            }
        }
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

    draw(context){

        context.save();
        context.translate(this.x, this.y);
        context.rotate(-this.angle);
        context.beginPath();     

        context.rect(
            -this.width/2,
            -this.width/2,
            this.width,
            this.height
        ); 

        context.fill();
        context.restore();
    }
}