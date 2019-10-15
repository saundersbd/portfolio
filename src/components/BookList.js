import React from "react"
import styled from "@emotion/styled"
import Atoms from "./designSystem/atoms"
import Book from "./Book"

const books = [
  {
    title: "Team of Rivals",
    author: "Goris Kearns Goodwin",
    cover: "images/books/team-of-rivals.jpg",
    url: "https://amzn.to/2VNprr5",
  },
  {
    title: "TED Talks: The Official TED Guide to Public Speaking",
    author: "Chris Anderson",
    cover: "images/books/ted.jpg",
    url: "https://amzn.to/2MCmjdu",
  },
  {
    title: "Stein on Writing",
    author: "Sol Stein",
    cover: "images/books/stein-on-writing.jpg",
    url: "https://amzn.to/2Biau6N",
  },
  {
    title: "Dreyer's English",
    author: "Benjamin Dreyer",
    cover: "images/books/dreyers-english.jpg",
    url: "https://amzn.to/32hoJoy",
  },
  {
    title: "10% Happier",
    author: "Dan Harris",
    cover: "images/books/happier.jpg",
    url: "https://amzn.to/33xtmuW",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    cover: "images/books/search-for-meaning.jpg",
    url: "https://amzn.to/2MfF2MT",
  },
]

const Library = styled("div")`
  align-content: start;
  place-items: start;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`

const BookList = () => (
  <Library>
    {books.map(({ title, author, cover, url }) => (
      <Book author={author} cover={cover} title={title} url={url} key={title} />
    ))}
  </Library>
)

export default BookList
