import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <h1>about</h1>
      <p>I am currently polishing my portfolio with gatsby</p>
      <p>
        <Link to="/contact">want to work with me?</Link>
      </p>
    </Layout>
  )
}

export default about
