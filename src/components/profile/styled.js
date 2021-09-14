import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  aligm-items: flex-start;
`

export const WrapperInfoUser  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  // height: 200px
  margin-left: 8px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  a {
    margin-left: 8px;
    color: blue;
    font-weight: bold;
    font-size: 18px;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px; 
  height: 200px; 
  margin: 8px;
`
