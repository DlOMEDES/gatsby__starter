import React, { Fragment } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { GlobalStyle } from "../theme/GlobalStyle"
import styled from "styled-components"

const Container = styled.section`
  margin: 0 auto;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`
const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          {children}
        </Content>
        <Footer />
      </Container>
    </Fragment>
  )
}

export default Layout
