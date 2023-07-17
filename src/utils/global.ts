import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${(props) => props.theme.colors.bgColor};
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
