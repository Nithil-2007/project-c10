var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b7aacde-1862-4c0a-884a-f449ddcdb5c1","8471b782-d369-4698-ad7a-159593b4421c","ee2b1e71-3da3-4e09-864e-4ebac6115c8b"],"propsByKey":{"8b7aacde-1862-4c0a-884a-f449ddcdb5c1":{"name":"rpgcharacter_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png","frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png"},"8471b782-d369-4698-ad7a-159593b4421c":{"name":"c","sourceUrl":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png"},"ee2b1e71-3da3-4e09-864e-4ebac6115c8b":{"name":"kidportrait_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//CREATING LASERS
var laser1 = createSprite(350,125,10,260)
    laser1.shapeColor="red"
var laser2 = createSprite(350,350,10,110)
    laser2.shapeColor="red"
var laser3 = createSprite(300,50,10,100)    
    laser3.shapeColor="red"
var laser4 = createSprite(300,300,10,320)  
    laser4.shapeColor="red"
var laser5 = createSprite(250,380,10,75)
    laser5.shapeColor="red"
var laser6 = createSprite(250,145,10,310)
    laser6.shapeColor="red"
var laser7 = createSprite(200,50,10,100)
    laser7.shapeColor="red"
var laser8 = createSprite(200,300,10,300)
    laser8.shapeColor="red"
var laser9 = createSprite(150,350,10,100)
    laser9.shapeColor="red"
var laser10 = createSprite(150,100,10,290)
    laser10.shapeColor="red"
var laser11 = createSprite(100,50,10,100) 
    laser11.shapeColor="red"
var laser12 = createSprite(100,275,10,260)
    laser12.shapeColor="red"
var laser13 = createSprite(50,330,10,150)  
    laser13.shapeColor="red"
var laser14 = createSprite(50,30,10,360)
    laser14.shapeColor="red"
//creating player
var player = createSprite(380,25,20,20)
   player.shapeColor="yellow"
   
   
   
//creating goal
var goal = createSprite(30,235,20,20)
    goal.shapeColor="blue"

   playSound("assets/category_background/stride.mp3",true)

laser1.setVelocity(0,0)


var gameState="serve"
  
function draw() {
  background("lightBlue")
  drawSprites()
  createEdgeSprites()
//Making player not going outside from canvas
player.bounce(edges)

//ADDING STATES TO THE GAME

if(gameState==="serve")
{
  textSize(30)
  fill("green")
  text("WORLDS HARDEST GAME,",10,80)
  fill("yellow")
  text("PRESS SPACE TO START",20,140)
  fill("blue")
  text("TRY TO REACH THE GOAL !!",10,200)
}

if(keyDown("space"))
 {
   gameState="play"
 }
 
if(gameState==="play")
{
  if(laser1.isTouching(player)||laser2.isTouching(player)||laser3.isTouching(player)||laser4.isTouching(player)||laser5.isTouching(player)||laser6.isTouching(player)||laser7.isTouching(player)||laser8.isTouching(player)||laser9.isTouching(player)||laser10.isTouching(player)||laser11.isTouching(player)||laser12.isTouching(player)||laser13.isTouching(player)||laser14.isTouching(player))
  {
  
    gameState="end"
  }
if(keyDown("down"))
{
  player.y = player.y+5
}
if(keyDown("up"))
{
   player.y = player.y-5
}
if(keyDown("left")) 
{
  player.x = player.x-5
}
if(keyDown("right"))
{
  player.x = player.x+5
}

  if(player.isTouching(goal))
  {
    player.setVelocity(0,0)
    gameState="over"
  }
}


if(gameState==="end")
{
  fill("green")
  textSize(30)
  text("YOU LOST,TRY NEXT TIME",10,200)
  player.setVelocity(0,0)
}
if(gameState==="over")
{
  fill("green")
  textSize(35)
  text("YOU WON",110,150)
  text("THANKS FOR PLAYING",10,200)
}

}
 
  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
