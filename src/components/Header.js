import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0 1rem;
  }

  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      margin: 0 1rem;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">DL.</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
