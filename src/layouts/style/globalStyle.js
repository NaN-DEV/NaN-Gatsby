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
   line-height: 1.3;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: normal;
   font-family: 'Montserrat', sans-serif;
   color: ${props => props.theme.settings.colorText};
   background-color: ${props => props.theme.settings.colorBackgroundDark};



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
   transition: ${props => props.theme.settings.animation};
}

button{
   margin:0;
   padding: 0;
   border: none;
   display: block;
   position: relative;
   cursor: pointer !important;
   background-color: transparent;
   transition: ${props => props.theme.settings.animation};

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
  transition: ${props => props.theme.settings.animation};
}
input,
textarea{
   transition: ${props => props.theme.settings.animation};

   &::placeholder{
      opacity: 1;
      transition: ${props => props.theme.settings.animation};
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
