import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Image from "../Image"
import * as designSystem from "./designSystem"

const components = {
  blockquote: designSystem.Blockquote,
  h1: designSystem.H1,
  h2: designSystem.H2,
  h3: designSystem.H3,
  h4: designSystem.H4,
  p: designSystem.P,
  a: designSystem.Link,
  ul: designSystem.UL,
  hr: designSystem.HR,
  table: designSystem.Table,
  Image,
  Link: designSystem.Link,
}

const DesignSystemProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default DesignSystemProvider
