import { createGlobalStyle } from "styled-components";
 

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  html{
    font-family: "Share Tech Mono",monospace;
    color:${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.navyBlue};
    scroll-behavior: smooth;
    font-size: 12rem;
    
  } 
  

  a{
    text-decoration: none;
    color:${({theme}) => theme.colors.green};
    transition: all 258ms ease-in-out;

    &:hover{
        color:${({theme}) => theme.colors.orange};
    }
  }
  
  ul{
    list-style-type: none;
  }

  hr{
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.purple} 100%
    );
    border: 0;
    height: 1.6px;
  }

  /* custome scrollbar */
  ::-webkit-scrollbar{
    width:13px;
  }
  ::-webkit-scrollbar-track{
    background: #7a8ba9;
  }
  ::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #202e46;
  }
`;
 


 

 