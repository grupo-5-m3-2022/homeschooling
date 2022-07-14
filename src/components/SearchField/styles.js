import styled from "styled-components"

export const SearchInputDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    svg {
        color: #8A91A0;
        position: absolute;
        margin: 10px 15px;
    }
`

export const SearchSelectStyle = styled.select`
    padding: 10px 25px 10px 35px;
    border-radius: 15px;
    border: 1px solid #8A91A0;
    color: #8A91A0;
    font-size: 12px;
    cursor: pointer;
`

export const SearchInputStyle = styled.input`
    padding: 10px 15px 10px 35px;
    border-radius: 15px;
    border: 1px solid #8A91A0;
    font-size: 12px;

    &::placeholder {
        color: #8A91A0;
    }
`