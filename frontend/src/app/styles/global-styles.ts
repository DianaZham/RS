import {createGlobalStyle} from 'styled-components'
import fontSrc from './fonts/nunito-sans/NunitoSans-Regular.ttf'


export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: Nunito-Sans;
    src: local('Nunito-Sans'), url("${fontSrc}") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '${({theme}) => theme.font.family}';
  }

  body {
    background: #d3d3d3;
  }
`
