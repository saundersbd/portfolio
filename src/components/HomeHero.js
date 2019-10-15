import React from "react"
import styled from "@emotion/styled"
import Atoms from "./designSystem/atoms"
import H1 from "./designSystem/H1"
import P from "./designSystem/P"
import Link from "./designSystem/Link"
import AnchorLink from "react-anchor-link-smooth-scroll"

const StyledSection = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (max-width: ${Atoms.breakpoints.medium}) {
    height: 80vh;
  }

  a.scroll-btn {
    display: inline-block;

    @media (max-width: ${Atoms.breakpoints.medium}) {
      display: none;
    }
  }

  .mouse {
    width: 3px;
    padding: 3px 10px;
    height: 28px;
    border: 1.5px solid ${Atoms.colors.subhead};
    border-radius: 25px;
    opacity: 0.5;
    box-sizing: content-box;

    :hover {
      background: #fff;
      transition: all 0.6s;
    }
  }

  .scroller {
    width: 3px;
    height: 8px;
    border-radius: 25%;
    background-color: ${Atoms.colors.subhead};
    animation-name: scroll;
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    20% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`

const HomeHero = () => (
  <StyledSection>
    <H1>I’m Brian Saunders, a Product Designer who lives in Chicago.</H1>
    <P>
      I do all the things that the other Product Designers do, and I do some of
      them quite well! Right now I’m improving employee engagement and working
      on design systems at Paylocity. I’m happiest when I know that my work is
      making someone’s life easier.
    </P>

    <P>
      Get in touch with me at{" "}
      <Link href="mailto:saundersbd@gmail.com">saundersbd@gmail.com</Link>.
      Resume is available{" "}
      <Link href="/documents/saunders-resume.pdf">here</Link>.
    </P>

    <div>
      <AnchorLink href="#work" className="scroll-btn">
        <div className="scroll-down">
          <div className="mouse">
            <div className="scroller"></div>
          </div>
        </div>
      </AnchorLink>
    </div>
  </StyledSection>
)

export default HomeHero
