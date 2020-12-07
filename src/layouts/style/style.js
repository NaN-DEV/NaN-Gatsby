import { createGlobalStyle, css } from 'styled-components';

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
   line-height: 1.3;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: normal;
   font-family: 'Montserrat', sans-serif;
  
   ${props => {
     switch (props.color) {
       case 'primary':
         return css`
           color: ${props.theme.secondary};
           background-color: ${props.theme.primary};
         `;

       case 'tertiary_1':
         return css`
           color: ${props.theme.primary};
           background-color: ${props.theme.tertiary_1};
         `;

       case 'tertiary_2':
         return css`
           color: ${props.theme.primary};
           background-color: ${props.theme.tertiary_2};
         `;

       case 'tertiary_3':
         return css`
           color: ${props.theme.primary};
           background-color: ${props.theme.tertiary_3};
         `;

       case 'tertiary_4':
         return css`
           color: ${props.theme.primary};
           background-color: ${props.theme.tertiary_4};
         `;

       default:
         return css`
           color: ${props.theme.primary};
           background-color: ${props.theme.secondary};
         `;
     }
   }}
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
   text-decoration: none;
   color: ${props => props.theme.primary};
   transition: ${props => props.theme.animation};

   svg{
     fill: ${props => props.theme.primary};
     transition: ${props => props.theme.animation};
   }

   &:hover {
      opacity: 0.6;
         svg {
         opacity: 0.9;
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
  display: flex; 
  flex-wrap: wrap;
  position: relative;
  transition: ${props => props.theme.animation};
}
input,
textarea{
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
