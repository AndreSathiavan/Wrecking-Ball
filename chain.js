class Chain{
    constructor(firstBody, secondPoint){
        var options = {
            bodyA :firstBody, // this.body 
            pointB: secondPoint,
            stiffness:0.01,
            length:100
            
            }
            this.chain1=loadImage("sprites/sling1.png");
            this.chain2=loadImage("sprites/sling2.png");
            this.chain3=loadImage("sprites/sling3.png");
            this.pointB = secondPoint;
            this.chain = Constraint.create(options);
            World.add(world,this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
    this.chain.bodyA= null;
}
    display(){
        if(this.chain.bodyA){
            push();
        stroke(48,22,8);
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(6);
        line(pointA.x , pointA.y, pointB.x, pointB.y);
        line(pointA.x , pointA.y, pointB.x , pointB.y );
        } 
        pop();
    }     
} 
    