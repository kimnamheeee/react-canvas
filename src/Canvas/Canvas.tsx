import { useRef, useEffect } from "react"

export default function Canvas({ ... props }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'grey';
        ctx.fillRect(10, 10, 100, 100);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (context) {
            draw(context);
        }
    }, []);

    return (
        <canvas ref={canvasRef} {...props} />
    )
}