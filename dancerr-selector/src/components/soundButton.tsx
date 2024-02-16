import { Sound } from '../api/buttonProvider'

export function SoundButton({sound}: {sound: Sound}) { 

    function requestSound() {
        fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/sounds/${sound.id}`, {
        method: 'POST',
        })
    }

  return (
    <button onClick={requestSound}>{sound.name}</button>
  )
}