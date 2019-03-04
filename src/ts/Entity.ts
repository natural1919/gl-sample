export default class Entity {
    x: number;
    y: number;
    w: number;
    h: number;
    vX: number;
    vY: number;
    mass: number;
    fX: number;
    fY: number;

    constructor(x = 0, y =0, w=10, h=10, vX = 0 , vY = 0, mass = 1, fX = 0, fY = 0) {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.mass = mass;
        this.fX = fX;
        this.fY = fY;
    }

    render(ctx: any) {
        console.log("Render !")
        ctx.fillStyle = "Red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update() {
        console.log("Update !")
    }

}