import React from "react"
import { useStaticQuery } from "gatsby"
import { Link, PlainList } from "./designSystem/designSystem"

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
    <div>
      <PlainList>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <h3>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h3>

            <p>{post.excerpt}</p>
          </li>
        ))}
      </PlainList>
    </div>
  )
}

export default WorkIndex
