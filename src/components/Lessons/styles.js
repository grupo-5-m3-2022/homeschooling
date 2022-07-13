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