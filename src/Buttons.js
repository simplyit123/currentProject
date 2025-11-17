import styled from "styled-components";

export let Buttons = styled.button`
width: 180px;
height: 40px;
background-color: black;
color: white;
border-radius: 5px;
border: 1px solid transparent;
transition: 0.3s ease-out;
font-family: 'Poppins', sans-serif;
font-weight: 500;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-out ;
}
`

export let OutlineBtn = styled(Buttons)`
color: black;
background-color: white;
border: 1px solid black;

&:hover{
    color: white;
    background-color: black;
}

`