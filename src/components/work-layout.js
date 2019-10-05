import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import { Global } from "@emotion/core"
import Wrapper from "../components/Wrapper"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <DesignSystemProvider>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
          html: {
            background: "#F8F8F8",
            color: "#222",
            fontFamily: "IBM Plex",
            fontSize: "16px",
            lineHeight: "1.625rem",
          },
        }}
      />
      <Wrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Wrapper>
    </DesignSystemProvider>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
