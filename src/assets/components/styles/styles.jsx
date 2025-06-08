import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
   
    width: 90%;
    min-height: 90%;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

   
    input{
        background-color: #ffffff;
        width: 100%;
        height: 16vh;
        padding: 0 10px ;
        font-size: 10vh;
        border-style: none;
   }
`
export const ButtonContainer = styled.button`
  font-size: 10vh;
   width: 32%;
   height: 14vh;
   margin: 2px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content:center;
   background-color: #bce0ff;
   cursor: pointer;
   color: brown;

    &:hover{
      color: #1c1c1c;
      scale: 0.98;
      background-color: #d0e6fa;
    }  
`
export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`
