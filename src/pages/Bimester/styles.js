import styled from "styled-components";

export const BimesterContent = styled.div`
    padding: 32px 54px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    animation: appear 500ms;

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
            cursor: pointer;

            h3 {
                font-size: 14px;
                font-weight: 700;
            }
        }
    }

    @media (max-width: 800px) {
        padding: 25px 20px;

        .bimester-navegation {
            button {
                font-size: 12px;
            }
        }

        .bimester-content {

            div {

                h3 {
                    font-size: 12px;
                    font-weight: 700;
                }

                svg {
                    min-width: 15px;
                    min-height: 15px;
                }
            }
        }
    }

    @keyframes appear {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`