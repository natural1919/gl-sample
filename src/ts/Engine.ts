import Entity from './Entity';

export default class Engine {
    ctx: any;
    canvas: any;
    windowWidth: number;
    windowHeight: number;

    hero: Entity;
    constructor(){
        document.body.style.margin = "0px"
        document.body.style.padding = "0px"
        document.body.style.fontSize = "0px"
        this.createCanvas()
        this.hero = new Entity()
    }
    createCanvas(){
        this.canvas = document.createElement("canvas")
        document.body.appendChild(this.canvas)
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.canvas.width = "" + window.innerWidth;
        this.canvas.height = "" + window.innerHeight;
        this.ctx = this.canvas.getContext("2d") 
    }
    run(){
        this.update()
    }
    update(){
        this.render()
        this.hero.update()
    }
    render(){
        /*
        this.ctx.fillStyle = "Black";
        this.ctx.fillRect(0, 0,
                this.windowWidth,
                this.windowHeight)
        */
        this.hero.render(this.ctx)
        //requestAnimationFrame(this.update)
    }
}