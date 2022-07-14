import styled from "styled-components";

export const BimesterContent = styled.div`
    padding: ${props => props.nopadding ? "" : "32px 54px"};
    display: flex;
    flex-direction: column;
    gap: 35px;
    animation: appearRight 500ms;

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

        .bimester-info {
            background-color: white;
            font-size: 12px;
            cursor: pointer;

            h3 {
                font-size: 14px;
                font-weight: 700;
            }

            div {
                padding: 20px 30px;
                display: flex;
                gap: 25px;

            }
        }

        .lesson-info {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            gap: 15px;
            padding: 20px 30px;
            background-color: white;
            cursor: pointer;

            h3 {
                font-size: 14px;
                font-weight: 700;
            }
        }

        .lesson-moreInfo {
            display: flex;
            gap: 30px;
            color: #6B758A;
        }

        .lesson-title {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 16px;
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
`