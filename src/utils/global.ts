import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${require("../assets/fonts/Roboto-Bold.ttf")}) format('truetype');
    }

    *, *::before, *::after {
        box-sizing: border-box;
        transition: all 0.2s ease-out;
    }

    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        background-color: ${(props) => props.theme.colors.background};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    p {
        margin: 0;
        font-size: ${(props) => props.theme.fonts.size.text.lg};
        color: ${(props) => props.theme.colors.base};
        text-align: center;
        
        @media screen and (max-width: 375px) {
            font-size: ${(props) => props.theme.fonts.size.text.sm};
        }
    }

    ul, ol {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    h1 {
        font-size: ${(props) => props.theme.fonts.size.title.lg};
        color: ${(props) => props.theme.colors.base};

        @media screen and (max-width: 375px) {
            font-size: ${(props) => props.theme.fonts.size.title.sm};
        }
    }

    svg {
        font-size: ${(props) => props.theme.fonts.size.medium.lg};
        color: ${(props) => props.theme.colors.gray};
        cursor: pointer;

        @media screen and (max-width: 375px) {
            font-size: ${(props) => props.theme.fonts.size.medium.sm};
        }
    }
`;

export default GlobalStyles;
