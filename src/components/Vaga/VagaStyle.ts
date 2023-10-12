import styled from 'styled-components'

export const Li = styled.li`
  border: 1px solid ${(props) => props.theme['cor-principal']};
  background-color: ${(props) => props.theme['cor-secundaria']};
  color: ${(props) => props.theme['cor-principal']};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme['cor-principal']};
    color: ${(props) => props.theme['cor-secundaria']};

    a {
      border-color: ${(props) => props.theme['cor-principal']};
      background-color: ${(props) => props.theme['cor-secundaria']};
      color: ${(props) => props.theme['cor-principal']};
    }
  }
`
export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Link = styled.a`
  border-color: ${(props) => props.theme['cor-secundaria']};
  background-color: ${(props) => props.theme['cor-principal']};
  color: ${(props) => props.theme['cor-secundaria']};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
