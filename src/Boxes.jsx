
import styled from "styled-components";

const Boxes = ({error, selectedNum, setSelectedNum}) => {
  let boxNumbers = [1, 2, 3, 4, 5, 6];

  
  return (
    <BoxComponent>
      <div className="topBtns">
        <p style={{color:"red"}}>{error}</p>
        <div>
          {boxNumbers.map((num, index) => (
            <Buttons
              key={index}
              onClick={() => setSelectedNum(num)}
              $isSelected={selectedNum === num}
            >
              {num}
            </Buttons>
          ))}
        </div>
        <p>Select Number</p>
      </div>
    </BoxComponent>
  );
};

export default Boxes;

let BoxComponent = styled.div`
  .topBtns {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  p {
    font-size: 18px;
    font-family: "poppins", sans-serif;
    font-weight: 500;
  }
`;

let Buttons = styled.button`
  height: 60px;
  width: 60px;
  font-size: 18px;
  font-family: "poppins", sans-serif;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (!props.$isSelected ? "black" : "white")};
  margin-left: 10px;
  border: 1px solid black;
`;
