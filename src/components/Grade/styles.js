import styled from "styled-components";

export const ContainerGrade = styled.div`
    width: 100%;
    height: 800px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 54px;
    background-color: #F0F7FD;
    animation: appearRight 500ms;
`

export const ContainerInfos = styled.div`
    width: 250px;
    max-width: 30%;
    margin-bottom: 50px;
    
    h3{
        color: black;
        margin-bottom: 10px;
    }
    p{
        color: gray;
        font-size: 14px;
        margin-bottom: 30px;
    }
    button{
        background-color: #87CEFA;
        height: 35px;
        width: 100%;
        max-width: 150px;
        border-radius: 4px;
        margin-top: 10px;
    }
`

export const GradesTable = styled.div`
    height: auto;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        width: 100%;
        
    }
`

export const HeaderTable = styled.div`
    width: 100%;
    background-color: #F0F7FD;
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
    div{
        color: black;
        font-weight: 700;
        font-size: 14px;
        width: 25%;
    }

    .score{
        padding-right: 50px;
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


export const MediaGrades = styled.div`
    width: 100%;
    height: 80px;
    background-color: #d3d3d3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 15px;
    
    div{
        width: 30%;
        display: flex;
        justify-content: space-between;
        margin: 10px 5px 10px 0;
        span{
        color: black;
        font-weight: 700;
        font-size: 14px;
        }
        p{
        color: black;
        font-size: 14px;
        }
    }
`
 
export const Btn = styled.button`
    width:70px;
    height: 35px;
    background-color: white;
    border: 1px solid white;
    border-radius: 8px;
    font-weight: 500;
`

export const NoGrades = styled.div`
    width: 100%;
    margin: 20px;

    font-weight: 700;
    font-size: 16px;
`