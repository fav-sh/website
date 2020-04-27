import Image from 'gatsby-image'
import styled from 'styled-components'

export const ImageWithBorder = styled(Image)`
  border-radius: 7.5px;
  width: 700px;
  @media (max-width: 700px) {
    width: 90%;
  }
`

export const HeaderImage = styled(Image)`
  height: 64px;
  width: 64px;
`
