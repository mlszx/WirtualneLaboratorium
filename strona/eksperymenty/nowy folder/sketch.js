//----------
// pendulum
//----------

let a;
let aVel = 0;
let aAcc = 0;

let ball;
let pendulumLine = 500;
let origin;
let check = 1000;
let hit = false;
let cUp = 0;
let t = 0;
let tCheck = 0;
let okres = 0;

//----------
// g 0.981
//----------

let g = 1;

//----------
// sliders
//----------


function setup() {
  createCanvas(1280, 720);
  frameRate(30);
    
  //----------
  // pendulum
  //----------
  
  origin = createVector(1000, 0);
  a = PI/16;
  ball = createVector();
   
}

function draw() {
  background(220);


      
  //----------
  // pendulum
  //----------
  
  let fG = g * sin(a)/pendulumLine;
  aAcc = -fG;
  
  aVel += aAcc;
  a += aVel;
  
  ball.x = pendulumLine * sin(a) + origin.x;
  ball.y = pendulumLine * cos(a) + origin.y;
  
  stroke(0);
  strokeWeight(1);
  line(origin.x, origin.y, ball.x, ball.y);
  circle(ball.x, ball.y, 50);
  circle(origin.x, origin.y, 15)

  t = nf((millis()/1000), 1, 3);

  if (keyIsDown(RIGHT_ARROW)){
  pendulumLine += 1;
  }
  if (keyIsDown(LEFT_ARROW)){
  pendulumLine -= 1;
  }

  //----------
  // collide
  //---------- 
  
  stroke('black');
  strokeWeight(2);
  line(check, 0, check, 900)
  stroke("red")
  circle(ball.x, ball.y, 3);
  hit = collideLineCircle(check, 0, check, 1000, ball.x, ball.y, 5);
  
  
  if(ball.x >= 1097.5){
    stroke("lightgreen");
    strokeWeight(40);
    circle(ball.x, ball.y, 10);
    cUp += 1;
  }
    
  okres = nf(cUp/2, 1, 0)
  
  if(okres <= 10){
    tCheck = t;
  }
  
  //----------
  // text
  //----------  
  
  textSize(25);
  textFont("consolas");
  strokeWeight(0);
  text("Użyj klawiszy strzałek aby zmienić długość linki", 10, 50);
  text("prawo, lewo: szybka zmiana długości", 100, 90);
  text("góra, dół: precyzyjna zmiana długości", 100, 120);
  text("Długość linki: "+pendulumLine/10+" cm", 100, 300);
  text("Pozycja kulki: "+abs(round(ball.x-1000)), 100, 360);
  text("Okresy: "+okres, 100, 390);
  //text("Czas: "+t, 100, 420);
  text("Czas 10 okresów: "+tCheck, 100, 450)
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    pendulumLine += 1;
  } else if (keyCode === UP_ARROW) {
    pendulumLine -= 1;
  }
   
   //if (keyCode === 32) {
    //g = 0.981;
  //}
 
} 


