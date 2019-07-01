import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { getUser, isLoggedIn, logout } from "../services/auth"

const Header = ({ siteTitle }) => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          {isLoggedIn() ? <Link to="/app/profile">Profile</Link> : null}
          <Link to="/page-2">Page 2</Link>
          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}
            >
              Logout
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
