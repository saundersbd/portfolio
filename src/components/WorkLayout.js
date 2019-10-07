import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import { Global } from "@emotion/core"
import { Atoms } from "./designSystem/designSystem"
import Header from "../components/Header"
import Footer from "../components/Footer"
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
            background: Atoms.colors.wash,
            color: Atoms.colors.text,
            fontFamily: "IBM Plex Serif",
            fontSize: "125%",
            lineHeight: Atoms.baseline,

            [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
              fontSize: "100%",
            },
          },
        }}
      />
      <Helmet></Helmet>
      <Header />
      <Wrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Wrapper>
      <Footer />
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
