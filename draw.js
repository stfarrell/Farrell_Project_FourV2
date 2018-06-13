
var colorz = "black"
var radius = 5
var img

function setup() {
  createCanvas(800, 600);
  background("white")
  fill("black");
  
  // frameRate(10000)
  
  rect(0,0,50,50);
  fill("blue")
  rect(0,75,50,50)
  fill("green")
  rect(0,150,50,50)
  fill("yellow")
  rect(0,225,50,50)
  fill("purple")
  rect(0,300,50,50)
  fill("red")
  rect(0,375,50,50)
  fill("orange")
  rect(0,450,50,50)
  
  fill("black")
  ellipse(75,25,10,10)
  ellipse(100,25,15,15)
  ellipse(135,25,20,20)
  ellipse(170,25,25,25)
  
  img = loadImage("eraser.jpg")
}
// The draw function runs continuously


function draw() {
  //Color Palette
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (0<=mouseY && mouseY<=50)){
    colorz="black"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (75<=mouseY && mouseY<=125)){
    colorz="blue"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (150<=mouseY && mouseY<=200)){
    colorz="green"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (225<=mouseY && mouseY<=275)){
    colorz="yellow"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (300<=mouseY && mouseY<=350)){
    colorz="purple"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (375<=mouseY && mouseY<=425)){
    colorz="red"
  }
  if(mouseIsPressed && (0<=mouseX && mouseX<=50) && (450<=mouseY && mouseY<=500)){
    colorz="orange"
  }
  
  if(mouseIsPressed && (70<=mouseX && mouseX<=80) && (0<=mouseY && mouseY<=25)){
    radius = 5
  }
  if(mouseIsPressed && (92.5<=mouseX && mouseX<=107.5) && (0<=mouseY && mouseY<=25)){
    radius = 10
  }
  if(mouseIsPressed && (125<=mouseX && mouseX<=145) && (0<=mouseY && mouseY<=25)){
    radius = 15
  }
  if(mouseIsPressed && (157.5<=mouseX && mouseX<=182.5) && (0<=mouseY && mouseY<=25)){
    radius = 20
  }
  //Eraser
  image(img, 200, 0, img.width/15, img.height/15);
  if(mouseIsPressed && (200<=mouseX && mouseX<=250) && (0<=mouseY && mouseY<=50)){
    colorz="white"
  }
  
  
  //Drawing Tool
  if(mouseIsPressed) {
    if(mouseX>55 && mouseY>55){
      stroke(colorz)
      strokeWeight(radius)
      line(pmouseX,pmouseY,mouseX,mouseY)
    //   fill(colorz)
      console.log(mouseX, mouseY);
  }
}
}
    
  
//ellipse -> lines  
//save line positions (bottom of draw())
//top of loop - draw line from Frame(n-1) to Frame(n)

