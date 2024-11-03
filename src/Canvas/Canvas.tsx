import { useRef, useEffect } from "react"

export default function Canvas({ ... props }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'grey';
        const delta = frameCount % 800;
        ctx.fillRect(10 + delta, 10, 100, 100);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        let animationFrameId: number;
        let frameCount = 0;

        const render = () => {
            frameCount++;
            draw(context!, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return (
        <canvas ref={canvasRef} {...props} />
    )
}