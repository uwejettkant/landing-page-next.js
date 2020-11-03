import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

body {
  padding: 0;
  margin: 0;
  font-family: 'Lato','sanserif';
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media(min-width: 650px) {
    font-size: 1.125rem;
    display: flex;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
`
