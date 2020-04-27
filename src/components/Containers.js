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
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    margin-top: 1em;
  }
`
