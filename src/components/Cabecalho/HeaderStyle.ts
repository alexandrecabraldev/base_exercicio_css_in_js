import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme['cor-secundaria']};
  color: ${(props) => props.theme['cor-principal']};
  text-align: center;
  padding: 24px 0;
`
