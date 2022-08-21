import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --dark: 'hsl(0, 0%, 0%)';
        --light: 'hsl(0, 0%, 100%)'
        --light-dark-grey: 'hsl(0, 0%, 63%)';
        --dark-grey: 'hsl(0, 0%, 27%)'
    }

    body{
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
    }

    .btn{
        border-color: transparent;
        padding: 0.5rem 1rem;
        cursor: pointer;
        padding: 5px;
    }

    /* fixed header mobile navigation */
    .fixed{
        position: fixed;
        left: 0;
        top: 0;
    }

    .content-section{
        padding-block: 45px;
        margin: auto;
    }

`