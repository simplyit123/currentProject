import styled from "styled-components"
import { BASE_URL, Buttons } from "./App"


const MainBodyComponent = ({data}) => {
  return (
    <BodyComponent>
        <FoodCards>
            {data.map(({name, price, index, text, image})=>(
                <FoodCard key={index}>
                    <div className="img">
                        <img src={BASE_URL+image} alt="" />
                    </div>

                    <div className="foodInfo">
                        <div className="info">
                            <h4>{name}</h4>
                            <p>{text}</p>
                        </div>

                        <Buttons>${price.toFixed(2)}</Buttons>
                    </div>
                </FoodCard>
            ))}
        </FoodCards>
    </BodyComponent>
  )
}

export default MainBodyComponent


let BodyComponent = styled.div`
min-height: 100vh;
background-image: url("/bg.png");
`

let FoodCards = styled.section`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

let FoodCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
    border: 1px solid white;
    border-radius: 15px;
    height: 170px;
    width: 350px;
    margin-top: 30px;

.foodInfo{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;
    gap: 15px;
    margin-right: 7px;
}

h4{
    font-size: 18px;
    font-size: 500;
}

p{
    font-size: 14px;
    font-weight: 400;
}

.info{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

`