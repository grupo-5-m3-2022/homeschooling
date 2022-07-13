import styled from "styled-components";

export const LessonsContentDiv = styled.div`
    padding: 32px 54px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 36px;
    animation: ${props => props.animation === 'go' ? "appearRight" : "appearLeft"} 500ms;

    @media (max-width: 800px) {
        padding: 25px 20px;
    }

    .lessons-title {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
            font-size: 14px;
        }

        h3 {
            font-size: 12px;
            font-weight: 400;
            color: #6B758A;
        }
    }

    .lessons-options {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & > button {
            margin: 20px;
            padding: 20px 10px;
            background-color: #0075FF;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
        }
    }

    .lessons-filter {
        display: flex;
        gap: 25px;
        font-size: 12px;
        background-color: white;
        padding: 15px 20px;
        border-radius: 10px;
        color: #363535;
        width: max-content;

        & > div {
            display: flex;
            flex-direction: column;
            gap: 5px;

            & > p {
                padding-left: 10px;
            }
        }
    }

    .lessons-cardList {
        display: flex;
        gap: 30px;            
        flex-wrap: wrap;
    }

    .lessons-card {
        background-color: white;
        padding: 15px;
        display: flex;
        gap: 5px;
        width: 230px;
        border-radius: 10px;
        cursor: pointer;

        svg {
            width: 40px;
            height: 40px;
            border-radius: 8px;
        }

        h3 {
            font-size: 14px;
            font-weight: 400;
            color: black;
        }

        h4 {
            font-size: 12px;
            font-weight: 400;
            color: #6B758A;
        }
    }
`
export const ModalHeader = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 4;

    button {
        border: none;
        background-color: transparent;
        font-size: 28px;
    }
`

export const ModalBody = styled.div`
    width: 300px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
`

export const ModalContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    
    span {
        margin-top: 5px;
        font-size: 12px;
        color: red;
    }

    button {
        margin: 5px;
        height: 30px;
        width: 80px;
        border-radius: 10px;
        border: none;
        color: #FFFFFF;
        font-weight: 600;
    }

    .btnSubmit {
            background-color: #0075FF;
        }

    .btnClose {
        background-color: #fc204c;
    }

    textarea {
        padding: 5px;
        width: 100%;
        background-color: #E6E6E6;
        border: none;
        font-weight: 600;
        border-radius: 10px;
    }

    select {
        width: 100%;
        background-color: #E6E6E6;
        border: none;
        font-weight: 600;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #E6E6E6;
        font-weight: 600;
    }

    input:focus {
        outline: 2px solid black;
    }

    input:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #E6E6E6 inset;
    } 
`