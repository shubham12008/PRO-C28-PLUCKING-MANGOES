class Launcher{
     constructor(bodyA,pointB){
         var options = {
             bodyA : bodyA,
             pointB : pointB,
             stiffness : 0.01,
             length : 50 
         }
         this.pointB = pointB
         this.launch = Constraint.create(options);
         World.add(world,this.launch);
     }
fly(){
    this.launch.bodyA = null;
}
attach(bodyA)
     {
        this.launch .bodyA =bodyA
     }
     display(){
         if (this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
         }
     }

}