import styled from "@emotion/styled"
import Atoms from "./atoms"

const PlainList = styled("ul")`
  list-style-type: none;
  li {
    margin-bottom: ${Atoms.spacing.medium};
  }
`

export default PlainList
