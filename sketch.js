//Create variables here
var dog, happyDog, foodS, foodStock, database, dogimg, hdogimg;

function preload(){
  //load images here
  dogimg=loadImage("images/Dog.png");
  hdogimg=loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 280);
  dog.addImage(dogimg);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdogimg)
  }

  drawSprites();
  //add styles here
  textSize(10);
  fill(rgb(0,0,20));
  stroke(1);
  text("NOTE: PRESS UP ARROW KEY TO FEED THE DOG",130, 480);

  textSize(50);
  fill("white");
  text("VIRTUAL PET", 100, 50);

  textSize(30);
  text("Food Remaining: "+foodS, 110, 150);
}

function writeStock(x){
  if(x<=0){
x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
function readStock(data){
  foodS=data.val();
}



