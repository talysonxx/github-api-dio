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
  margin-left: 8px;
`

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  span {
    margin-left: 8px;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px; 
  height: 200px; 
  margin: 8px;
`
