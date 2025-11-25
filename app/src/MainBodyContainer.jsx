import styled from "styled-components";
import { BASE_URL } from "./App";
import { Buttons } from "./App";

const MainBodyContainer = ({ data }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {data?.map(({ name, image, price, text, index }) => (
          <FoodCard key={index}>
            <div className="cardImage">
              <img src={BASE_URL + image} alt="" />
            </div>

            <div className="FoodInfo">
              <div>
                <h4>{name}</h4>
                <p>{text}</p>
              </div>

              <div>
                <Buttons>${price.toFixed(2)}</Buttons>
              </div>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

export default MainBodyContainer;

let FoodContainer = styled.div`
  min-height: 100vh;
  margin-top: 50px;
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

let FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  justify-content: center;
`;

let FoodCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 170px;
  width: 350px;
  align-items: center;
  margin-top: 38px;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  .FoodInfo {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 17px;
  }

  h4{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 3px;
  }

  p{
    font-size: 15px;
    font-weight: 400;
  }
`;
