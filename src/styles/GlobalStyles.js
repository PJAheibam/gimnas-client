import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        color-scheme: dark;
    }
    body{
        font-family: 'Jost', sans-serif;
        background-color: ${(p) => p.theme.background[300]};
    }
`;
