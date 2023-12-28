class Slimshot{
    constructor(bodyA,pointB){
       var option={
            bodyA:bodyA,
           pointB:pointB,
        stiffness:0.04
        ,length:10
      
        }
        this.pointB=pointB
        this.slimg=Constraint.create(option)
        this.slim=loadImage("shoot.png")
        

World.add(world,this.slimg)
    }
    attach(body){
        this.slimg.bodyA=body

    }
    fly(){
        this.slimg.bodyA=null
    }
display(){
    image(this.slim,100,200,170,170)
    if (this.slimg.bodyA){
        var pointA= this.slimg.bodyA.position
        var pointB= this.pointB
        push()
        stroke("brown")
        
            strokeWeight(7)
            line(pointA.x+30,pointA.y+150,pointB.x-55,pointB.y+110)
            line(pointA.x+30,pointA.y+150,pointB.x+30,pointB.y+110)
        
        
          
        pop()
    }
    


}
}
