import styled from "styled-components";
import SignupImage from '../../assets/signup.svg'

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(242,205,251,1) 0%, rgba(0,117,255,1) 100%);
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
    height: 90%;
    background-color: #EEEEEE;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageDiv = styled.div`
    margin-top: 90px;
    @media (min-width: 900px) {
        width: 350px;
        height: 450px;
    }
`

export const ImageContainer = styled.div`
    @media (min-width: 900px) {
        flex: 1;
        background: url(${SignupImage}) no-repeat center;
        background-size: contain;
        width: 400px;
        height: 300px;
    }
`

export const Content = styled.div`
    display: flex;
    width: 95%;
    height: 95%;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        height: 80%;

        h2 {
            display: flex;
            justify-content: center;
            margin-bottom: 35px;
            color: #797979;
        }

        button {
            width: 90%;
            margin: 0 15px;
            border-radius: 10px;
            padding: 15px;
            background: #57B846;
            border-radius: 50px;
            border: none;
            color: #FFFFFF;
            font-weight: 600;
        }

        p {
            display: flex;
            justify-content: center;
            color: #666666;
            font-size: 12px;
            margin-top: 5px;
        }
        
        span {
            margin-left: 25px;
            font-size: 12px;
            color: red;
        }
    }
`

////////////////////////////// INPUT

export const InputContainer = styled.div`
    background: #E6E6E6;
    border-radius: 50px;
    width: 90%;
    height: 50px;
    margin-bottom: 10px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
    gap: 5px;
    padding: 0 15px;

    input {
        border: none;
        background-color: #E6E6E6;
        width: 90%;
        font-weight: 600;
    }
    input:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #E6E6E6 inset;
    }  

    select {
        border: none;
        background: #E6E6E6;
        width: 90%;
        color: #666666;
        font-weight: 600;
    }
`