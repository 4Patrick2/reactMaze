import Canvas, {resizeCanvasToDisplaySize} from "./Canvas"
import mazeGen from "../Maze/mazegenerator"

export default function Maze() {
    var canvasSizeX = 500;
    var canvasSizeY = 500;
    let xs = 10;
    let ys = 10;

    const m = new mazeGen(xs, ys);
    m.mazeGenerator();

    const draw = (ctx,  frameCount) => {
        // ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        // ctx.fillStyle = "#000000";
        // ctx.beginPath();
        // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        // ctx.fill()

        // ctx.fillStyle = "rgb(200 0 0)";
        // ctx.strokeRect(10,10,50,50);

        // ctx.fillStyle = "rgb(0 0 200 / 50%";
        // ctx.fillRect(30,30,50,50)

        ctx.clearRect(0, 0, canvasSizeX, canvasSizeY);

        let tileSizeX = canvasSizeX / xs;
        let tileSizeY = canvasSizeY / ys;
        ctx.lineWidth = 3;
        
        //   walls = [up,   right, down, left]
        let counter = 0
        let offset = 0
        for (let y =0; y < ys; y++) {
            for (let x=0; x<xs; x++) {
                if (counter%2===offset) {
                    //ctx.fillStyle = `rgb(243 167 18)`;
                    ctx.fillStyle = `rgb(157 203 186)`;
                } else {
                    ctx.fillStyle = `rgb(157 203 186)`;
                }
                ctx.fillRect(x*tileSizeX, y*tileSizeY, tileSizeX, tileSizeY);
                counter++;

                // Vertical lines
                if (m.maze[((xs*y)+x)].walls[2]) {
                //if (true) {
                    ctx.beginPath();
                    ctx.lineStyle = "rgb(41 51 92)"
                    ctx.moveTo((x+1)*tileSizeX, y*tileSizeY);
                    ctx.lineTo((x+1)*tileSizeX, (y+1)*tileSizeY);
                    ctx.stroke();
                }

                // Horizontal lines
                if (m.maze[((xs*y)+x)].walls[1]) {
                //if (true) {
                    ctx.beginPath();
                    ctx.lineStyle = "rgb(41 51 92)"
                    ctx.moveTo(x*tileSizeX, (y+1)*tileSizeY);
                    ctx.lineTo(x*tileSizeX + tileSizeX, (y+1)*tileSizeY);
                    ctx.stroke();
                }
            }
            offset = offset ? 0 : 1;

        }
        // Vertical Border
        ctx.beginPath();
        ctx.lineStyle = "rgb(41 51 92)"
        ctx.moveTo(canvasSizeX, 0);
        ctx.lineTo(canvasSizeX, canvasSizeY);
        ctx.stroke(); 

        // Horizontal Border
        ctx.beginPath();
        ctx.lineStyle = "rgb(41 51 92)"
        ctx.moveTo(0, canvasSizeY);
        ctx.lineTo(canvasSizeX, canvasSizeY);
        ctx.stroke(); 

        
    }

    return (
        <>
            <h1>Maze</h1>
            <Canvas draw={draw} width={canvasSizeX} height={canvasSizeY}/>
        </>
    );
}