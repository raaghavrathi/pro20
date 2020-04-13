
var r = 10;
var g = 10;
var b=10;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
  r=map(mouseX,0,1200,0,255 )
  g=map(mouseY,0,400,0,255)
  b=r+g
    // Pass the values to the background() function you have learnt previously.
  background(r,g,b)

  // Create an ellipse that will move around with you mouse about the X axis
  fill("white")
  ellipse(mouseX,mouseY,20,25)
  
  // Remember to fill the canvas with white paint before creating the ellipse.
}