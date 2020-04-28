import React from 'react'
import styled from 'styled-components'
import { useScreenshot } from '../hooks/useScreenshot'
import { useLogo } from '../hooks/useLogo'
import { ImageWithBorder, HeaderImage } from '../components/Image'
import {
  Container,
  OuterContainer,
  HeaderContainer,
} from '../components/Containers'
import Layout from '../components/Layout'
import CTA from '../components/CTA'
import { GITHUB_LINK } from '../data'

export default () => {
  const screenshot = useScreenshot()
  const logo = useLogo()
  return (
    <Layout>
      <OuterContainer>
        <Container>
          <div>
            <ImageWithBorder fluid={screenshot} />
            <CTA />
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
            <p>Fav is open source and licensed under the MIT license.</p>
          </Right>
        </Container>
      </OuterContainer>
      <Footer>
        <a href={GITHUB_LINK}>Source Code</a>
        <p>
          Made with &hearts; by <a href="https://glvn.co">Sunny Golovine</a>
        </p>
      </Footer>
    </Layout>
  )
}

const Footer = styled.p`
  bottom: 3.5em;
  text-align: center;
  width: 100%;
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
