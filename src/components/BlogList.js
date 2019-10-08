import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, PostList } from "./designSystem/designSystem"

const WorkIndex = () => {
  const data = useStaticQuery(graphql`
    query blogList {
      allMdx(
        filter: { fields: { sourceName: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              excerpt
              company
              thumbnail
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
    <PostList>
      {posts.map(({ node: post }) => (
        <li key={post.id}>
          <h3>
            <Link underline={false} to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h3>
          <p>{post.frontmatter.excerpt}</p>
        </li>
      ))}
    </PostList>
  )
}

export default WorkIndex
