import styled from "styled-components";

export const ContainerGrade = styled.div`
    width: 100%;
    height: 800px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 54px;
    background-color: #F0F7FD;
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
    span{
        color: black;
        font-weight: 700;
        font-size: 14px;
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