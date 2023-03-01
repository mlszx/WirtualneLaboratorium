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
let checkVal = 1285;
let hit = false;
let cUp = 0;
let t = 0;
let tCheck = 0;
let tWahan = 0;
let t10 = 0;
let cenzX = -100;
let cenzY = -100;
//----------
// g 9.81
//----------

let g = 0;

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
  line(check-150, 719, check+150, 719)
  stroke("red")
  circle(ball.x, ball.y, 3);
  
  line(checkVal, 0, checkVal, 900)  
  
  //----------
  // text
  //----------  
  
  textSize(25);
  textFont("consolas");
  strokeWeight(0);
  text("Użyj klawiszy strzałek aby zmienić długość linki:", 10, 50);
  text("prawo, lewo: szybka zmiana długości", 100, 90);
  text("góra, dół: precyzyjna zmiana długości", 100, 120);
  text("Wykonanie pomiaru:", 10, 160);
  text("SPACJA: rozpoczęcie pomiaru", 100, 190);
  text("ENTER: zatrzymanie pomiaru", 100, 220);
  text("F5: odświeżenie strony", 100, 250);
  text("Długość linki: "+pendulumLine/10+" cm", 100, 300);
  text("Pozycja kulki: "+abs(round(ball.x-1000)), 100, 360);
  text("Czas: ", 100, 420);
  text("Czas: "+nf((tWahan), 1, 3), cenzX, cenzY);
  text("Czas 10 okresów: "+nf((t10), 1, 3), 100, 450)
  tWahan = t-tCheck;
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    pendulumLine += 1;
  } else if (keyCode === UP_ARROW) {
    pendulumLine -= 1;
  }
   
   if (keyCode === 32) {
    g = 8.9;
    tCheck = t;
    checkVal = ball.x - 30;
    cenzX = 100;
    cenzY = 420;
  }
  if (keyCode === 13) { 
    t10 = tWahan;
  }
 
} 


