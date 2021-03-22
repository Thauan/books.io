import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Heebo', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`;
