import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Space Mono;
  }

  body {
    background-color: ${props => props.theme.background};
    font-family: 'Space Mono';
  }

  
`;

export default GlobalStyles;