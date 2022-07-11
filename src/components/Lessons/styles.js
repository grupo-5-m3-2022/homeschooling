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

    @keyframes appearRight {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes appearLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`