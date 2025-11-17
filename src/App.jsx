import styled from "styled-components"
import StartGame from "./StartGame"
import PlayGame from "./PlayGame"
import { useState } from "react"


const App = () => {
  let [play, setPlay] = useState(true)

  function togglePlay(){
    setPlay((prev) => !prev)
  }


  return (
    <MainComponent>
      {play? <PlayGame/> : <StartGame toggle={togglePlay}/>}
    </MainComponent>
  )
}

export default App


let MainComponent = styled.div`
  
`