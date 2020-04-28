import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

export const OuterContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  @media (max-width: 1100px) {
    height: 100vh;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    margin-top: 1em;
  }
`
