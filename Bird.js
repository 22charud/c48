class Bird {
    constructor(x,y,width,height){
        var option={
            restitution:0.8,
            density:2
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        this.image=loadImage("anger bird.png")
        World.add(world,this.body)

    }
        display(){
           // imageMode(CENTER)
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

        }
    
    
    
}