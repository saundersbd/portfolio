import React from "react"
import styled from "@emotion/styled"
import { Atoms } from "./designSystem/designSystem"
import Link from "../components/designSystem/Link"
import Wrapper from "../components/Wrapper"

const StyledFooter = styled("footer")`
  border-top: 1px solid #e2e8f0;
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
`

const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <Link to="/">Back</Link>
    </Wrapper>
  </StyledFooter>
)

export default Footer
