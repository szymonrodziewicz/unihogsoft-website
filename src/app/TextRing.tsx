import React, { Suspense, useEffect, useRef, useState, useMemo, FC } from 'react'
import "./TextRing.css"
import useWindowDimensions from './windowDimension'

const delay = 40;

export type TextState = 'REMOVE' | 'INSERT'

interface Props {
  text: String,
  radius: number,
  chars: number,
  fontSize: number,
  textState: TextState,
  written: () => void,
  removed: () => void
}

const stopChars = [' ', '.', '(', '>', '/', '{', '}', '[', ']', '=', '-', '+', '(', ')', '>', ':']

export const TextRing = ({text, radius, chars, fontSize, textState, written, removed}: Props) => {
  const { height, width } = useWindowDimensions()
  const centerHeight = height / 2
  const centerWidth = width / 2
  const maxLen = text.split('').length
  const [removing, setRemoving] = React.useState(false)
  const [len, setLen] = React.useState(0)
  
  React.useEffect(() => {
    if(textState == "REMOVE") {
      if(len > 0) {
        setTimeout(() => setLen(len - 1), delay);
      } else {
        removed()
      }
    } else {
      if(len <= maxLen){
        setTimeout(() => setLen(len + (removing ? -1 : 1)), delay);
      } else {
        written()
      }
    }
  }, [len, textState]);
  const currentText = text.substring(0, len);
  console.log("redraw");
  return (
    <div 
      style={{top: (centerHeight), left: centerWidth,  transformOrigin: "center center"}} className="ring"
    >
      {currentText.split('').map(((c, i) => {
        return (
          <span style={{ 
            fontSize: fontSize,
            offsetPath: `path('M 0 -${radius} a ${radius} ${radius} 0 1 0 1 0')`,
            offsetDistance: `calc(${i} * 100% / ${chars})`
          }}>{c}</span>
        )
      }))}
    </div>
  )
}