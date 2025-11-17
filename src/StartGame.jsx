import styled from "styled-components"
import { Buttons } from "./Buttons"


const StartGame = ({toggle}) => {

  return (
    <StartGameComponent>
        <img src="/src/assets/dices.png" alt="Dice Game" />

        <div className="content">
          <h1>DICE GAME</h1>
          <Buttons onClick={toggle}>Play Now</Buttons>
        </div>
    </StartGameComponent>
  )
}

export default StartGame


let StartGameComponent = styled.div`
    overflow: hidden;
    width: 1180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 60px;

    .content{
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    h1{
      font-size: 80px;
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
    }
`