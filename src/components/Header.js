import React from "react"
import styled from "@emotion/styled"
import { Atoms } from "./designSystem/designSystem"
import Link from "../components/designSystem/Link"
import Wrapper from "../components/Wrapper"

const StyledHeader = styled("header")`
  border-bottom: 1px solid #eaeaea;
  display: flex;
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  justify-content: space-between;
  padding: ${Atoms.spacing.small};

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
        Brian Saunders
      </Link>
    </div>
    <ul>
      <li>
        <Link underline={false} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link underline={false} to="/blog">
          Writing
        </Link>
      </li>
    </ul>
  </StyledHeader>
)

export default Header
