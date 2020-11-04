import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato','sanserif';
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
}

main {
  @media(min-width: 650px) {
    font-size: 1.125rem;
    display: flex;
    width: 100vw;
  }
}
`
