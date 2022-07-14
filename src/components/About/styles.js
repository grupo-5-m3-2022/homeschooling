import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px 54px;

    @media (max-width: 800px) {
        padding: 25px 20px;
    }

    h2{
        color: black;
        font-size: 16;
    }
    span{
        color: black;
        font-size: 14px;
    }
`