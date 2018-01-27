function setup(){
createCanvas(1450,200);

}

function draw(){
background(100)
drawText();
}

function drawText(){
  var s = 'welcome to the school I attended ';
  fill(0);
  textSize(50)
  text(s,400,60); // Text wraps within text box

}
