class Ball{

constructor(x,y,r){
var options={
'restitution':1.4,
'friction':0.1,
'density':3

}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
World.add(world,this.body);
}

display(){
var Ballposition=this.body.position;
push ()

translate (Ballposition.x,Ballposition.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill (104, 6, 196);
    ellipse(0,0,this.r,this.r);
    pop ();
}




}