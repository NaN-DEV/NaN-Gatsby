import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
   box-sizing: border-box;
   -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased;
}

html{
   font-size: 62.5%;
}

body {
   margin: 0;
   padding: 0;
   min-height: 500vh;
   line-height: 1.2;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: normal;
   color: ${props => props.theme.primary};
   font-family: ${props => props.theme.font_primary}; 
   background-color: ${props => props.theme.secondary};
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong{
    font-weight: bold;
}

p,
span{
   font-weight: normal;
}

a {
   font-weight: bold;
   text-decoration: none;
   color: ${props => props.theme.primary};
   transition: ${props => props.theme.animation};

   svg{
     fill: ${props => props.theme.primary};
     transition: ${props => props.theme.animation};
   }

   &:hover {
      color: ${props => props.theme.tertiary_2};
         svg {
             fill: ${props => props.theme.tertiary_2};
         }
   }
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   position: relative;
   cursor: pointer !important;
   background-color: transparent;
   transition: ${props => props.theme.animation};

     &:focus{
       outline: none;
     }
}

ol,
ul{
   margin: 0;
   padding: 0;
}
section{
    overflow: hidden;
    position: relative;
}

form{
  width: 100%;
  height: auto;
  position: relative;
  display: inline-block; 
  transition: ${props => props.theme.animation};
}
input{
   transition: ${props => props.theme.animation};

   &::placeholder{
      opacity: 1;
      transition: ${props => props.theme.animation};
   }

   &:focus{
       outline: none;
          &::placeholder {
             opacity:0;
          }
    }
}
`;

export default GlobalStyle;
