var diam1=0;

function setup() {
  // put setup code here
   createCanvas(500,500);
    background("#003366");
}

function draw() {
  // put drawing code here
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(mouseX,mouseY,20,20);
    fill("#ff0000");
    ellipse(200,200,diam1,diam1);
    ellipse(random(500),random(500),65,65)
    
}

function mousePressed(){
    
  diam1=diam1+5;  
    
    
    
    
    
    
    
}