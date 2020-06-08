class Plinko{
     constructor(x,y){
          var options = {
               restitution:0.4
          }

          this.body = Bodies.circle(x,y,10,options);

          fill(255);

          World.add(world,this.body);
     }

     display(){

          var pos = this.body.position;

          push();                         
          translate(pos.x,pos.y);
          nostroke();
          ellipseMode(RADIUS);
          ellipse(0,0,10,10);
          pop();
          
     }
}