import React, { Suspense, useEffect, useRef, useState, useMemo, FC } from 'react'
import "./TextRing.css"
import useWindowDimensions from './windowDimension'

const delay = 40;

export type TextState = 'REMOVE' | 'INSERT'

interface Props {
  screenWidth: number,
  screenHeight: number,
  text: String[],
  radius: number,
  chars: number,
  fontSize: number,
  textState: TextState,
  written: () => void,
  removed: () => void
}


interface State {

}

export class TextRingOpt extends React.Component {

  // lines = 20;
  // chars = 70;
  // fontSize = new Array(this.lines).map( (x, i) => ((12 + (i/2)) * (minDim / 1300)))
  // radius = new Array(this.lines).map( (x, i) => (60 + 13 * i + (0.5*i*i*0.5)) * (minDim / 1300))
  // letterRefs = new Array(this.lines).map( x => new Array(this.chars))

  // constructor(props: Props) {
  //   super(props)
  //   const { height, width } = useWindowDimensions()
  //   const centerHeight = height / 2
  //   const centerWidth = width / 2
  //   const minDim = Math.min(height, width)  
  // }

  // updateDimensions = () => {
  //   this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
  // };
  // componentDidMount() {
  //   window.addEventListener('resize', this.updateDimensions);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions);
  // }

  // render() {
  //   return (
  //     "dsa"
  //   )
  // }
}