var background,backgroundImg;
var cat,catImg;
var mouse,mouseImg;

var cat2Img;
var cat3Img;
var mouse2Img;
function preload() {
//load the images here

backgroundImg = loadImage("garden.png");
catImg = loadImage("cat1.png");
mouseImg = loadAnimation("mouse2.png","mouse3.png");

cat2Img = loadAnimation("cat2.png","cat3.png");
cat3Img = loadImage("cat4.png");
}

function setup(){
createCanvas(500,500);
//create tom and jerry sprites here
background = createSprite(250,250,10,10);
background.addImage(backgroundImg);

mouse = createSprite(400,160,10,10);
mouse.addAnimation(mouseImg);

cat = createSprite(100,160,10,10);
cat.addImage(catImg);
}

function draw() {

background(255);
//Write condition here to evalute if tom and jerry collide

if(keyDown("left_Arrow")) {
cat.x = cat.x -3;
cat.addAnimation(cat2Img);
}

if(mouse.isTouching(cat)) {
  cat.addImage(cat3Img);
}

drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}