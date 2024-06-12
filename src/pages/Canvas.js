import useCanvas from "./CanvasHook"

const Canvas = props => {
    const {draw, ...rest } =props;
    const canvasRef = useCanvas(draw);

    return <canvas ref={canvasRef} {...rest}/>
} 

export default Canvas

function resizeCanvasToDisplaySize(canvas) {
    
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      return true // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false
  }