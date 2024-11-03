import useCanvas from "./useCanvas";

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
}

export default function Canvas({ ...props }: CanvasProps) {
    const canvasRef = useCanvas(props.draw);

    return (
        <canvas ref={canvasRef} {...props} />
    )
}