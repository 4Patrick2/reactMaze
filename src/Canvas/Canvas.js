import { useRef, useEffect } from "react";

function Canvas(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = 'red';
        context.fillRect(0, 0, props.width, props.height);

    }, []);

    return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}

export default Canvas