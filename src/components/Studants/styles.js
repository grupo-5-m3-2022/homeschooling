import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    width: 100%;
`

export const Header = styled.div`
    width: 40%;
    display: flex;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const TotalStudants = styled.div`
    width: 200px;
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 10px;
    display: flex;
`

export const Icon = styled.div`
    color: #0075FF;
    display: flex;
    align-items: center;
    width: 25%;
    font-size: 40px;
`

export const TotalContent = styled.div`
    width: 70%;
    padding-top: 15px;
    margin: 5px;

    p{
        font-size: 13px;
    }

    h3 {
        margin-top: 10px;
    }
`

export const ButtonContainer = styled.div`
    margin-left: 15px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px) {
        margin-top: 15px;
        width: 150px;
    }

    button {
        border-radius: 8px;
        border: none;
        background-color: #0075FF;
        color: #FFFFFF;
        width: 200px;
        height: 50px;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-size: 22px;
            padding-right: 15px;
        }
    }
`

export const Body = styled.div`
    width: 100%;
    margin-top: 15px;
`

export const CardStudant = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    width: 90%;
    height: 70px;
    margin: 15px 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 670px) {
        flex-direction: column;
        height: 150px;
    }
`

export const UserName = styled.div`
    width: 250px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    span {
        font-size: 26px;
    }
    p {
        margin-left: 15px;
    }
`

export const UserEmail = styled.div`
    width: 100px;
`

export const UserRemove = styled.button`
    width: 50px;
    font-size: 22px;
    color: red;
    border: none;
    background-color: #FFFFFF;
`