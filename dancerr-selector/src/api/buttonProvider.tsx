import * as t from 'io-ts'
import { createContext, useEffect, useState } from 'react'

const Sound = t.type({
  id: t.string,
  name: t.string,
})
export type Sound = t.TypeOf<typeof Sound>

const SoundResponse = t.type({
  sounds: t.array(Sound),
})

export const SoundContext = createContext<Array<Sound>>([])

export function SoundProvider(props: {children: React.ReactNode}) {

  const [sounds, setSounds] = useState<Array<Sound>>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/sounds`)
      .then(response => response.json())
      .then((json: unknown) => {
        const result = SoundResponse.decode(json)
        if (result._tag === 'Right') {
          setSounds(result.right.sounds)
        } else {
          console.error(result.left)
        }
      })
  }
  , [])

  return (
    <SoundContext.Provider value={sounds}>
      {props.children}
    </SoundContext.Provider>
  )
}