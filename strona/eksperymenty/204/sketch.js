  //----------
  // zasilacz
  //----------
  let zXPos = 800;
  let zYPos = 0;
  let zX = 350;
  let zY = 200;
  let vVal = 0;
  let valV = 0;
  let valA = 0;
  let a = 0;

function blackC() {
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(0);
}


function textS() {
  textSize(15);
  textFont("consolas");
  textAlign(CENTER, CENTER);
  fill("black");
  strokeWeight(0);
}

function setup() {
  createCanvas(1280, 720);
  
  //----------
  // cewka
  //----------
  origin = createVector(540, -1000);
  cewkaU = createVector();
  cewkaU2 = createVector();
      
}

function draw() {
  background(220);
  textS();
  
  
  //----------------------------------------
  //magnes
  //----------------------------------------
  fill("gray");
  stroke("gray");
  rect(30, 600, 1200, 150, 0, 0, 10, 0);
  rect(30, 200, 1200, 150, 0, 10, 0, 0);
  rect(1080, 340, 150, 300, 0, 0, 0, 0);
  
  //----------------------------------------
  //cewka
  //----------------------------------------
  let r = random(-0.002, 0.002);
  
  if (keyIsDown(UP_ARROW)){
  vVal += 0.001;
  }
  if (keyIsDown(DOWN_ARROW)){
  vVal -= 0.001;
  }
  

  let cewkaL = 1450;
  
  //a = (r*sliderV.value()+sliderV.value())/3.8
  a = -(vVal/3.8)
  valV = nf(vVal*16.7, 1,3);
  
  cewkaU.x = cewkaL * sin(a) + origin.x;
  cewkaU.y = cewkaL * cos(a) + origin.y;
  
  cewkaU2.x = (cewkaL+450) * sin(a) + origin.x;
  cewkaU2.y = (cewkaL+450) * cos(a) + origin.y;
  
  stroke("black");
  strokeWeight(54);
  line(origin.x, origin.y, cewkaU.x, cewkaU.y);
  stroke("red");
  strokeWeight(0.5);
  line(origin.x, origin.y, cewkaU2.x, cewkaU2.y);
  fill("rgb(184, 115, 51)");
  stroke("rgb(184, 115, 51)");
  strokeWeight(50);
  line(origin.x, origin.y, cewkaU.x, cewkaU.y);
  strokeWeight(0);
  circle(cewkaU.x, cewkaU.y, 50);
   
  //----------------------------------------
  //zasilacz
  //----------------------------------------
  
  fill("rgb(209,206,188)")
  stroke("black")
  strokeWeight(2)
  rect(zXPos, zYPos, zX, zY, 25, 25, 25, 25);
  fill("rgb(0,0,0)")
  rect(zXPos+25, zYPos+25, zX-50, zY-50, 5, 5, 5, 5);
  textSize(60);
  textFont("consolas");
  textAlign(LEFT, CENTER);
  fill("red");
  strokeWeight(0);
  text(abs(valV), zXPos+25,zYPos+70)
  text(abs(nf(valA,1,3)), zXPos+25,zYPos+130)
  textSize(20);
  textFont("consolas");
  textAlign(LEFT, CENTER);
  fill("white");
  text("V Voltage", zXPos+220, zYPos+70);
  text("A Current", zXPos+220, zYPos+130);
  
  fill("rgb(99,98,93)")
  
  rect(zXPos-50, zYPos+250, zX+100, 90, 5, 5, 5, 5);
  fill("black")
  textSize(25);
  textFont("consolas");
  textAlign(CENTER, CENTER);
  fill("black");
  strokeWeight(0);
  text("0", zXPos+40, zYPos+280);
  text("5", zXPos+130, zYPos+280);
  text("15", zXPos+220, zYPos+280);
  text("25", zXPos+300, zYPos+280);
  text("Uzyskana ilość zwojów: "+zwoje, zXPos+180, zYPos+320);
  if(zwoje==5){
  valA = vVal*16.7*0.073+(vVal*vVal)/11;
  fill("black")
  rect(zXPos+30, zYPos+200, 20, 50);
  fill("red")
  rect(zXPos+120, zYPos+200, 20, 50);
  }else if(zwoje==10){
  valA = vVal*16.7*0.035+(vVal*vVal)/11;
  fill("black")
  rect(zXPos+120, zYPos+200, 20, 50);
  fill("red")
  rect(zXPos+210, zYPos+200, 20, 50); 
  }else if(zwoje==15){
  valA = vVal*16.7*0.023+(vVal*vVal)/15;
  fill("black")
  rect(zXPos+30, zYPos+200, 20, 50);
  fill("red")
  rect(zXPos+210, zYPos+200, 20, 50); 
  }else if(zwoje==20){
  valA = vVal*16.7*0.016+(vVal*vVal)/12;
  fill("black")
  rect(zXPos+120, zYPos+200, 20, 50);
  fill("red")
  rect(zXPos+290, zYPos+200, 20, 50); 
  }else if(zwoje==25){
  valA = vVal*16.7*0.011+(vVal*vVal)/11;
  fill("black")
  rect(zXPos+30, zYPos+200, 20, 50);
  fill("red")
  rect(zXPos+290, zYPos+200, 20, 50); 
  }else{
  a = 0;
  valA = 0;
  vVal = 0;  
  valV = 0;
  textSize(20);
  text("Nie można uzyskać takiej ilości zwojów", zXPos+175, zYPos+230);}
  //----------------------------------------
  //miarka
  //----------------------------------------
  let miarkah = 680
  blackC();
  textS();
  strokeWeight(2);
  line(35, miarkah, 1045, miarkah);
  for (let i = 0; i <= 198; i++) {
    //line(65 + i * 25, miarkah, 65 + i * 25, miarkah-10);
    line(45 + i * 5, miarkah, 45 + i * 5, miarkah-5);
  }
  for (let i = 0; i <= 20; i++) {
    blackC();
    strokeWeight(2);
    line(40 + i * 50, miarkah, 40 + i * 50, miarkah-20);
  }
   for (let i = -10; i <= 10; i++) {
    blackC();
    text(abs(i) * 10, 540 + i * 50, miarkah-30);
  }
  text("[mm]", 50, miarkah+15);

}
  let zwoje = 5;
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    zwoje += 5;
  } else if (keyCode === LEFT_ARROW) {
    zwoje -= 5;
  }
  if (keyCode === 32) {
    a = 0;
    valA = 0;
    vVal = 0;  
    valV = 0;
  }
}

