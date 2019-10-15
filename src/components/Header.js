import React from "react"
import styled from "@emotion/styled"
import { Atoms } from "./designSystem/designSystem"
import Link from "../components/designSystem/Link"

const StyledHeader = styled("header")`
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  justify-content: space-between;
  padding: ${Atoms.spacing.xsmall} ${Atoms.spacing.small};

  .logo {
    font-weight: bold;
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin-left: ${Atoms.spacing.small};
    }
  }
`

const Header = () => (
  <StyledHeader>
    <div className="logo">
      <Link underline={false} to="/">
        Home
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/library" underline={false}>
          Library
        </Link>
      </li>
    </ul>
  </StyledHeader>
)

export default Header
