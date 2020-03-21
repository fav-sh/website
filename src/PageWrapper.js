import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Headroom from 'react-headroom'
import { data } from './data'
import styled from 'styled-components'

const brand = require('/assets/brandImage.png')
const { brandHref, firefoxHref, chromeHref, githubHref } = data

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
              <CustomNavLink href={firefoxHref}>Firefox Version</CustomNavLink>
              <CustomNavLink disabled href={chromeHref}>
                Chrome Version (Coming Soon)
              </CustomNavLink>
              <CustomNavLink href={githubHref}>Github</CustomNavLink>
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

const CustomNavLink = styled(Nav.Link)`
  color: #eceff1;
  :hover {
    color: #f4511e;
  }
`
