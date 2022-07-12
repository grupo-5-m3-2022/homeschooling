import styled from "styled-components"

export const ArticleContent = styled.div`
    padding: 32px 54px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    animation: appearRight 500ms;

    .article-title {
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
    
    .article-navegation {
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

    .article-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 14px;

        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    @media (max-width: 800px) {
        padding: 25px 20px;

        .article-navegation {
            button {
                font-size: 12px;
            }
        }

        .article-content {
            font-size: 12px;

            h1 {
                font-size: 14px;
            }
        }
    }
`