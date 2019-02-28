import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './Menu'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Menu>
        <Link to={'/'}>about</Link>
        <Link to={'/projects'}>projects</Link>
        <Link to={'/cv'}>kontakt</Link>
      </Menu>
      <Link to="/">
        { siteTitle }
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
