//Create an array with HEX values that represent colors
let colorArray = ["#ED7A8E", "#7D43FE", "#132BA8","#000000", "#FFFFFF"];

//Grid is split into steps of 20. This variable is used throughout,
//to ensure consistency
let gridStep = 20;

function setup() {
  // noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  //rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas
  background(255);

  grid();
}

function grid(){
  let size = 2;
  let stepX = 0;

  for (let y = 10; y < width; y+=gridStep) {
    for (let x = 10; x < height; x+=gridStep) {
      //stroke(255,0,0);
      //strokeWeight(1);
      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX = stepX + 1;

      if (randomStep == stepX){
        stroke(22,127,255);
        let newSizeStroke = int(random(20));
        strokeWeight(newSizeStroke/10);
        fill(156,139,232);
        ellipse(x, y, newSizeStroke, newSizeStroke);
        noStroke();
        fill(232,26,151);
        let newSize = int(random(12));
        ellipse(x, y, newSize, newSize);
      } else {
        noStroke();
        fill(46,189,205);
        ellipse(x, y, size, size);
      }
    }
  }
}
for (let i=0; i<4; i++){
}

function circleBlocks(xTimes, yTimes){
let xRand = int(random(width/gridStep));
let yRand = int(random(height/gridStep));
let xPos = xRand*gridStep;
let yPos = yRand*gridStep;

let angle = 45;

push();
translate(xPos, yPos);
let colorCircle = colorArray[int(random(5))];
for (let y = 10; y < xTimes*gridStep; y+=gridStep) {
  for (let x = 10; x < yTimes*gridStep; x+=gridStep) {
    push(); //apply this at the beginning of the transformation
    translate(x, y); //assign here the shape position
    noFill();
    stroke(colorCircle);
    strokeWeight(3);
    ellipse(0, 0, 15, 15); //position is driven by translate()
    noStroke();
    fill(colorCircle);
    ellipse(0, 0, 5, 5); //position is driven by translate()
    pop();

  }
}
pop();
}

function draw(){
  let moveFrameCount = frameCount;

  if (moveFrameCount<200){

    stroke(255, 161, 185);
    strokeWeight(size+frameCount)
    line(frameCount, frameCount, width-frameCount, frameCount);

    stroke(232, 108, 200);
    strokeWeight(size+frameCount)
    line(frameCount, frameCount, frameCount, height-frameCount);

    stroke(234, 56, 120);
    strokeWeight(size+frameCount)
    line(width-frameCount, frameCount, width-frameCount, height-frameCount);

    stroke(97,42, 255);
    strokeWeight(size+frameCount)
    line(frameCount, width-frameCount, width-frameCount, height-frameCount);
  }

fill(0,0,0)
  jitterX = random(200,600);
  jitterY = random(200,600);


  push();
  translate(jitterX,jitterY);
  ellipse(0,0,20,20);
  pop();


  fill(144,208,241,100);
  rect(200,200,400,400);
}


//When the mouse is clicked, setup function executes from start
function mouseClicked(){
setup();
}

//Use keys A,S,D to draw additional shapes according to the functions we have


//Use keys A,S,D to draw additional shapes according to the functions we have
function keyPressed() {
  if (key == 'd' || key == 'D'){
    grid();
  }
if (key == 's' || key == 'S'){
  for (let i=0; i<4; i++){
    circleBlocks(int(random(5)),int(random(5)));
  }
}
}
