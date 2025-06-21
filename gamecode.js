/*var bg = createSprite(200, 200, 20, 350);
bg.setAnimation("maze.jpg_1");
bg.scale = 0.4;*/
var bg = createSprite(200, 200);
bg.setAnimation("PNG (2).png_1");
bg.scale = 0.4;

var wall1 = createSprite(80, 192, 10, 95);
wall1.shapeColor = "white";
var wall2 = createSprite(80, 330, 10, 90);
wall2.shapeColor = "white";
var wall3 = createSprite(190, 150, 225, 10);
wall3.shapeColor = "white";
var wall4 = createSprite(190, 370, 225, 10);
wall4.shapeColor = "white";
var wall5 = createSprite(300, 193, 10, 96);
wall5.shapeColor = "white";
var wall6 = createSprite(300, 325, 10, 100);
wall6.shapeColor = "white";
var wall7 = createSprite(252, 212, 10, 50);
wall7.shapeColor = "white";
var wall8 = createSprite(255, 238, 100, 10);
wall8.shapeColor = "white";
var wall9 = createSprite(235, 280, 50, 10);
wall9.shapeColor = "white";
var wall10 = createSprite(210, 280, 10, 90);
wall10.shapeColor = "white";
var wall11 = createSprite(255, 345, 10, 50);
wall11.shapeColor = "white";
var wall12 = createSprite(170, 345, 10, 45);
wall12.shapeColor = "white";
var wall13 = createSprite(148, 325, 52.5, 10);
wall13.shapeColor = "white";
var wall14 = createSprite(127, 300, 10, 45);
wall14.shapeColor = "white";
var wall15 = createSprite(145, 280, 45, 10);
wall15.shapeColor = "white";
var wall16 = createSprite(163, 260, 10, 45);
wall16.shapeColor = "white";
var wall17 = createSprite(147.5, 235, 40, 10);
wall17.shapeColor = "white";
var wall18 = createSprite(192, 190, 130, 10);
wall18.shapeColor = "white";

var bee = createSprite(35, 260, 10, 10);
bee.setAnimation("bee_1");
bee.scale = 0.5;

var flower = createSprite(355, 330, 30, 30);
flower.setAnimation("flower1_1");
flower.scale = 0.2;


function draw() {
  background("#33B864");
  if (keyDown("up")) {
    bee.velocityY = -2;
  }
  if (keyDown("down")) {
    bee.velocityY = 2;
  }
  if (keyDown("left")) {
    bee.velocityX = -2;
  }
  if (keyDown("right")) {
    bee.velocityX = 2;
  }
  bee.collide(wall1);
  bee.collide(wall2);
  bee.collide(wall3);
  bee.collide(wall4);
  bee.collide(wall5);
  bee.collide(wall6);
  bee.collide(wall7);
  bee.collide(wall8);
  bee.collide(wall9);
  bee.collide(wall10);
  bee.collide(wall11);
  bee.collide(wall12);
  bee.collide(wall13);
  bee.collide(wall14);
  bee.collide(wall15);
  bee.collide(wall16);
  bee.collide(wall17);
  bee.collide(wall18);
  drawSprites();
}
