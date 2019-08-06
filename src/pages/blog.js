import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <h1>Blog Page</h1>
      <p>Post will show up here</p>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.title}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default blog
