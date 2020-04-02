import { SpiralProps } from "../App";
import React, { Suspense, useEffect, useState } from 'react';
import "./Control.css"

interface Props {
  setSpiral: (props: SpiralProps) => void
}

export const Control = ({setSpiral}: Props) => {

  const [text, setText] = useState("JEZE");
  const [deltaC, setDeltaC] = useState("0.1");
  const [deltaPhi, setDeltaPhi] = useState("0.1");

  const submitSpiralProps = () => {
    setSpiral({text, deltaC: parseFloat(deltaC), deltaPhi: parseFloat(deltaPhi)})
  }

  return (
    <div className="control">
      <div className="row">
        <div className="desc">Text</div>
        <input className="valIn" type="text" value={text} onChange={t => setText(t.target.value)} />
      </div>
      <div className="row">
        <div className="desc">ΔC</div>
        <input className="valIn" type="text" value={deltaC} onChange={t => setDeltaC(t.target.value)} />
      </div>
      <div className="row">
        <div className="desc">ΔPhi</div>
        <input className="valIn" type="text" value={deltaPhi} onChange={t => setDeltaPhi(t.target.value)} />
      </div>
      <div className="row" id="btnRow">
        <button onClick={submitSpiralProps}>Update</button>
      </div>
    </div>
  )
}