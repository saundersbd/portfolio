import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, PostList } from "./designSystem/designSystem"
import H2 from "./designSystem/H2"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query BlogIndex {
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
      <H2 id="work">Writing</H2>
      <PostList>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <H3>
              <Link underline={false} to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </H3>
            <P>{post.frontmatter.date}</P>
          </li>
        ))}
      </PostList>
    </div>
  )
}

export default BlogIndex
