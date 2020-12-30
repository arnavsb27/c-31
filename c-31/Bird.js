class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png"); 
    this.smokeImage = loadImage("sprites/smoke.png");
    
    //this.trajectory is an empty array
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //to make the trajectory draw only when the bird is to the right side of the sling and also when the bird moves at a certain speed
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      
    //position array tracks/ stores the x and y position of the bird whenever it moves
    var position = [this.body.position.x,this.body.position.y];
    //length = 2

    //push the position array inside the empty trajectory array
    this.trajectory.push(position);
    }

    //using for loop to repeately draw the smoke image behind the bird
    //for(start the rep; stop the rep; how should it repeat){ image,text,sprite}
    for(var i=0;i<this.trajectory.length;i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
