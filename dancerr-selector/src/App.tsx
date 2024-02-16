import { useContext } from 'react'
import './App.css'
import { SoundContext } from './api/buttonProvider'
import { SoundButton } from './components/soundButton'


function App() {

  const sounds = useContext(SoundContext)

  return (
    <>
      <h1>Soundboard</h1> 
      {sounds.map(sound => (
        <SoundButton key={sound.id} sound={sound} />
      ))}
    </>
  )
}

export default App
