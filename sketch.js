// showTongue is a Boolean it can only be true or false
let showTongue = false;
let turnipColor;

let platformOffset = 0;

let droplet1;
let droplet2;
let droplet3;
let droplet4;
let droplet5;
let sketchStarted = false;

function setup()
{
  createCanvas(400, 400);
  angleMode (DEGREES);

  createButton("Start").mousePressed(startSketch);



  // Define some global variables
  turnipColor = color(220, 235, 209);

  //Drawing the Droplets
  droplet1 = new Droplet(350, 50, 2);
  droplet2 = new Droplet(200, 50, 6);
  droplet3 = new Droplet(150, 50, 3);
  droplet4 = new Droplet(50, 50, 7);
  droplet5 = new Droplet(70, 50, 4);
}

function startSketch(){
  // Setup the microphone
  mic = new p5.AudioIn();
  mic.start();

  sketchStarted = true;

}

function draw()
{

if (sketchStarted) {

  // let micMovement = map(mic.getLevel(), 0, .15, 0, -25);
  let leftAngle = map(mouseY, 0, 400, 90, 0);
  let rightAngle = map(mouseY, 0, 400, -90, 0);

  background(71,191,157);

  drawPlatform();

  drawArm(width*.34, height*.5, 40 + leftAngle);
  drawArm(width*.66, height*.5,-40 + rightAngle);

  drawFoot(165,280); // Left foot
  drawFoot(235,280); // Right foot

  drawBody();
  drawFace();
  drawStem();
  //drawbluerect(310,200,25); //xpos,ypos
  //drawbluerect(350,200,-98);
  //drawdroplet(95, 180);


  //show the droplets from the droplet.js
  droplet1.display();
  droplet2.display();
  droplet3.display();
  droplet4.display();
  droplet5.display();

  droplet1.move();
  droplet2.move();
  droplet3.move();
  droplet4.move();
  droplet5.move();


  // Draw the tongue based on boolean setting
  if (showTongue)
  {
    fill(247, 163, 204);
    ellipse(200,210,10,10);
  }
}

}





function drawPlatform()
{
  //platform where turnip stands
  fill(255, 187, 15);
  strokeWeight(1)
  ellipse(200 + platformOffset,290,250,100);

  //platformOffset--;
  //if (platformOffset < -325)
  {
   // platformOffset = 325;
  }
}

function drawArm(xPos, yPos, rotation)
{
  fill(turnipColor);
  noStroke ();

  // Left hand
  push();
  translate(xPos, yPos);
  rotate(rotation)
  rectMode(CENTER);
  ellipse(0,0,20,45);
  pop();
}

function drawFoot(xPos, yPos)
{
  // Same as turnip color
  fill(turnipColor);
  noStroke();

  ellipse (xPos,yPos,45,40);
}

function drawBody()
{
  // Turnip Color
  fill(turnipColor);
  noStroke();

  // Draw body on top of the feet and arms
  ellipse(200,200,120,160);
}

function drawFace()
{
  // Eye color
  fill(100);
  stroke(0);
  strokeWeight(1);

  ellipse (175,180,15,25); // Left eye
  ellipse (225,180,15,25); // Right eye

  // Cheek color
  fill (255, 200, 239);
  stroke(0);

  ellipse (160,200,12,6); // Left Cheek
  ellipse(240,200,12,6); // Right cheek

  // Mouth Reference points
  let p1 = { x: 190, y: 200 };
  let p2 = { x: 195, y: 205 }; // p1 to p2 is invisible
  let p3 = { x: 205, y: 205 }; // p2 to p3 is visible
  let p4 = { x: 210, y: 200 }; // p3 to p4 is invisible

  // stroke(238, 27, 56);
  // strokeWeight(5);
  // point(p1.x, p1.y);
  // point(p2.x, p2.y);
  // point(p3.x, p3.y);
  // point(p4.x, p4.y);

  // Draw mouth as a curved line
  noFill();
  stroke(0);
  strokeWeight(3);
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
}

function drawStem()
{
  //mic goes from 0 to 1
  //how it will move depending on the sound: 0,-25
  let micMovement = map(mic.getLevel(), 0, .15, 0, -25);

  // Guide points for drawing the stem
  // stroke(238, 27, 56);
  // strokeWeight(5);
  // point(200, 120); // Top of the head
  // point(170, 130); // Left base
  // point(120, 100); // Left tip
  // point(170, 90); // Left valley
  // point(200, 60); // Middle tip
  // point(230, 90); // Right valley
  // point(280, 100); // Right tip
  // point(230, 130); // Right base

  // Color of the stem
  fill(148, 181, 112);
  stroke(0);
  strokeWeight(1);

  // Draw the stem
  beginShape();
  curveVertex(200, 120); // Top of the head
  curveVertex(170, 130); // Left base
  curveVertex(120, 100 + micMovement); // Left tip
  curveVertex(170, 90); // Left valley
  curveVertex(200, 60 + micMovement); // Middle tip
  curveVertex(230, 90); // Right valley
  curveVertex(280, 100 + micMovement); // Right tip
  curveVertex(230, 130); // Right base
  curveVertex(200, 120); // Top of the head (again)
  endShape();
}

//function drawbluerect(xPos, yPos, rotation)
//{
  //fill(130, 200, 237);
  //stroke(0);
  //strokeWeight(.5);

  //push();
  //translate(xPos, yPos)
  //rotate (rotation)
  //rectMode(CENTER);
  //rect(0,0, 20,40);
  //pop();
//}


function mousePressed()
{
  console.log("mouse click");

  // Click on region with droplet
  if(mouseX > 75 && mouseX <325 && mouseY > 240 && mouseY < 340)
  {
    // When showTongue is true, change to false (and vice versa)
    if (showTongue)
    {
      showTongue = false;
    }
    else
    {
      showTongue = true;
    }
  }
}
