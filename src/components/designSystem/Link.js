import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css } from "@emotion/core"
import { Atoms } from "./designSystem"

const styles = underline => css`
  color: inherit;
  text-decoration: ${underline ? "underline" : "none"};
  transition: all 0.25s;

  &:hover,
  &:focus {
    color: ${Atoms.colors.site};
  }
`

const Link = ({ children, href, to, underline = true, ...other }) => {
  if (to !== undefined) {
    return (
      <GatsbyLink css={styles(underline)} to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a css={styles(underline)} href={href} {...other}>
      {children}
    </a>
  )
}

export default Link
