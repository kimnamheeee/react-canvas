import { useRef, useEffect } from "react"

interface draw {
    (context: CanvasRenderingContext2D, frameCount: number): void;
}

export default function useCanvas(draw: draw) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
    }, [draw]);

    return canvasRef;
}