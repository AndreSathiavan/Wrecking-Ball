var num
num=10;
//console.log(num);
var str;
str = 'Andre';
//console.log(str);
var obj;
//console.log(obj);
var obj2;
obj2 = null;
//console.log(obj2);
var arr;
arr = [20,'Sathiavan',num,str];
//console.log(arr);
//console.log(arr[1]);
//console.log(arr[3]);
arr.push(17);
//console.log(arr);
var arr2;
var bg;
arr2 = [[2,3],5,6,[8,9,10,11]]
//console.log(arr2[2]);
//console.log(arr2[3][2]);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg, backgroundImg2, platform;
var constrainedLog;
var sling;
var gameState = 'onSling';
var score=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    backgroundImg2 = loadImage("sprites/bg2.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(810,370,70,70);
    box2 = new Box(810,300,70,70);
    box3 = new Box(810,230,70,70);
    box4 = new Box(810,160,70,70);
    log = new Log(550,190,380, PI/09);
    

    box5 = new Box(885,370,70,70);
    box6 = new Box(885,300,70,70);
    box7 = new Box(885,230,70,70);
    box8 = new Box(885,160,70,70);

    box9 = new Box(960,370,70,70);
    box10 = new Box(960,300,70,70);
    box11 = new Box(960,230,70,70);
    box12 = new Box(960,160,70,70);
    
    ball = new Bird(600,200);
    chain = new Chain(ball.body, {x:600, y:30});

    //constrainedLog= new Log(230,180,80,PI/2)

    //sling = new Chain(bird.body, {x:200, y:50} );
}

function draw(){
    if(bg)
    background(bg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    //console.log(box2.body.angle);
   
    ground.display();
    box1.display();
    box2.display();
    box3.display(); 
    box4.display();
    log.display();

    box5.display();
    box6.display();
    box7.display(); 
    box8.display();

    box9.display();
    box10.display();
    box11.display(); 
    box12.display();

    ball.display();
    //platform.display();
    //constrainedLog.display();
    chain.display();
    
    getDateTime();

    textSize(30);
    fill('white');
    text('score = ' + score, width-200, 50);
}

function mouseDragged(){
    if(gameState === 'onSling'){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
    }
}

function mouseReleased(){
    chain.fly();
    gameState = 'offSling';
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball.body);
        Matter.Body.setPosition(ball.body, {x: 180, y:50});
        gameState = 'onSling';
        bird.trajectory = [];
    }
}

async function getDateTime(){
    var response =  await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo');
    var responseJson = await response.json();
    //console.log(responseJson);
    var dt = responseJson.datetime;
    var hour = dt.slice(11,3);
    //console.log(hour);
    if(hour>6 && hour<19){
        bg = backgroundImg;
    } else {
        bg = backgroundImg;
    }
}