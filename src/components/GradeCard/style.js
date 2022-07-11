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
        width: 25%;
    }
    .score{
        width: 12.5%;
    }

    @media (max-width: 900px) {
        .date{
            display: none;
        }
        
    }
    @media (max-width: 570px) {
        .max{
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