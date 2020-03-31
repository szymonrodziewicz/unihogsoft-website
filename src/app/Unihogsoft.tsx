import React, { Suspense, useEffect, useRef, useState, useMemo, FC } from 'react'
import useWindowDimensions from './windowDimension'
import './Unihogsoft.css'
import { TextState } from './TextRing'

interface Props {
  technology: String,
  file: String,
  textState: TextState
}

export const Unihogsoft = ({technology, file, textState}: Props) => {

  const [len, setLen] = React.useState(0)
  const maxLen = file.length + technology.length
  React.useEffect(() => {
    if(textState == "REMOVE") {
      if(len > 0) {
        setTimeout(() => setLen(len - 1), 30)
      }
    } else {
      if(len <= maxLen){
        setTimeout(() => setLen(len + 1), 30)
      } 
    }
  }, [len, textState]);

  const technologyString = technology.substring(0, Math.min(technology.length, len))
  const fileString = file.substring(0, len - technology.length)
  return (
    <div className="unihog">
      <div className="title">
        >Unihogsoft/{technologyString}
      </div>
      <div className="subtitle">
        File: {fileString} <br/>
        //software-engineering
      </div>

    </div>
  )
}