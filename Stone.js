class Stone{
    constructor(x,y,r){
        var options={
            'restitution':1,
            'friction':0.4,
            'density':0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("stone.png");
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y,this.body.position.r);
         imageMode(CENTER);
         image(this.image, 0 , 0 , this.r, this.r);
         pop();
    }
}