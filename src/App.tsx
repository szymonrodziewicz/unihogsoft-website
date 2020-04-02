import React, { Suspense, useEffect } from 'react';
import './App.css';
import { init, resetSpiral } from './app/particles'
import { Control } from './controls/Control';

export interface SpiralProps {
  text: string,
  deltaC: number,
  deltaPhi: number
}

function App() {
  const canvasRef = React.createRef<HTMLCanvasElement>();
  useEffect(() => {
    const gl = canvasRef.current?.getContext('webgl');
    console.log(gl)
    init(canvasRef.current)
  }, [])
  return (
    <div className="App" style={{ background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 70%, rgba(18,18,18,1) 100%)' }}>
        <Control setSpiral={d => resetSpiral(d.text, d.deltaC, d.deltaPhi)}></Control>
        <canvas style={{width: "100%", height:"100%"}} ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
