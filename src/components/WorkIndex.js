import React from "react"
import { useStaticQuery } from "gatsby"
import { Link, PlainList } from "./designSystem/designSystem"
import H2 from "./designSystem/H2"

const WorkIndex = () => {
  const data = useStaticQuery(graphql`
    query workIndex {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    <div>
      <H2 id="work">Work</H2>
      <PlainList>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link underline={false} to={post.fields.slug}>
              <img src={post.frontmatter.thumbnail} alt="" />
              <div>
                <span>{post.frontmatter.company}</span>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.excerpt}</p>
                <button>Read More</button>
              </div>
            </Link>
          </li>
        ))}
      </PlainList>
    </div>
  )
}

export default WorkIndex
