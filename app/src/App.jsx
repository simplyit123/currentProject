import styled from "styled-components";
import MainBodyComponent from "./MainBodyComponent";
import { useEffect, useState } from "react";
export let BASE_URL = "http://localhost:9000";

const App = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let [searchData, setSearchData] = useState([]);
  let [selectedBtn, setSelectedBtn] = useState("all");

  let btnData = [
    {name: "All", type: "all"},
    {name: "Breakfast", type: "breakfast"},
    {name: "Lunch", type: "lunch"},
    {name: "Dinner", type: "dinner"},
  ]

  useEffect(() => {
    async function FetchingData() {
      setLoading(true)
    try {
        let response = await fetch(BASE_URL);
        let jsonData = await response.json();
        setData(jsonData);
        setSearchData(jsonData)
        setLoading(false);
      }

      catch (error) {
      setError("Unable to Fetch Data");
    }
    }

    FetchingData();
  }, []);


  function handleSearch(event){
    let searchVal = event.target.value;

    if(searchVal===""){
      setSearchData()
    }

    let filter = data.filter((food)=> food?.name.toLowerCase().includes(searchVal?.toLowerCase()))
    setSearchData(filter)
  }

  function handleFilter(type) {
    if(type==="all"){
      setSearchData(data)
      setSelectedBtn("all")
      return
    }

    let filter = data.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    setSearchData(filter)
    setSelectedBtn(type)
  }

  {error && <p>{error}</p>}
  {loading && <h4>Loading...</h4>}

  return (
    <MainContainer>
      <TopSection>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <input onChange={handleSearch} placeholder="Search Food..." />
      </TopSection>

      <FilterContainer>
        {btnData.map((item, index)=>(
          <Buttons onClick={()=>handleFilter(item.type)} isSeleced={selectedBtn===item.type} key={index}>{item.name}</Buttons>
        ))}
      </FilterContainer>

      <MainBodyComponent data={searchData} />
    </MainContainer>
  );
};

export default App;

let MainContainer = styled.div``;

let TopSection = styled.div`
  min-height: 140px;
  align-items: center;
  margin: 0 100px;
  display: flex;
  justify-content: space-between;

  input {
    color: white;
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px;
    background: transparent;
    height: 40px;
    width: 220px;
    font-family: "inter", sans-serif;
    font-size: 16px;

    &::placeholder {
      color: white;
    }
  }

  @media (max-width:800px){
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;
let FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;

  @media (max-width:800px){
    margin-top: 20px;
  }
`;

export let Buttons = styled.button`
  color: ${({isSeleced})=>!isSeleced? "white" : "#ff4141"};
  background-color: ${({isSeleced})=> isSeleced? "white" : "#ff4141"};
  padding: 7px 15px;
  border-style: none;
  border-radius: 5px;
  margin-left: 10px;
`;
