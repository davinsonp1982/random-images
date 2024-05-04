import { useState, useEffect } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  const [imageDog, setImageDog] = useState('')
  const [fact, setFact] = useState('')

  useEffect(() =>{
    (
    async() => {
      try{
        const response = await fetch('https://random-word.ryanrk.com/api/en/word/random')
        const data = await response.json()
        setFact(data)
      }catch(error){
        console.error(error)
      }
    }
  )()
},[])

useEffect(() => {
  if (fact) {
    (
      async () => {
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await response.json()
          const {message} = data
          setImageDog(message)
        } catch (error) {
          console.error(error)
        }
      }
    )()
  }
}, [fact])

return(
  <>
  <h1>Random word and image</h1>
  { fact && <p> {fact} </p>}
  { imageDog && <img src={imageDog} alt='random' width={400} height={400}/>}
  </>
  )
}

export default App 