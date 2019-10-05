import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Wrapper from "../components/Wrapper"

const StyledHeader = styled("header")`
  border-bottom: 1px solid #eaeaea;
`

const WorkHeader = () => (
  <StyledHeader>
    <Wrapper>
      <Link to="/">Back</Link>
    </Wrapper>
  </StyledHeader>
)

export default WorkHeader
