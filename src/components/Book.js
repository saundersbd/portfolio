import React from "react"
import styled from "@emotion/styled"
import Atoms from "./designSystem/atoms"
import Link from "./designSystem/Link"

const BookLink = styled(Link)`
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  text-decoration: none;
`

const BookImage = styled("img")`
  width: 100%;
`

const Meta = styled("span")`
  color: ${Atoms.colors.subhead};
`

const Book = ({ author, cover, title, url }) => (
  <BookLink href={url}>
    <BookImage src={cover} />
    <p>
      {title}
      <br />
      <Meta>{author}</Meta>
    </p>
  </BookLink>
)

export default Book
