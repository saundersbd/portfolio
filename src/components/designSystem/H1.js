import React from "react"
import { css } from "@emotion/core"
import Atoms from "./atoms"

const H1 = ({ ...props }) => {
  const style = css`
    line-height: 1;
    margin-bottom: ${Atoms.spacing.medium};
  `

  return (
    <h1 css={style} {...props}>
      {props.children}
    </h1>
  )
}

export default H1
