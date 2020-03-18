import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Headroom from 'react-headroom'

const brandHref = '#'
const chromeHref = '#'
const firefoxHref = '#'
const githubHref = '#'
const brand = require('/assets/brandImage.png')
const headerImage = require('/assets/headerImage.png')

export const PageWrapper = ({ children }) => {
  const renderHeader = () => {
    return (
      <Headroom>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href={brandHref}>
            <img
              src={brand}
              alt="icon"
              className="d-inline-block align-top header-icon"
              height="32px"
              width="32px"
            />
            Fav Bookmark Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href={firefoxHref}>Firefox Version</Nav.Link>
              <Nav.Link href={chromeHref}>Chrome Version</Nav.Link>
              <Nav.Link href={githubHref}>Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    )
  }

  return (
    <div className="page-container">
      {renderHeader()}
      <div className="content-container">{children}</div>
    </div>
  )
}
