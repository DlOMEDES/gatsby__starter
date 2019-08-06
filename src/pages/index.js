import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const { title, author } = data.site.siteMetadata

  return (
    <Layout>
      <h1>{title}</h1>
      <h3>I'm {author}, a frontend developer living in Philadelphia</h3>
      <p>
        Need a developer? <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default index
