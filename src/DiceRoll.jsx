import styled from "styled-components"


const DiceRoll = ({randomFunc, currentDice}) => {
  return (
    <DiceComponent>
        <img src={`/src/assets/dice_${currentDice}.png`} onClick={randomFunc} alt="dice" />
        <p>Click on Dice To Roll</p>
    </DiceComponent>
  )
}

export default DiceRoll


let DiceComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
        font-family: 'poppins', sans-serif;
        font-weight: 500;
    }
`