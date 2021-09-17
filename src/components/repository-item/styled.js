import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 8px;
  align-content: center;
  width: 25%;
  height: 100px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span, a {
    text-decoration: underline;
  }

  a {
    color: blue;
    font-weight: bold;
  }
`
