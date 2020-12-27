class Ball{
    constructor(x,y,width,height){
        var opt={
            density:1.0,
            friction:0.4
        }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("blue")
        ellipse(0,0,this.width,this.height)
        pop()
    }
}