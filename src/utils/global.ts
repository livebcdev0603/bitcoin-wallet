import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${require("../assets/fonts/Roboto-Bold.ttf")}) format('truetype');
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${(props) => props.theme.colors.background};
        font-family: "Roboto", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    ul, ol {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

export default GlobalStyles;
