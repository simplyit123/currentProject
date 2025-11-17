import styled from "styled-components";
import TotalScore from "./TotalScore";
import Boxes from "./Boxes";
import DiceRoll from "./DiceRoll";
import { Buttons, OutlineBtn } from "./Buttons";
import { useState } from "react";

const PlayGame = () => {
  let [randomNum, setRandomNum] = useState(1);
  let [selectedNum, setSelectedNum] = useState();
  let [score, setScore] = useState(0);
  let [currentDice, setCurrentDice] = useState(1);
  let [error, setError] = useState('');


function handleError(){
  setError("Please Select a Number")
  if(!selectedNum){
    return error
  }

  setError("")
}

  function createRandomNum(max, min) {
    setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function calculateScore() {
    if (randomNum === selectedNum) {
      setScore(score + randomNum);
    } else {
      setScore(score - 2);
    } 

    setSelectedNum("")
  }

  function DiceImage() {
    setCurrentDice(randomNum);
  }

  function handleAll() {
    handleError()
    createRandomNum(6, 1);
    DiceImage();
    calculateScore();
  }

  return (
    <GameComponent>
      <div className="topSection">
        <TotalScore score={score} />
        <Boxes error={error} selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>

      <DiceRoll currentDice={currentDice} randomFunc={() => handleAll()} />

      <div className="btns">
        <OutlineBtn>Reset Score</OutlineBtn>
        <Buttons>Show Rules</Buttons>
      </div>
    </GameComponent>
  );
};

export default PlayGame;

let GameComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .topSection {
    display: flex;
    justify-content: space-between;
    gap: 600px;
    align-items: center;
    justify-content: center;
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
