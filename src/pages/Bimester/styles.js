import styled from "styled-components";

export const BimesterContent = styled.div`
    padding: 32px 54px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    .bimester-title {
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


    .bimester-navegation {
        width: max-content;

        display: flex;
        gap: 5px;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            font-size: 14px;

            border: none;
            border-radius: 10px;
            padding: 5px;

            background-color: white;
        }

        svg {
            font-size: 20px;
        }
    }

    .bimester-content {

        ul {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        div {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px 30px;
            background-color: white;

            h3 {
                font-size: 14px;
                font-weight: 700;
            }
        }
    }
`