import styled from "@emotion/styled"
import React from "react"
import Atoms from "./designSystem/atoms"

const StyledWrapper = styled("div")`
  margin: 0 auto;
  padding: 0 ${Atoms.spacing.medium};
  max-width: ${Atoms.widths.container};
`

export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
