import { useRef } from "react"

export default function Canvas({ ... props }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    return (
        <canvas ref={canvasRef} {...props} />
    )
}