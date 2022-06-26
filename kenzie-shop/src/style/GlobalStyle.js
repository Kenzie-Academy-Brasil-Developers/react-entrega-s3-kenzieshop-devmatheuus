import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }
  html{
    font-size: 62.5%;
  }

  :root{
    --white: #FFFFFF;
    --shadow: rgba(0, 0, 0, 0.25);
    --gray:#868E96;
    --dark-gray: #212529;
    --white-gray: #ADB5BD;
    --cream: #f1f3f5;  
    --turquoise: #12B886;
    --white-turquoise: rgba(18, 184, 134, 0.05); 
    --shadow-hover: rgb(146 146 146);
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
  input{
    outline: none;
  }

  ol, ul{
    list-style: none;
  }
`;
export default GlobalStyle;
