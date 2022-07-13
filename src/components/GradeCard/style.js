import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #87CEFA;
    border: 1px solid #87CEFA;
    border-radius: 2px;
    margin: 8px 0;

    span{
        color: black;
        font-size: 14px;
        width: 20%;
    }
    .scoreMax{
        width: 5%;
    }
    .score{
        width: 17.5%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btns{
        width: 5%;
        display: flex;
        button{
            width: 25px;
            height: 17px;
            background-color: white;
            border: 1px solid white;
            border-radius: 4px;
            margin: 0 2px;
        }

    .delete:hover{
        background-color: red;
    }
    .edit:hover{
        background-color: yellow;
    }
    }

    @media (max-width: 900px) {
        .date{
            display: none;
        }
        
    }
    @media (max-width: 570px) {
        .scoreMax{
            display: none;
        }    
    }
    @media (max-width: 530px) {
        .subject{
            display: none;
        }   
        .name{
            width: 87.5%;
        }  
    }
`