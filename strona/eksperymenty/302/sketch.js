let sliderS;
let sliderE;

function blackC() {
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(0);
}
function blueC() {
  fill(204, 229, 255);
  stroke(102, 178, 255);
  strokeWeight(2);
}
function yellowC() {
  fill(255, 255, 204);
  stroke(255, 255, 204);
  strokeWeight(2);
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
  sliderS = createSlider(5, 1000, 100, 0.01);
  sliderS.position(30, 450);
  sliderS.style("width", "1015px");
  sliderS2 = createSlider(5, 1020, 1020, 0.01);
  sliderS2.position(30, 465);
  sliderS2.style("width", "1015px");
  sliderE = createSlider(10, 1000, 1000, 0.01);
  sliderE.position(30, 500);
  sliderE.style("width", "1015px");
  sliderZS = createSlider(0.1, 1.5, 1, 0.01);
  sliderZS.position(30, 550);
  sliderZS.style("width", "1015px");
}

function draw() {
  background(220);
  textS();
  text("położenie soczewki", 550, 440);
  let s = sliderS.value();
  let s2 = sliderS2.value();
  text("położenie ekranu", 550, 490);
  let e = sliderE.value();
  text("zdolność skupuająca soczewki", 550, 540);
  let zS = sliderZS.value();

  let sZ = createVector(40, 200);
  let sA = createVector(40 + s, 150);
  let sB = createVector(40 + s, 250);
  let sK = createVector(1040, s * sin(zS));

  let a = 0.27; // <= trzeba dostosowac do danej soczewki i jej mozliwosci skupiajacej

  //----------------------------------------
  //miarka
  //----------------------------------------
  
  blackC();
  strokeWeight(2);
  line(35, 400, 1050, 400);
  for (let i = 0; i <= 100; i++) {
    line(40 + i * 10, 400, 40 + i * 10, 390);
    line(45 + i * 10, 400, 45 + i * 10, 395);
  }
  for (let i = 0; i <= 100; i++) {
    blackC();
    strokeWeight(2);
    line(40 + i * 100, 400, 40 + i * 100, 380);

    blackC();
    text(i * 10, 40 + i * 100, 370);
  }
  fill(220)
  rect(1100, 0, 170, 720);
  //----------------------------------------
  //swiatlo
  //----------------------------------------

  yellowC();
  circle(35, 200, 20);
  fill("gray");
  stroke("gray");
  rect(5, 190, 30, 20, 5, 0, 0, 5);
  yellowC();
  for (let i = 0; i <= 10; i++) {
    line(sZ.x, sZ.y, sA.x, i * 10 + sA.y);
  }
  //line(sZ.x, sZ.y, sB.x, sB.y);
  
 

  line(sZ.x, sZ.y, 1040, sZ.y);
  
  hitA0 = collideLineLine(40 + s2, 150, 40 + s2, 250, sA.x, sA.y, sK.x, a * s * sin(zS), true);
  hitA1 = collideLineLine(40 + s2, 150, 40 + s2, 250, sA.x, sA.y, sK.x, 1 * s * sin(zS), true);
  hitA2 = collideLineLine(40 + s2, 150, 40 + s2, 250, sA.x, sA.y, sK.x, 2 * s * sin(zS), true);
  hitA3 = collideLineLine(40 + s2, 150, 40 + s2, 250, sA.x, sA.y, sK.x, 3 * s * sin(zS), true);
  hitA4 = collideLineLine(40 + s2, 150, 40 + s2, 250, sA.x, sA.y, sK.x, 4 * s * sin(zS), true);
  hitB0 = collideLineLine(40 + s2, 150, 40 + s2, 250, sB.x, sB.y, sK.x, 400 + a * s * -sin(zS), true);
  hitB1 = collideLineLine(40 + s2, 150, 40 + s2, 250, sB.x, sB.y, sK.x, 400 + 1 * s * -sin(zS), true);
  hitB2 = collideLineLine(40 + s2, 150, 40 + s2, 250, sB.x, sB.y, sK.x, 400 + 2 * s * -sin(zS), true);
  hitB3 = collideLineLine(40 + s2, 150, 40 + s2, 250, sB.x, sB.y, sK.x, 400 + 3 * s * -sin(zS), true);
  hitB4 = collideLineLine(40 + s2, 150, 40 + s2, 250, sB.x, sB.y, sK.x, 400 + 4 * s * -sin(zS), true);
  if(hitA0.x && hitA0.y != false){
    line(sA.x, sA.y, hitA0.x, hitA0.y);
    line(hitA0.x, hitA0.y, sK.x, a * s * 0.5*sin(zS));
  }else{
    line(sA.x, sA.y, sK.x, a * s * sin(zS));
  }
  if(hitA1.x && hitA1.y != false){
    line(sA.x, 10+sA.y, hitA1.x, hitA1.y);
    line(hitA1.x, hitA1.y, sK.x, 1 * s * 0.5*sin(zS));
  }else{
    line(sA.x, 10+sA.y, sK.x, 1 * s * sin(zS));
  }
  if(hitA2.x && hitA2.y != false){
    line(sA.x, 20+sA.y, hitA2.x, hitA2.y);
    line(hitA2.x, hitA2.y, sK.x, 2 * s * 0.5*sin(zS));
  }else{
    line(sA.x, 20+sA.y, sK.x, 2 * s * sin(zS));
  }
  if(hitA3.x && hitA3.y != false){
    line(sA.x, 30+sA.y, hitA3.x, hitA3.y);
    line(hitA3.x, hitA3.y, sK.x, 3 * s * 0.5*sin(zS));
  }else{
    line(sA.x, 30+sA.y, sK.x, 3 * s * sin(zS));
  }
  if(hitA4.x && hitA4.y != false){
    line(sA.x, 40+sA.y, hitA4.x, hitA4.y);
    line(hitA4.x, hitA4.y, sK.x, 4 * s * 0.5*sin(zS));
  }else{
    line(sA.x, 40+sA.y, sK.x, 4 * s * sin(zS));
  }
  if(hitB0.x && hitB0.y != false){
    line(sB.x, sB.y, hitB0.x, hitB0.y);
    line(hitB0.x, hitB0.y, sK.x, 400 + a * s * 0.5*-sin(zS));
  }else{
    line(sB.x, sB.y, sK.x, 400 + a * s * -sin(zS));
  }
  if(hitB1.x && hitB1.y != false){
    line(sB.x, -10+sB.y, hitB1.x, hitB1.y);
    line(hitB1.x, hitB1.y, sK.x, 400 + 1 * s * 0.5*-sin(zS));
  }else{
    line(sB.x, -10+sB.y, sK.x, 400 + 1 * s * -sin(zS));
  }
  if(hitB2.x && hitB2.y != false){
    line(sB.x, -20+sB.y, hitB2.x, hitB2.y);
    line(hitB2.x, hitB2.y, sK.x, 400 + 2 * s * 0.5*-sin(zS));
  }else{
    line(sB.x, -20+sB.y, sK.x, 400 + 2 * s * -sin(zS));
  }
  if(hitB3.x && hitB3.y != false){
    line(sB.x, -30+sB.y, hitB3.x, hitB3.y);
    line(hitB3.x, hitB3.y, sK.x, 400 + 3 * s * 0.5*-sin(zS));
  }else{
    line(sB.x, -30+sB.y, sK.x, 400 + 3 * s * -sin(zS));
  }
  if(hitB4.x && hitB4.y != false){
    line(sB.x, -40+sB.y, hitB4.x, hitB4.y);
    line(hitB4.x, hitB4.y, sK.x, 400 + 4 * s * 0.5*-sin(zS));
  }else{
    line(sB.x, -40+sB.y, sK.x, 400 + 4 * s * -sin(zS));
  }
  //console.log(s * sin(zS), s * -sin(zS));
  
  
  //----------------------------------------
  //soczewka, ekran
  //----------------------------------------

  //let s1 = 0.133 * s + -(s * s) / 1000 + log(s) * log(s);
  
  blackC();
  strokeWeight(4);
  line(e + 40, 120, e + 40, 280);
  stroke("red");
  line(e + 40, 198, e + 40, 202);
  stroke("black");
  strokeWeight(2);
  line(e + 40, 280, e + 40, 400);

  blueC();
  line(40 + s, 400, 40 + s, 0);
  rect(35 + s, 150, 10, 100);
  blueC();
  line(40 + s2, 400, 40 + s2, 0);
  rect(35 + s2, 150, 10, 100);
  
  
  

}
