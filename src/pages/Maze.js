import Canvas, {resizeCanvasToDisplaySize} from "./Canvas"

export default function Maze() {
    var convasSizeX = 500;
    var canvasSizeY = 500;
    let xSize = 120;
    let ySize = 120;

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

        
        

        let counter = 0
        let offset = 0
        for (let i =0; i < xSize; i++) {
            for (let j=0; j<ySize; j++) {
                if (counter%2===offset) {
                    ctx.fillStyle = `rgb(0 0 0)`;
                } else {
                    ctx.fillStyle = `rgb(255 255 255)`;
                }
                ctx.fillRect(j*10, i*10, 10, 10);
                counter++;
            }
            offset = offset ? 0 : 1;
           // offset = 1
        }

        // for (let i = 0; i < 6; i++) {
        //     for (let j = 0; j < 6; j++) {
        //       ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        //         255 - 42.5 * j,
        //       )} 0)`;
        //       ctx.fillRect(j * 25, i * 25, 25, 25);
        //     }
        //   }
        
    }

    return (
        <>
            <h1>Maze</h1>
            <Canvas draw={draw} width={convasSizeX} height={canvasSizeY}/>
        </>
    );
}