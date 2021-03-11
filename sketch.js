var BG, BGimg;
var cat, mouse, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    BGimg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    BG = createSprite(500, 400, 1000, 800);
    BG.addImage(BGimg);

    cat = createSprite(870, 550, 10, 10);
    cat.addAnimation("sleepingCat", catImg1);
    cat.scale = 0.2

    mouse = createSprite(100, 550, 10, 10);
    mouse.addAnimation("standingMouse", mouseImg1);
    mouse.scale = 0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.velocityX = 0;
        cat.x = 300;
        cat.addAnimation("stoppedCat", catImg3);
        cat.changeAnimation("stoppedCat");
        mouse.addAnimation("stoppedMouse", mouseImg3);
        mouse.changeAnimation("stoppedMouse");
    }
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode == LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("runningCat", catImg2);
        cat.changeAnimation("runningCat");
        mouse.addAnimation("teasingMouse", mouseImg2);
        mouse.changeAnimation("teasingMouse");
        mouse.frameDelay = 25;
    }

}
