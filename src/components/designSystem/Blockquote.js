import styled from "@emotion/styled"
import { Atoms } from "./designSystem"

export default styled("blockquote")`
  border-left: 2px solid ${Atoms.colors.subhead};
  font-style: italic;
  padding-left: ${Atoms.spacing.xsmall};
`
