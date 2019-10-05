import styled from "@emotion/styled"
import React from "react"

const StyledWrapper = styled("div")`
  margin: 0 auto;
  padding: 32px 30px;
  width: 600px;
`

export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
