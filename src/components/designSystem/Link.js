import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css } from "@emotion/core"
import { Atoms } from "./designSystem"

const styles = underline => css`
  color: inherit;
  text-decoration: ${underline ? "underline" : "none"};
  &:hover,
  &:focus {
    color: ${Atoms.colors.site};
  }
`

const Link = ({ children, href, to, underline, ...other }) => {
  return (
    <GatsbyLink css={styles(underline)} to={to} {...other}>
      {children}
    </GatsbyLink>
  )
}

export default Link
