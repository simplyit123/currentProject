import styled from "styled-components";
import { useEffect, useState } from "react";
import MainBodyContainer from "./MainBodyContainer";
export let BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState([]);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [searchData, setSearchData] = useState();
  let [searchVal, setsearchVal] = useState()

  useEffect(() => {
    let FoodData = async () => {
      try {
        setLoading(true);
        let response = await fetch(BASE_URL);
        let jsonData = await response.json();
        setData(jsonData);
        setSearchData(jsonData)
        
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data")
      }
    };

    FoodData();
  }, []);

  function handleSearchData(){
    // if(seachVal===""){
    //   setSearchData()
    // }

    let filter = data.filter((food)=>food?.name.toLowerCase().includes(searchData?.toLowerCase()))
    setSearchData(filter)
  }
  
  {error && <p> {error}</p>}
  {loading && <h4>Loading...</h4>}
  
  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <input onChange={()=>handleSearchData()} placeholder="Search Food..." />
        </TopSection>

        <FilterContainer>
          <Buttons>All</Buttons>
          <Buttons>Breakfast</Buttons>
          <Buttons>Lunch</Buttons>
          <Buttons>Dinner</Buttons>
        </FilterContainer>

        <MainBodyContainer data={searchData}/>
      </MainContainer>
    </>
  );
};

export default App;

let MainContainer = styled.div``;

let TopSection = styled.section`
  height: 140px;
  align-items: center;
  margin: 0 100px 0 100px;
  display: flex;
  justify-content: space-between;

  input {
    background: transparent;
    padding: 10px 5px;
    border: 1px solid red;
    border-radius: 5px;
    color: white;
  }

  input::placeholder {
    color: white;
  }
`;

let FilterContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export let Buttons = styled.button`
  color: white;
  background-color: #ff4141;
  padding: 5px 10px;
  border-radius: 5px;
  border-style: none;
  margin-left: 7px;
`;
