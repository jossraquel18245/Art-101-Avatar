class Droplet
{
  constructor(_xPos, _yPos, _rainSpeed)
  {
    this.xPos = _xPos;
    this.yPos =_yPos;
    this.rainOffset = 0;
    this.rainSpeed = _rainSpeed;
  }
  
  display()
  {
    // Guide points for drawing the droplet
    // stroke(238, 27, 56);
    // strokeWeight(5);
    // point(xPos + 10, yPos - 5); // Right reference (invisible)
    // point(xPos, yPos); // Top
    // point(xPos - 10, yPos + 15); // Upper Left
    // point(xPos - 8, yPos + 24); // Lower Left
    // point(xPos, yPos + 30); // Bottom
    // point(xPos + 8, yPos + 24); // Lower Right
    // point(xPos + 10, yPos + 15); // Upper Right
    // point(xPos - 10, yPos - 5); // Left reference (invisible)

    // Droplet Color
    fill(49, 232, 223)
    stroke(0);
    strokeWeight(1);

    // Droplet Shape
    beginShape();
    curveVertex(this.xPos + 10, this.yPos - 5 + this.rainOffset); // Right reference (invisible)
    curveVertex(this.xPos, this.yPos  + this.rainOffset) ; // Top
    curveVertex(this.xPos - 10, this.yPos + 15 + this.rainOffset); // Upper Left
    curveVertex(this.xPos - 8, this.yPos + 24 + this.rainOffset); // Lower Left
    curveVertex(this.xPos, this.yPos + 30 + this.rainOffset); // Bottom
    curveVertex(this.xPos + 8, this.yPos + 24 + this.rainOffset); // Lower Right
    curveVertex(this.xPos + 10, this.yPos + 15 + this.rainOffset); // Upper Right
    curveVertex(this.xPos, this.yPos + this.rainOffset); // Top (again)
    curveVertex(this.xPos - 10, this.yPos - 5 + this.rainOffset); // Left reference (invisible)
    endShape();
  }
  
  move(){
    
    this.rainOffset += this.rainSpeed;
    if(this.rainOffset > 400)
    {
      this.rainOffset = -20;
    }
  }
}














