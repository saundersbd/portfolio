import styled from "@emotion/styled"
import Atoms from "./atoms"

export default styled("h4")`
  color: ${Atoms.colors.subhead};
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  hyphens: initial;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`
