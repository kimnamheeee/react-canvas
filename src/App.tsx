import Canvas from "./Canvas/Canvas"

function App() {

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'grey';
    const delta = frameCount % 800;
    ctx.fillRect(10 + delta, 10, 100, 100);
}

  return (
    <Canvas draw={draw} width={800} height={500}/>
  )
}

export default App
