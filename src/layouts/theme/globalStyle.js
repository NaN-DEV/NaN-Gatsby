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
   line-height: 1;
   color: ${({ theme }) => theme.primary};
   background-color:${({ theme }) => theme.secondary};
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
   color: ${({ theme }) => theme.primary};
   transition: all 0.3s;
   &:hover{
         color:  ${({ theme }) => theme.primary_hover};
   }
}

button{
   padding: 0;
   margin:0;
   border: none;
     &:focus{
       outline:none;
     }
}

ol,
ul{
   padding:0;
   margin:0;
}

.row{
   display: flex;
   max-width: ${({ theme }) => theme.max_width};
   padding: ${({ theme }) => theme.break_mobile};
   margin: 0 auto;
   flex-wrap: wrap;
}

section{
    overflow: hidden;
    position: relative;
}

@media (min-width: ${({ theme }) => theme.breakpoint}) {
   .row{
       padding: ${({ theme }) => theme.break_desctop};
   }
}
`;

export default GlobalStyle;
