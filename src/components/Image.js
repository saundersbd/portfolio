import React from "react"
import styled from "@emotion/styled"
import { Atoms } from "./designSystem/designSystem"

const Figure = styled("figure")`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Atoms.spacing.medium};
  margin-right: -5rem;
  margin-left: -5rem;

  @media (max-width: ${Atoms.breakpoints.medium}) {
    margin-left: 0;
    margin-right: 0;
  }

  img {
    display: block;
    width: 100%;
  }
  span {
    margin-top: ${Atoms.spacing.xxsmall};
  }
`

const Caption = styled("span")`
  color: var(--meta-color, ${Atoms.colors.meta});
  font-size: ${Atoms.font.size.small};
  letter-spacing: 0.025em;
  text-align: center;
`

const Image = ({ ...props }) => (
  <Figure>
    <img alt={props.alt} src={props.src} />
    <Caption>{props.caption}</Caption>
  </Figure>
)

export default Image
