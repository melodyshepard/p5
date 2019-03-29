
let x = 50;
function setup(){
  createCanvas(500, 500)
  woohoo = new p5.Oscillator('sqaure');
}


  // draw racecar body


  fill(0);
  // draw racecar wheel \ to reattach wheel, put ellipse under carX
//  ellipse(60, 350, 20, 20);
  //ellipse(60, 350, 20, 20);
}
if (carX =60){
    console.log("truth");
}
}

function draw() {
  background(220);
  osc.freq(60 + mouseX);
  osc.amp(map(mouseY, 400, height, 0.2, 0));

if(frameCount > 180) {

}
  // to draw _shaper
  //rect (50, 50, map(mouseX, 0, width, 0, 200))


  //carX = carX + 3
  //carX -= 3;


//if carx is 500 then put it back to the front
if (carX > 500){
  carX = -50;
}else if (carX >400){
  carX += 6;
}else {
  carX =+ 3;}
}else {
    vroom.freq(0);
}
  //draw racecar body
  noStroke();
  fill(40, 50, 250)
  rect(50, 300, 50, 30)


}
}

function mousePressed() {
    carX = 0;
    vroom.stop();
}
