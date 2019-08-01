import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const index = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <p>I'm Diomedes Lajara, a frontend developer living in Philadelphia</p>
      <p>
        Need a developer? <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default index
