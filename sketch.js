var level1;
var level2;
var level3;
var help;
var bg1;
var mse;
var player;
var playerspeed=-1;
var jump=false;
var b1;
var b2;
var b3;
var h1;
var h2;
var f1;
var f2;
var f3;
var f4;
var q1;
var q2;
var q3;
var count=0;
var lv1c;
var lv1d;
var t;
var lv2c;
var lv2d;
var b4;
var t2;
var t3;
var lv3c;
var lv3d;
var h3;
var timer=0;
var ql1c;
var ql1d;
var ql1;
var ql2;
var ql3;
var ql2c;
var ql2d;
var ql3c;
var ql3d;
var an11;
var an12;
var an13;
var an21;
var an22;
var an23;
var an31;
var an32;
var an33;
var t4;
var t5;
var t6;
var back1;  
var helpt;
var cross1;
var wt=100;
var w1d;
let jt;
var score=0;
var score2=0;
var score3=0;

function preload(){
  one=loadImage("one.png")
  two=loadImage("two.png")
  three=loadImage("three.png")
  bg=loadImage("forest background.png")
  help=loadImage("help2.png")
  mouse=loadImage("point.png")
  player1=loadImage("gorilla.png")
  h11=loadImage("hole.png")
  q1=loadImage("one.png")
  q2=loadImage("two.png")
  q3=loadImage("three.png")
  apple=loadImage("apple.png")
  tick=loadImage("tick.png")
  branchl=loadImage("branch left.png")
  gf=loadImage("gfloor.png")
  branch2=loadImage("branch right.png")
  back2=loadImage("back.png")
  wrong=loadImage("cross.png")
  js=loadSound("jump_10.wav")
  fall=loadSound("nutfall.flac")
  ding=loadSound("ding1.mp3")
  menuS=loadSound("menu1.wav")
  jt=loadFont("jungle text.ttf")
}
function setup(){
  createCanvas(550,600);
  bg1=createSprite(275,275);
  bg1.addImage(bg);
  bg.resize(550,600);
  level1=createSprite(275,125);
  one.resize(75,75);
  level1.addImage(one);
  level2=createSprite(275,225);
  two.resize(75,75);
  level2.addImage(two);
  level3=createSprite(275,325);
  three.resize(75,75);
  level3.addImage(three);
  help1=createSprite(275,425);
  help1.addImage(help);
  help.resize(90,75);
  mse=createSprite(1300,1300);
  mse.addImage(mouse);
  mouse.resize(30,30);
  player=createSprite(1000,1000);
  player.addImage(player1);
  player1.resize(75,75);
  b1=createSprite(1200,1200,700,600);
  b1.addImage(gf);
  gf.resize(700,600);
  h1=createSprite(1400,1400,100,100);
  h1.addImage(h11);
  h11.resize(55,70);
  q11=createSprite(1400,300,75,75);
  q1.resize(75,75);
  q11.addImage(q1);
  q21=createSprite(1400,300,75,75);
  q2.resize(75,75);
  q21.addImage(q2);
  q31=createSprite(1400,300,75,75);
  q3.resize(75,75);
  q31.addImage(q3);
  f1=createSprite(800,450,30,30);
  apple.resize(30,30);
  f1.addImage(apple)
  f2=createSprite(800,450,30,30);
  f2.addImage(apple);
  f3=createSprite(800,450,30,30);
  f3.addImage(apple);
  b2=createSprite(1000,0,125,30);
  b2.addImage(branchl);
  branchl.resize(125,30);
  t=createSprite(0,1000,50,50);
  tick.resize(40,40);
  t.addImage(tick);
  branch2.resize(125,30);
  b3=createSprite(1000,0,125,30);
  b3.addImage(branch2)
  b4=createSprite(1000,0,125,30);
  b4.addImage(branch2);
  t2=createSprite(0,1000,50,50);
  t2.addImage(tick);
  t3=createSprite(0,1000,50,50);
  t3.addImage(tick);
  h2=createSprite(1400,1400,100,100);
  h2.addImage(h11);
  h3=createSprite(1400,1400,100,100);
  h3.addImage(h11);
  ql1=createSprite(400,200);
  ql1.addImage(one);
  ql2=createSprite(400,300);
  ql2.addImage(two)
  ql3=createSprite(400,400);
  ql3.addImage(three);
  an11=createSprite(2500,370);
  an12=createSprite(2500,370);
  an13=createSprite(2500,370);
  an21=createSprite(2500,370);
  an22=createSprite(2500,370);
  an23=createSprite(2500,370);
  an31=createSprite(2500,370);
  an32=createSprite(2500,370);
  an33=createSprite(2500,370);
  an11.addImage(one);
  an21.addImage(one);
  an31.addImage(one);
  an12.addImage(two);
  an22.addImage(two);
  an32.addImage(two);
  an13.addImage(three);
  an23.addImage(three);
  an33.addImage(three);
  t4=createSprite(0,1000,50,50);
  t4.addImage(tick);
  t5=createSprite(0,1000,50,50);
  t5.addImage(tick);
  t6=createSprite(0,1000,50,50);
  t6.addImage(tick);
  back1=createSprite(2000,75);
  back2.resize(50,50);
  back1.addImage(back2);
  cross1=createSprite(1000,1000);
  cross1.addImage(wrong);
  wrong.resize(300,300);

  
  
  
  



}

