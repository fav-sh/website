import React from 'react'
import styled from 'styled-components'
import { Chrome, Firefox } from './Icons'
import { CHROME_LINK, FIREFOX_LINK } from '../data'

export default () => {
  return (
    <Container>
      <LinkButton href={FIREFOX_LINK}>
        <Firefox />
        <PadLeft>Download for Firefox</PadLeft>
      </LinkButton>
      <LinkButton href={CHROME_LINK}>
        <Chrome />
        <PadLeft>Download for Chrome</PadLeft>
      </LinkButton>
    </Container>
  )
}

const Container = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1.5em;
`

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  background: transparent;
  box-shadow: unset;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding-left: 0.25em;
  padding-right: 0.25em;
  text-decoration: none;
`

const PadLeft = styled.span`
  padding-left: 0.5em;
`
