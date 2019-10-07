import styled from "@emotion/styled"
import Atoms from "./atoms"

const PlainList = styled("ul")`
  border-top: 1px solid #e2e8f0;
  list-style-type: none;
  margin-bottom: ${Atoms.spacing.large};

  @media (max-width: ${Atoms.breakpoints.medium}) {
  }

  @media (max-width: ${Atoms.breakpoints.narrow}) {
    padding-top: ${Atoms.spacing.medium};
  }

  li {
    height: 11rem;
    position: relative;

    @media (max-width: ${Atoms.breakpoints.medium}) {
      height: auto;
    }

    @media (max-width: ${Atoms.breakpoints.narrow}) {
      height: auto;
      margin-bottom: ${Atoms.spacing.medium};
    }

    :after {
      background: #e2e8f0;
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      z-index: 3;
    }

    a {
      align-items: center;
      display: flex;
      height: 100%;
      transition: all 0.6s;
      z-index: 1;

      @media (max-width: ${Atoms.breakpoints.medium}) {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      @media (max-width: ${Atoms.breakpoints.narrow}) {
        display: block;
        padding-bottom: ${Atoms.spacing.medium};
      }

      :hover {
        color: #222;
        transform: scale(1.05);

        @media (max-width: ${Atoms.breakpoints.narrow}) {
          transform: none;
        }
      }
      :before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -1rem;
        right: -1rem;
        background: none;
        border-radius: 15px;
        transition: all 0.6s;
        z-index: -1;

        @media (max-width: ${Atoms.breakpoints.medium}) {
          left: -1rem;
          right: -1rem;
        }
      }
      :hover:before {
        background: #edf2f7;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);

        @media (max-width: ${Atoms.breakpoints.narrow}) {
          background: transparent;
          box-shadow: none;
        }
      }

      img {
        background: #666;
        border-radius: 10px;
        display: block;
        height: 9rem;
        width: 9rem;

        @media (max-width: ${Atoms.breakpoints.narrow}) {
          height: auto;
          margin-bottom: ${Atoms.spacing.small};
          width: 100%;
        }
      }
      div {
        padding-left: ${Atoms.spacing.medium};
        width: 75%;

        @media (max-width: ${Atoms.breakpoints.narrow}) {
          padding-left: 0;
          width: 100%;
        }

        span {
          background-color: #718096;
          border-radius: 4px;
          color: ${Atoms.colors.wash};
          display: inline-block;
          font-family: ${Atoms.font.family.sans};
          font-size: 0.65rem;
          margin-bottom: ${Atoms.spacing.xxsmall};
          padding: 0.1rem 0.35rem;
        }
        h3 {
          font-family: ${Atoms.font.family.sans};
          font-size: ${Atoms.font.size.large};
          margin-bottom: ${Atoms.spacing.xxsmall};
        }
        p {
          font-family: ${Atoms.font.family.serif};
          margin-bottom: ${Atoms.spacing.xsmall};
        }
        button {
          background: transparent;
          border: none;
          color: ${Atoms.colors.subhead};
          font-family: ${Atoms.font.family.serif};
          font-size: ${Atoms.font.size.regular};
        }
      }
    }
  }
`

export default PlainList
