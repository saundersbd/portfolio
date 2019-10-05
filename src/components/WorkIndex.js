import React from "react"
import { Link, useStaticQuery } from "gatsby"

const WorkIndex = () => {
  const data = useStaticQuery(graphql`
    query workIndex {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allMdx
  return (
    <ul>
      {posts.map(({ node: post }) => (
        <li key={post.id}>
          <Link to={post.fields.slug}>
            <h3>{post.frontmatter.title}</h3>
          </Link>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  )
}

export default WorkIndex
