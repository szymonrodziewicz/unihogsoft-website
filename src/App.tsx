import React, { Suspense } from 'react';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber'
import { TextRing, TextState } from './app/TextRing';
import useWindowDimensions from './app/windowDimension';
import { Unihogsoft } from './app/Unihogsoft';
import { Samples } from './Codes';


const lines = 30
const sampleStartRemoveTime = 1000
const sampleDisplayInterval = 200
function App() {
  const { height, width } = useWindowDimensions()
  const minDim = Math.min(height, width)
  console.log(minDim)
  const [updatedCount, setUpdatedCount] = React.useState(0)
  const [sample, setSample] = React.useState(0)
  const [textState, setTextState] = React.useState("INSERT")
  React.useEffect(() => {
    if(updatedCount == lines) {
      setUpdatedCount(0)
      if(textState == "INSERT") {
        setTimeout(() => {
          setTextState("REMOVE")
        }, sampleStartRemoveTime)
      } else {
        setTimeout(() => {
          setTextState("INSERT")
          setSample(sample + 1)
        }, sampleDisplayInterval);
      }
    }
  }, [updatedCount])
  const sampleObj = Samples[sample % Samples.length]
  const sampleCode = sampleObj.code.repeat(2).split('\n')
  return (
    <div className="App" style={{ background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 70%, rgba(18,18,18,1) 100%)' }}>
      <Unihogsoft technology={sampleObj.technology} file={sampleObj.file} textState={textState as TextState}></Unihogsoft>
      
      {
        Array.from(Array(lines).keys()).map(i => {
          const j = i + 1
          return (
            <TextRing 
              fontSize={(12 + (i/2)) * (minDim / 1300)} 
              text={sampleCode[i]} 
              radius={(60 + 13 * j + (0.5*j*j*0.5)) * (minDim / 1300)} 
              chars={70} 
              textState={textState as TextState}
              written={() => setUpdatedCount(updatedCount + 1)}
              removed={() => setUpdatedCount(updatedCount + 1)}
            />
          )
        })
      }
    </div>
  );
}

export default App;
