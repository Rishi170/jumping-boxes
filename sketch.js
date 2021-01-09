var canvas;
var music;
var obj1,obj2,obj3,obj4,obj5;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600); 
    //create 4 different surfaces

    obj1=createSprite(400, 200, 30, 30);
    obj1.shapeColor="purple";

    obj2=createSprite(300,200,50,20,);
    obj2.shapeColor= "orange";
    obj2.velocityY=0;
    
  
    obj3 = createSprite(200,200,50,20);
    obj3.shapeColor="pink";
    obj3.velocityY=0;
    
  
    obj4=createSprite(100,200,50,20);
    obj4.shapeColor="red";
    
    obj5=createSprite(400,200,50,20);
    obj5.shapeColor="yellow";
    
    


    //create box sprite and give velocity

}

function draw() {

    background(rgb(169,169,169));
    drawSprites();


    //create edgeSprite

    obj1.x=World.mouseX;
    obj1.y=World.mouseY;

    if(isTouching(obj1,obj2))
    {
      obj1.shapeColor ="red";
      obj2.shapeColor="red";
    }
  
    else{
      obj1.shapeColor ="yellow";
      obj2.shapeColor="yellow";
    }

    if(isTouching(obj1,obj3))
    {
      obj1.shapeColor ="red";
      obj3.shapeColor="red";
    }
  
    else{
      obj1.shapeColor ="yellow";
      obj3.shapeColor="yellow";
    }
  
    if(isTouching(obj1,obj4))
    {
      obj1.shapeColor ="yellow";
      obj4.shapeColor="red";
    }
  
    else{
      obj1.shapeColor ="yellow";
      obj4.shapeColor="yellow";
    }
  
    if(isTouching(obj1,obj5))
    {
      obj1.shapeColor ="red";
      obj5.shapeColor="red";
    }
  
    else{
      obj1.shapeColor ="yellow";
      obj5.shapeColor="yellow";
    }


    //add condition to check if box touching surface and make it box

}