function draw() {
  background(550,600);
  drawSprites()
  keyboardCode()
  textSize(12.5)
  fill(300,300,300)
  wt=wt+1.6
  if (wt<100){
    cross1.position.x=275
    cross1.position.y=250
  }
  if (wt>100){
    cross1.position.x=1000
    cross1.position.y=1000
  }
  if (mouseIsPressed){
    mse.position.x=mouseX;
    mse.position.y=mouseY;
  } 
  if (mse.collide(level1)){
    menuS.play();
    count=0
    lv1c=true
    timer = 0
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    help1.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    b1.position.x=275
    b1.position.y=800
    player.position.x=50
    player.position.y=100
    h1.position.x=250
    h1.position.y=534
    f1.position.x=520
    f1.position.y=375
    f2.position.x=150
    f2.position.y=450
    b2.position.x=490
    b2.position.y=400
   // if (level1.position.x<950){
     // q11.position.x=200
     // q21.position.x=275
      //q31.position.x=350
     // text("if gran has 3 apples and needs 5, how many more apples does she need?",100,200)
      //if (mse.collide(q11)){
       // level1.position.x=275
        //level2.position.x=275
        //level3.position.x=275
        //help1.position.x=275
      //}
      //if (mse.collide(q21)){
        //level1.position.x=1000
        //b1.position.x=275
        //b1.position.y=800
        //player.position.x=100
        //player.position.y=100
        //h1.position.x=300
        //h1.position.y=534
      //}
      //if (mse.collide(q31)){
       // level1.position.x=275
        //level2.position.x=275
        //level3.position.x=275
        //help1.position.x=275 
      //}
   // }
  }
  if (mse.collide(level2)){
    menuS.play();
    count=0
    lv2c=true
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    help1.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    b1.position.x=275
    b1.position.y=800
    player.position.x=330
    player.position.y=300
    h1.position.x=75
    h1.position.y=534
    f1.position.x=70
    f1.position.y=170
    f2.position.x=475
    f2.position.y=350
    b2.position.x=490
    b2.position.y=400
    b3.position.x=170
    b3.position.y=400
    b4.position.x=50
    b4.position.y=273
  }
  if (mse.collide(level3)){
    menuS.play();
    count=0
    lv3c=true
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    help1.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    b1.position.x=275
    b1.position.y=800
    player.position.x=535
    player.position.y=500
    h1.position.x=60
    h1.position.y=534
    h2.position.x=215
    h2.position.y=534
    h3.position.x=395
    h3.position.y=534
    f1.position.x=75
    f1.position.y=300
    f2.position.x=230
    f2.position.y=350
    f3.position.x=500
    f3.position.y=335
    b2.position.x=690
    b2.position.y=350
    b3.position.x=50
    b3.position.y=350
    b4.position.x=210
    b4.position.y=400
  }
  if (mse.collide(ql1)){
    menuS.play();
    count=0
    ql1c=true
    timer = 0
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    help1.position.x=1000
    b1.position.x=275
    b1.position.y=800
    player.position.x=20
    player.position.y=100
    an11.position.x=150
    an12.position.x=300
    an13.position.x=450
  }
  if (mse.collide(ql2)){
    menuS.play();
    count=0
    ql2c=true
    timer = 0
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    help1.position.x=1000
    b1.position.x=275
    b1.position.y=800
    player.position.x=20
    player.position.y=100
    an21.position.x=150
    an22.position.x=300
    an23.position.x=450
  }
  if (mse.collide(ql3)){
    menuS.play();
    count=0
    ql3c=true
    timer = 0
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    help1.position.x=1000
    b1.position.x=275
    b1.position.y=800
    player.position.x=20
    player.position.y=100
    an31.position.x=150
    an32.position.x=300
    an33.position.x=450
  }
  if (mse.collide(help1)){
    count=0
    helpt=true
    timer = 0
    level1.position.x=1000
    level2.position.x=1000
    level3.position.x=1000
    ql1.position.x=2000
    ql2.position.x=2000
    ql3.position.x=2000
    help1.position.x=1000 
    back1.position.x=70
    back1.position.y=500
  }
  if (mse.collide(back1)){
    helpt=false
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    mse.position.x=1000 
    back1.position.x=-100
}
player.position.y += playerspeed;

if (player.collide(b1)|| player.collide(b2)|| player.collide(b3)|| player.collide(b4)){
    jump = false;
}
  else{
    playerspeed ++;
  }

if (player.collide(h1)){
  fall.play();
  lv1c=false
  lv2c=false
  lv3c=false
  ql1c=false
  ql2c=false
  ql3c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
}
if (player.collide(h2)){
  fall.play();
  lv1c=false
  lv2c=false
  lv3c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
}
if (player.collide(h3)){
  fall.play();
  lv1c=false
  lv2c=false
  lv3c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
}
if (player.collide(an11)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql1c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an11.position.x=1500
  an12.position.x=1500
  an13.position.x=1500
}
if (player.collide(an12)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql1c=false
  ql1d=true
  timer=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an11.position.x=1500
  an12.position.x=1500
  an13.position.x=1500
}
if (player.collide(an13)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql1c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an11.position.x=1500
  an12.position.x=1500
  an13.position.x=1500
}
if (player.collide(an21)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql2c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an21.position.x=1500
  an22.position.x=1500
  an23.position.x=1500
}
if (player.collide(an22)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql2c=false
  ql2d=true
  timer=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an21.position.x=1500
  an22.position.x=1500
  an23.position.x=1500
}
if (player.collide(an23)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql2c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an21.position.x=1500
  an22.position.x=1500
  an23.position.x=1500
}
if (player.collide(an31)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql3c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an31.position.x=1500
  an32.position.x=1500
  an33.position.x=1500
}
if (player.collide(an32)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql3c=false
  timer=0
  wt=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an31.position.x=1500
  an32.position.x=1500
  an33.position.x=1500
}
if (player.collide(an33)){
  lv1c=false
  lv2c=false
  lv3c=false
  ql3c=false
  ql3d=true
  timer=0
  player.position.x=3000
  h1.position.x=2000
  h2.position.x=2000
  h3.position.x=2000
  level1.position.x=275
  level2.position.x=275
  level3.position.x=275
  help1.position.x=275
  ql1.position.x=400
  ql2.position.x=400
  ql3.position.x=400
  b1.position.x=3000
  mse.position.x=1000 
  b2.position.x=1000
  b2.position.y=0
  b3.position.x=1000
  b3.position.y=0
  b4.position.x=1000
  b4.position.y=0
  f1.position.x=0
  f1.position.y=1000
  f2.position.x=0
  f2.position.y=1000
  f3.position.x=0
  f3.position.y=1000
  an31.position.x=1500
  an32.position.x=1500
  an33.position.x=1500
}
if (player.collide(f1)){
  f1.position.x=800
  count=count+1
  ding.play();
} 
if (player.collide(f2)){
  f2.position.x=800
  count=count+1
  ding.play();
}
if (player.collide(f3)){
  f3.position.x=800
  count=count+1
  ding.play();
}
if (lv1c==true){
  if (count==2){
    score = timer
    count=0
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    lv1c=false
    lv1d=true
  }
  if (count<=1){
    text("Collect 2 fruit before the timer reaches 1100!!!",20,30)
    text("Fun fact: Gorillas are herbivores, meaning they only eat fruit and vegetables",20,100)
    text(timer,20,50)
  }
  timer = timer+1
  if (timer>=1100){
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    wt=0
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    f1.position.x=1000
    f2.position.x=1000
    mse.position.x=1000
    count=0
    timer=0
    lv1c=false
  }
}
if (lv2c==true){
  timer = timer+1
  if (count<=1){
    text("Collect 2 fruit before the timer reaches 1000!!!",20,40)
    text("Fun fact: Gorillas are 4-9x stronger than the average adult human",20,120)
    text(timer,20,60)
  }
  if (count==2){
    score2=timer
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    b3.position.x=1000
    b3.position.y=0
    b4.position.x=1000
    b4.position.y=0
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    count=0
    lv2c=false
    lv2d=true
  }
  if (timer>=1000){
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    wt=0
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    b3.position.x=1000
    b3.position.y=0
    b4.position.x=1000
    b4.position.y=0
    f1.position.x=0
    f1.position.y=1000
    f2.position.x=0
    f2.position.y=1000
    f3.position.x=0
    f3.position.y=1000
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    count=0
    timer=0
    lv2c=false
  }
}
if (lv3c==true){
  if (count==3){
    score3=timer
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    b3.position.x=1000
    b3.position.y=0
    b4.position.x=1000
    b4.position.y=0
    player.position.x=3000
    h1.position.x=1050
    h2.position.x=1050
    h3.position.x=1050
    mse.position.x=1000
    count=0
    lv3c=false
    lv3d=true
  }
  if (count<=2){
    text("collect 3 fruit before the timer reaches 950!!!",20,30)
    text("Fun fact: Gorillas spend a quarter of their day eating",20,120)
    text(timer,20,60)
  }
  timer = timer+1
  if (timer>=950){
    wt=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    b3.position.x=1000
    b3.position.y=0
    b4.position.x=1000
    b4.position.y=0
    f1.position.x=0
    f1.position.y=1000
    f2.position.x=0
    f2.position.y=1000
    f3.position.x=0
    f3.position.y=1000
    player.position.x=3000
    h1.position.x=1050
    h2.position.x=1050
    h3.position.x=1050
    mse.position.x=1000
    count=0
    timer=0
    lv3c=false
  }
}
if (ql1c==true){
  if (count==1){
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an11.position.x=1500
    an12.position.x=1500
    an13.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    count=0
    ql1c=false
    ql1d=true
  }
  if (count<1){
    text("If a Gorilla needs 10 apples, and they already have 8, how many more do they need?",80,270)
    text("answer before the timer reaches 2000",20,100)
    text(timer,20,120)
  }
  timer = timer+1
  if (timer>=2000){
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    wt=0
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an11.position.x=1500
    an12.position.x=1500
    an13.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    f1.position.x=1000
    f2.position.x=1000
    mse.position.x=1000
    count=0
    timer=0
    ql1c=false
  }
}
if (ql2c==true){
  if (count==1){
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an11.position.x=1500
    an12.position.x=1500
    an13.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    count=0
    ql1c=false
    ql1d=true
  }
  if (count<1){
    text("If a Gorilla had 6 apples, and they lost 4, how many would they have left?",80,270)
    text("answer before the timer reaches 2300",20,100)
    text(timer,20,120)
  }
  timer = timer+1
  if (timer>=2300){
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    wt=0
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an21.position.x=1500
    an22.position.x=1500
    an23.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    f1.position.x=1000
    f2.position.x=1000
    mse.position.x=1000
    count=0
    timer=0
    ql2c=false
  }
}
if (ql3c==true){
  if (count==1){
    timer=0
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an31.position.x=1500
    an32.position.x=1500
    an3.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    mse.position.x=1000
    count=0
    ql1c=false
    ql1d=true
  }
  if (count<1){
    text("If a Gorilla has 6 apples, and they lost half of them, how many would they have left?",80,270)
    text("answer before the timer reaches 2500",20,100)
    text(timer,20,120)
  }
  timer = timer+1
  if (timer>=2500){
    level1.position.x=275
    level2.position.x=275
    level3.position.x=275
    help1.position.x=275
    wt=0
    ql1.position.x=400
    ql2.position.x=400
    ql3.position.x=400
    an31.position.x=1500
    an32.position.x=1500
    an33.position.x=1500
    b1.position.x=3000
    b2.position.x=1000
    b2.position.y=0
    player.position.x=3000
    h1.position.x=1050
    f1.position.x=1000
    f2.position.x=1000
    mse.position.x=1000
    count=0
    timer=0
    ql3c=false
  }
}
if (lv1d==true){
  if (level1.position.x==275){
    t.position.x=305
    t.position.y=155
  }
  else{
    t.position.y=1000
  }
} 
if (lv2d==true){
  if (level2.position.x==275){
    t2.position.x=305
    t2.position.y=255
  }
  else{
    t2.position.y=1000
  }
} 
if (lv3d==true){
  if (level3.position.x==275){
    t3.position.x=305
    t3.position.y=355
  }
  else{
    t3.position.y=1000
  }
}
if (ql1d==true){
  if (level1.position.x==275){
    t4.position.x=425
    t4.position.y=235
  }
  else{
    t4.position.y=1000
  }
}
if (ql2d==true){
  if (ql2.position.x==400){
    t5.position.x=425
    t5.position.y=335
  }
  else{
    t5.position.y=1000
  }
}
if (ql3d==true){
  if (ql3.position.x==400){
    t6.position.x=425
    t6.position.y=435
  }
  else{
    t6.position.y=1000
  }
}
if (helpt==true){
    text("USE THE ARROW KEYS TO MOVE",20,30)
    text("",20,50)
    text("COLLECT ALL FRUIT BEFORE THE TME IS UP TO WIN, OR GET A QUESTION CORRECT",20,90)
    text("JUMP INTO THE ANSWER TO SELECT IT WHEN ANSWERING A QUESTION",20,110)
    text("YOU NEED TO COLLECT FRUIT TO FEED YOUR GORILLA FAMILY",20,150)
    text("COMPLETE THE TASKS TO HELP THEM",20,170)
  }
  
if (ql3.position.x==400){
  text("Use arrows to move",10,20)
  text("Main Levels",245,75)
  text("Side Levels",370,150)
  text("Try and get the lowest times you can!",180,520)
}
  
  
if (ql3.position.x==400){
  textSize(25)
  text(score,250,182)
  
}
if (ql3.position.x==400){
  textSize(25)
  text(score2,250,282)
  
}
if (ql3.position.x==400){
  textSize(25)
  text(score3,250,382)
  
}
  
if (ql3.position.x==400){
  textFont(jt)
  textSize(65)
  text("GORILLA",30,240)
  text("JUMP",30,275)
  
  
}

  
function keyboardCode(){

 if(keyIsDown(UP_ARROW) && keyIsPressed===true && jump === false ){
    jump = true;
    player.position.y -= playerspeed;
    playerspeed = -15;
    js.play();
  }
  if(keyIsDown(RIGHT_ARROW)&& keyIsPressed===true){
    // add code to move right here
     player.position.x -=-7.5 ;
    if (player.position.x>=550){
      player.position.x-=7.5;
    }
  }
  if(keyIsDown(LEFT_ARROW)&& keyIsPressed===true){
     // add code to move left here
     player.position.x -=7.5 ; 
    if (player.position.x<=0){
      player.position.x-=-7.5
    }
  }
}
}