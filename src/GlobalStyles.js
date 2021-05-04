import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Varela Round', sans-serif;
    }

    html, body{
        overflow-x: hidden;
        /* background: red; */
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .Nav:focus {
        color: #462686;
        border-bottom: 3px dashed #462686;
        padding-bottom:10px;
    }
`

export default GlobalStyles;