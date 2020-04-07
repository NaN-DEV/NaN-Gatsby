import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

html{
   font-size: 62.5%;
}

body {
   margin: 0;
   padding: 0;
   min-height: 100vh;
   font-family: "Montserrat", sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 2.4rem;
   line-height: 1.3;
   color: ${props => props.theme.primary};
   background-color:${props => props.theme.secondary};
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    padding:0;
    margin:0;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong{
    font-weight: 600;
}

p,
span{
   font-weight: 300;
}

a {
   font-weight: 600;
   text-decoration: none;
   color: ${props => props.theme.primary};
   transition: ${props => props.theme.primary};
   &:hover{
         color:  ${props => props.theme.primary_hover};
   }
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   cursor: pointer !important;
   position: relative;
   background-color: transparent;
   transition: ${props => props.theme.animation_time};

     &:focus{
       outline:none;
     }
}

ol,
ul{
   margin:0;
   padding:0;
}
section{
    overflow: hidden;
    position: relative;
}
`;

export default GlobalStyle;
