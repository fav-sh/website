import React from 'react'
import { PageWrapper } from './PageWrapper'
import { Jumbotron, Button, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'
import { data } from './data'

const { chromeHref, firefoxHref } = data

// Images
// https://imgur.com/a/sRGqnup

const add = 'https://i.imgur.com/iW6r8Mc.png'
const tags = 'https://i.imgur.com/2bq7xyB.png'
const search = 'https://i.imgur.com/Hj5rTE7.png'
const sync = 'https://i.imgur.com/fHowct0.png'
const headerImage = require('/assets/headerImage.png')

const MainPage = () => {
  const renderJumbotron = () => {
    return (
      <Jumbotron className="jumbo">
        <h1>Say Hello to Fav</h1>
        <img src={headerImage} fluid height="500" alt="header-image" />
        <p>
          Fav is an open source bookmark manager that works with Firefox and
          Chrome and syncs your bookmarks with Github Gist.
        </p>
        <p>
          <CustomButton disabled href={chromeHref} variant="outline-light">
            Get Fav for Chrome (Coming Soon!)
          </CustomButton>
          <CustomButton href={firefoxHref} variant="outline-light">
            Get Fav for Firefox
          </CustomButton>
        </p>
      </Jumbotron>
    )
  }

  const renderFeatures = () => {
    return (
      <>
        <p class="section-header">Features</p>
        <div class="section">
          <p class="section-subheader">Quickly add Bookmarks</p>
          <p class="section-text">
            Fav automatically prefills the page you are on when you go to add a
            bookmark. If you like to quickly set a bookmark and return to it
            later, Fav is here for you
          </p>
        </div>

        <div class="section">
          <p class="section-subheader">Tag and Search Bookmarks</p>
          <p class="section-text">
            Tag your bookmarks and filter for them later. Additionally you can
            search bookmarks instantly by name.
          </p>
        </div>

        <div class="section">
          <p class="section-subheader">Github Integration</p>
          <p class="section-text">
            With built in Github integration you can backup, share and
            collaborate with your bookmarks. Whether sharing a bookmark
            collection of cool wikipedia articles or a collection of bookmarks
            for work. Fav is made for every type of situation.
          </p>
        </div>

        <div class="section">
          <p class="section-subheader">Open Source</p>
          <p class="section-text">
            Fav is open source and liscensed under the MIT license.
          </p>
        </div>
      </>
    )
  }

  const renderScreenshots = () => {
    return (
      <div class="section">
        <p class="section-header">Screenshots</p>
        <Row>
          <Col xs={8} md={5}>
            <img src={add} alt="add" />
          </Col>
          <Col xs={8} md={5}>
            <Image src={tags} alt="tags" />
          </Col>
          <Col xs={8} md={5}>
            <Image src={search} alt="search" />
          </Col>
          <Col xs={8} md={5}>
            <Image src={sync} alt="sync" />
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <PageWrapper>
      {renderJumbotron()}
      {renderFeatures()}
      {renderScreenshots()}
    </PageWrapper>
  )
}

export default MainPage

const CustomButton = styled(Button)`
  margin: 0.5em;
`
