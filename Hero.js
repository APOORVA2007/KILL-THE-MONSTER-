class Hero{
    constructor(x,y,r){

        var options = {
            'restitution': 0.8,
            'density':0.1,
            'frictionAir': 1
        }

        this.r = r;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body); rgwe
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 140);
        pop();     
        
    }
}