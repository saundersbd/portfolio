import styled from "@emotion/styled"
import Atoms from "./atoms"

export default styled("table")`
  font-size: ${Atoms.font.size.regular};
  margin-bottom: ${Atoms.spacing.medium};

  thead:empty {
    visibility: hidden;
  }

  td {
    padding-top: ${Atoms.spacing.xxsmall};
    padding-right: ${Atoms.spacing.small};
    padding-bottom: ${Atoms.spacing.xxsmall};
    padding-left: none;
    vertical-align: top;
  }
  td:first-of-type {
    font-weight: bold;
    width: 30%;
  }
`
