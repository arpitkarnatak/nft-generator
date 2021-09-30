import React, { useState } from 'react'
import './App.css'
import eyes1 from './paint/eyes/eyes1.png'
import eyes2 from './paint/eyes/eyes2.png'
import eyes3 from './paint/eyes/eyes3.png'
import face1 from './paint/face/face1.png'
import face2 from './paint/face/face2.png'
import face3 from './paint/face/face3.png'
import hat1 from './paint/hats/hat1.png'
import hat2 from './paint/hats/hat2.png'
import shades1 from './paint/shades/shades1.png'
import shades2 from './paint/shades/shades2.png'
import shades3 from './paint/shades/shades3.png'

function App() {
  const faces = [face1, face2, face3]
  const eyes = [eyes1, eyes2, eyes3]
  const hats = [hat1, hat2]
  const shades = [shades1, shades2, shades3]
  const shadesProbability = .5

  const [faceNo, setfaceNo] = useState()
  const [eyesNo, seteyesNo] = useState()
  const [hatsNo, sethatsNo] = useState()
  const [shadesNo, setshadesNo] = useState()
  const [shadesVisible, setshadesVisible] = useState(false)

  const [AlreadyCreated, setAlreadyCreated] = useState(new Array())

  const ButtonClick = () => {
    setshadesVisible(Math.random() < shadesProbability) // Visibility can be set for rare traits
    setfaceNo(Math.floor(Math.random() * faces.length))
    seteyesNo(Math.floor(Math.random() * eyes.length))
    setshadesNo(Math.floor(Math.random() * shades.length))
    sethatsNo(Math.floor(Math.random() * hats.length))
    setAlreadyCreated([...AlreadyCreated,[faceNo, eyesNo, shadesNo, hatsNo]])
  }

  return (
    <div className="App">
      <div style={{ position: 'absolute', left: '300px' }} className="NFT">
        <img src={faces[faceNo]} alt='' style={{ position: 'absolute', border: `3px solid black`, zIndex: '1' }} />
        <img src={eyes[eyesNo]} alt='' style={{ position: 'absolute', border: `3px solid black`, zIndex: '4' }} />
        {shadesVisible && <img src={shades[shadesNo]} alt='' style={{ position: 'absolute', border: `3px solid black`, zIndex: '5', opacity: '.6' }} />}
        <img src={hats[hatsNo]} alt='' style={{ position: 'absolute', border: `3px solid black`, zIndex: '4' }} />
      </div>
      <button onClick={() => ButtonClick()}>
        Generate New art
      </button>
      <ul>
        <li>Face: {faceNo>-1 ? faceNo+1 : "None"}</li>
        <li>Hat: {hatsNo>-1 ? hatsNo+1 : "None"}</li>
        <li>Eyes: {eyesNo>-1 ? eyesNo+1 : "None"}</li>
        <li>Shades: {shadesVisible ? shadesNo+1 : "None"}</li>
      </ul>
      Probability of Shades: {shadesProbability*100}%

      <div>
        {AlreadyCreated.map((i) => 
        <div>{i}</div>
        )}
      </div>
    </div>
  )
}

export default App
