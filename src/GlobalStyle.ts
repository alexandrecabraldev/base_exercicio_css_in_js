import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  @media (max-width: 1024px) {
    max-width: 80%;
  }

  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}
body {
  padding-bottom: 120px;
}
`
