import { useRef, useEffect } from "react"

export default function Canvas({ ... props }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (context) {
            context.fillStyle = 'grey';
            context.fillRect(10, 10, 100, 100);
        }
    }, []);

    return (
        <canvas ref={canvasRef} {...props} />
    )
}