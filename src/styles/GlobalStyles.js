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
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Jost', sans-serif;
        background-color: ${(p) => p.theme.background[300]};
    }
    .Toastify__toast-theme--dark {
        background-color: ${(p) => p.theme.background[100]};
    }
    .Toastify__close-button > svg {
        fill: ${(p) => p.theme.palette.error}
    }
`;
