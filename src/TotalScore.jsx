import styled from "styled-components"


const TotalScore = ({score}) => {
  return (
    <ScoreComponent>
        <h1>{score}</h1>
        <h4>Total Score</h4>
        
    </ScoreComponent>
  )
}

export default TotalScore

let ScoreComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    align-items: center; 
    margin-top: -20px;

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 120px;
        font-weight: 500;
        margin: 0;
        padding: 0;
    }

    h4{
        font-family: 'poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        padding: 0;
        margin-top: -30px;
    }
`