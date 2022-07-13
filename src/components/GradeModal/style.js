import styled from "styled-components";

export const Container = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 0 10px;
    width: 100%;
    max-width: 350px;
    max-height: 400px;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;

    form{
        width: 100%;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    background-color: white;
    width: 100%;
    height: 30px;

    p{
        color: black;
        font-family: 'Inter', sans-serif;
        font-size: large;
        font-weight: bold;
        margin-left: 10px;
    }

    button{
        background-color: #87CEFA;
        color: white;
        border: 1px solid black;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
    }
    
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-bottom: 20px;

    button{
        height: 35px;
        border: 1px solid #87CEFA;
        border-radius: 4px;
        background-color: #87CEFA;
    }
   
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  #F0F7FD;
    border: 1px solid  #F0F7FD;
    border-radius: 8px;
    height: 35px;
    margin: 5px 0;

    input{
    background: transparent;
    align-items: center;
    width: 100%;
    flex: 1;
    border: 0;
    color: #666;
    &::placeholder{
       color: #666 ;
    }
}
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    span{
        font-size: 12px;
        color: red;
        display: flex;
        align-self: flex-start;
    }
`