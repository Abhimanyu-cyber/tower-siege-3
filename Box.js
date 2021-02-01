class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    this.visibility=255;
  }
  display(){
    if(this.body.speed<7){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body)
      this.visibility=this.visibility-5;
      
      pop();
    }
  }
  score(){
    if(this.visibility<0 && this.visibility>-105)
    score++   
  }

};
