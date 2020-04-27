import React from 'react'
import 'normalize.css'
import GlobalStyles from '../globalStyles'

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyles />
    {children}
  </React.Fragment>
)
