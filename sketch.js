function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {   
  createCanvas(600, 400); 
}  

function draw() {   
    
  background(135, 206, 235);    
  
  
  fill(255, 204, 0);   
  ellipse(width / 2, 120, 90, 90);    

  
  fill(139, 69, 19);   
  triangle(100, 250, 300, 120, 500, 250); 


  fill(105, 105, 105);    
  triangle(300, 250, 500, 120, 700, 250); 

  
  fill(255);   
  triangle(270, 140, 300, 120, 330, 140); 
  triangle(470, 140, 500, 120, 530, 140); 

    
  fill(34, 139, 34);  
  rect(0, 250, width, height - 250);    


  fill(100);   
  beginShape();
  vertex(width / 2 - 100, height); 
  vertex(width / 2 + 100, height); 
  vertex(width / 2 + 30, 250);  
  vertex(width / 2 - 30, 250);  
  endShape(CLOSE);
  
 
  stroke(255);
  strokeWeight(2);
  for (let y = height; y > 250; y -= 20) {
    line(width / 2, y, width / 2, y - 10); 
  }
  noStroke();

  
  
  fill(0);
  for (let i = 0; i < 3; i++) { 
    let x = 350 + i * 50;  
    let y = 60 - i * 20;   
    beginShape();
    vertex(x, y);
    vertex(x + 10, y - 10);
    vertex(x + 20, y);
    endShape();
  }
}
