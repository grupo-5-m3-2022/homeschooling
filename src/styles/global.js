import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

    ul, ol {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`
