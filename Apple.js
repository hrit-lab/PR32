class Apple{
    constructor(x,y,r){
        var options={
            'restituion':0.4,
            'friction':0.0,
            //isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("apple.png");
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y,this.body.position.r);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}