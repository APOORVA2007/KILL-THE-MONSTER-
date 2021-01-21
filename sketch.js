const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;

function preload() {
    backgroundImg = loadImage("GamingBackground.png");
    monsterImg = loadImage("Monster-01.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,180,70,70);
    box2 = new Box(700,180,70,70);
    box3 = new Box(700,180,70,70);
    box4 = new Box(700,180,70,70);
    box5 = new Box(700,180,70,70);
    box6 = new Box(700,180,70,70);

    box7 = new Box(600,180,70,70);
    box8 = new Box(600,180,70,70);
    box9 = new Box(600,180,70,70);
    box10 = new Box(600,180,70,70);
    box11 = new Box(600,180,70,70);
    box12 = new Box(600,180,70,70);

    box13 = new Box(500,180,70,70);
    box14 = new Box(500,180,70,70);
    box15 = new Box(500,180,70,70);
    box16 = new Box(500,180,70,70);
    box17 = new Box(500,180,70,70);
    box18 = new Box(500,180,70,70);

    monster = createSprite(1000, 300, 50, 50);
    monster.addImage(monsterImg);
    monster.scale = 0.15;
    hero = new Hero(200, 400, 45);
    chain = new Chain(hero.body, {x:60, y:300});
    ground = new Ground(400,650,800,15);

    

}

function draw(){
   background(backgroundImg);
    
    Engine.update(engine);
    //strokeWeight(4);

    fill("brown");
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box9.display();
    box7.display();
    box8.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    hero.display();
    monster.display();
    chain.display();

    drawSprites();

}

function mouseDragged(){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

