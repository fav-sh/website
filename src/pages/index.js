import React from 'react'
import Image from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import { useScreenshot } from '../hooks/useScreenshot'
import { useLogo } from '../hooks/useLogo'

export default () => {
  const screenshot = useScreenshot()
  const logo = useLogo()
  return (
    <>
      <GlobalStyle />
      <OuterContainer>
        <Container>
          <div>
            <ImageWithBorder fluid={screenshot} />
          </div>
          <Right>
            <HeaderContainer>
              <HeaderImage fluid={logo} />
              <h1>Say hello to Fav!</h1>
            </HeaderContainer>
            <p>
              Fav is an open source bookmark manager that works with Firefox and
              Chrome and syncs your bookmarks with Github Gist.
            </p>
            <h3>Quickly Add Bookmarks</h3>
            <p>
              Fav automatically prefills the page you are on when you go to add
              a bookmark. If you like to quickly set a bookmark and return to it
              later, Fav is here for you
            </p>
            <h3>Tag and Search Bookmarks</h3>
            <p>Tag your bookmarks and search for them instantly later</p>
            <h3>Github Integration</h3>
            <p>
              With built in Github integration you can backup, share and
              collaborate with your bookmarks. Whether sharing a bookmark
              collection of cool wikipedia articles or a collection of bookmarks
              for work. Fav is made for every type of situation.
            </p>
            <h3>Open Source</h3>
            <p>Fav is open source and liscensed under the MIT license.</p>
          </Right>
        </Container>
      </OuterContainer>
    </>
  )
}

const ImageWithBorder = styled(Image)`
  border-radius: 7.5px;
  width: 700px;
  @media (max-width: 700px) {
    width: 90%;
  }
`

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Right = styled.div`
  flex-grow: 1;
  width: 600px;
  padding-left: 1.5em;
  h1 {
    padding-top: 0;
    margin-top: 0;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    margin-top: 1em;
  }
`
const HeaderImage = styled(Image)`
  height: 64px;
  width: 64px;
`

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #1E88E5;
  }
  h1,h2,h3,h4,h5,h6,a,p {
    color: #ECEFF1
  }
`
